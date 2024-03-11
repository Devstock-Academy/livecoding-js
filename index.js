let x = 5
console.log(x)

x += 3 // x teraz wynosi 8
console.log(x)

x -= 3

let y = '5'
console.log(x == y) // true, porównanie wartości
console.log(x === y) // false, porównanie wartości i typu

let a = 7
let b = 10
console.log(a < b) // true
console.log(a >= 7) // true

if (x > 10) {
  console.log('x jest większe od 10')
} else {
  console.log('x jest mniejsze lub równe 10')
}

for (let i = 1; i <= 5; i++) {
  x += i // Zwiększ x o wartość i za każdym obrotem pętli
  console.log(x)
}
