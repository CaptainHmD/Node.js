// console.log(global);


//import
const os =  require('os')
const path = require('path')
const math = require('./math')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)


console.log("path")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

console.log('math')
console.log(math.add(2, 4))

// node does not have some JS APIs like fetch  fk


//https://www.youtube.com/watch?v=f2EqECiTBL8&list=LL&index=30&t=2757s&ab_channel=DaveGray
//17:27