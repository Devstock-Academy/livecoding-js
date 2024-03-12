const part1 = 'Hello, '
const part2 = 'world!'
const greeting = part1 + part2
console.log(greeting) // Wyświetli: Hello, world!

const user = {
  firstName: 'Anna',
  lastName: 'Kowalska',
}

const userDetails = `Użytkownik:
  Imię: ${user.firstName}
  Nazwisko: ${user.lastName}`
console.log(userDetails)

// Przykładowe dane użytkownika
const user2 = {
  firstName: 'Jan',
  lastName: 'Kowalski',
}
const firstName = 'Jan'
const lastName = 'Kowalski'

// Utworzenie obiektu Date
const now = new Date()
const formattedDate = `${now.getFullYear()}-${
  now.getMonth() + 1
}-${now.getDate()}`
const formattedTime = `${now.getHours()}:${now.getMinutes()}`

// Utworzenie zaawansowanego stringa z użyciem szablonów stringów
const detailedInfo = `Użytkownik: ${user2.firstName} ${user2.lastName}
Data: ${formattedDate}
Czas: ${formattedTime}
Życzymy miłego dnia!`

console.log(detailedInfo)
