const a = 10
const b = 5
const suma = a + b
console.log(`Suma: ${suma}`) // Suma: 15

const roznica = a - b
console.log(`Różnica: ${roznica}`) // Różnica: 5

const iloczyn = a * b
console.log(`Iloczyn: ${iloczyn}`) // Iloczyn: 50

const iloraz = a / b
console.log(`Iloraz: ${iloraz}`) // Iloraz:

let liczba = 5
console.log(`Przed inkrementacją: ${liczba}`) // Przed inkrementacją: 5
liczba++
console.log(`Po postinkrementacji: ${liczba}`) // Po postinkrementacji: 6
++liczba
console.log(`Po preinkrementacji: ${liczba}`) // Po preinkrementacji: 7

let liczba2 = 5
console.log(`Przed dekrementacją: ${liczba2}`) // Przed dekrementacją: 5

liczba2--
console.log(`Po postdekrementacji: ${liczba2}`) // Po postdekrementacji: 4

--liczba2
console.log(`Po predekrementacji: ${liczba2}`) // Po predekrementacji: 3

let liczba3 = 10
let dzielnik = 3
let reszta = liczba3 % dzielnik
console.log(`Reszta z dzielenia ${liczba3} przez ${dzielnik} wynosi: ${reszta}`) // Reszta

// Zakładamy, że start i koniec są liczbami od 1 do 7, reprezentującymi dni tygodnia
let start = 1 // Poniedziałek
let koniec = 5 // Piątek

// Obliczamy różnicę dni między startem a końcem, +1 aby włączyć dzień końcowy w liczenie
let roznicaDni = koniec - start + 1

// Korygujemy różnicę dni o weekendy. Jeśli start lub koniec wpada na weekend, korygujemy liczbę dni.
let dniRobocze =
  roznicaDni - (start > 5 ? start - 5 : 0) - (koniec > 5 ? koniec - 5 : 0)

console.log(`Liczba dni roboczych: ${dniRobocze}`)
