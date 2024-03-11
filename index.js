let a = 10
let b = a // 'b' jest niezależną kopią 'a'
b = 20 // Zmiana 'b' nie wpływa na 'a'
console.log({ a, b })

let obj1 = { value: 10 }
let obj2 = obj1 // 'obj2' jest referencją do 'obj1'
obj2.value = 20 // Zmiana 'obj2' wpływa również na 'obj1'
console.log({ obj1, obj2 })

const obj3 = JSON.parse(JSON.stringify(obj2))

obj3.value = 50

console.log({ obj1, obj2, obj3 })
