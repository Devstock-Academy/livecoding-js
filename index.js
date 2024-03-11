let condition1 = true
let condition2 = false
condition1 && condition2 && console.log('Oba warunki są prawdziwe.')

let condition3 = null
let defaultCondition = condition3 || 'wartość domyślna'
console.log(defaultCondition) // Wypisze "wartość domyślna", ponieważ condition1 jest null.

let condition4 = false
let isTrue = !condition4
console.log(isTrue) // Wypisze "true", ponieważ wartość została odwrócona.

let userDefinedItemsPerPage = null // Użytkownik nie zdefiniował wartości
// Przypisanie liczby elementów na stronie z użyciem operatora nullish coalescing
let itemsPerPage = userDefinedItemsPerPage ?? 10
console.log(itemsPerPage) // Wypisze 10, ponieważ userDefinedItemsPerPage jest null

let isLoggedIn = true
let userLevel = 2
let isBetaTester = false
let isBlocked = false

let hasAccess = isLoggedIn && (userLevel > 1 || isBetaTester) && !isBlocked

console.log(`Użytkownik ma dostęp: ${hasAccess}`)
