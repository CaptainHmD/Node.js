// console.log('test')
const { format }= require('date-fns')
const {v4: uuid}= require('uuid')
console.log(format(new Date(), 'yyyymmdd \t HH:mm:ss'));
console.log(new Date());

console.log(uuid());

// setInterval(()=>{
// console.log(format(new Date(),'ss'));
// },1000)
