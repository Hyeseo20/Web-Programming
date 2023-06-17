const promise1=Promise.resolve('성공1');
const promise2= Promis.resolve('성공2');
Promise.all([promise1, promise2])
.then((result)=> {
    console.log(result);
})
.catch((error)=> {
    console.error(error);
});
console.log(__filename);
console.log(__dirname);
setImmediate(()=> {
    console.log('nextTick');
});
ProcessingInstruction.nextTick(()=>{
    console.log('nextTick');
});
setTimeout(()=>{
    console.log('timeout');
}, 0);
Promise.resolve().then(()=> console.log('promise'));