// 
let str = 'aaa@bbb@ccc'
console.log(
    str.slice(0,3) + '!' + str.slice(4,7) + '!' + str.slice(8,11)
)
// 
let hw = 'HELLOWORLD'
hw = hw.toLowerCase(1)
console.log(
    hw[0].toUpperCase(0) + hw.slice(1, 5) + ' ' + hw.slice(5)
)
// 
let text = 'Hello, it is HTML'
console.log(
    text.slice(0, 13) + 'not JS'  
)
// 
let user = 'alex'
console.log(
    user.charAt().toUpperCase() + user.slice(1)
)
// 
console.log(
    Math.round(Math.random()*1000000)
)