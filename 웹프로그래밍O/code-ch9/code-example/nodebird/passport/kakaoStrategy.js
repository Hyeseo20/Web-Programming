/* passport/kakaoStrategy.js */

const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

const User = require("../models/user");

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: "/auth/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("kakao profile", profile);
        try {
          const exUser = await User.findOne({
            // kakao에서 전달받은 profile.id가 DB에 존재하는지 확인
            where: { snsId: profile.id, provider: "kakao" },
          });
          if (exUser) {
            // 일치하는 데이터가 있으면 인증 성공
            done(null, exUser);
          } else {
            // 없으면 새로 생성
            const newUser = await User.create({
              email: profile._json && profile._json.kakao_account_email,
              nick: profile.displayName,
              snsId: profile.id,
              provider: "kakao",
            });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
