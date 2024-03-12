const score = 75
if (score > 50) {
  console.log('Gratulacje! Zdałeś egzamin.')
}

const age = 18
if (age >= 18) {
  console.log('Masz dostęp do treści dla dorosłych.')
} else {
  console.log('Dostęp zabroniony.')
}

const temperature = 22
if (temperature > 30) {
  console.log('Jest bardzo gorąco.')
} else if (temperature > 20) {
  console.log('Jest przyjemnie.')
} else {
  console.log('Jest chłodno.')
}

const day = 'środa'
switch (day) {
  case 'poniedziałek':
    console.log('Dzisiaj jest poniedziałek.')
    break
  case 'wtorek':
    console.log('Dzisiaj jest wtorek.')
    break
  case 'środa':
    console.log('Dzisiaj jest środa.')
    break
  default:
    console.log('Nie jesteśmy pewni, jaki jest dzisiaj dzień.')
}

const now = new Date()
const dayOfWeek = now.getDay() // Dzień tygodnia jako liczba (0-6, gdzie 0 to niedziela)
const hour = now.getHours() // Aktualna godzina

let activitySuggestion = ''

switch (dayOfWeek) {
  case 1: // Poniedziałek
    activitySuggestion = 'Planowanie tygodnia'
    break
  case 5: // Piątek
    activitySuggestion = 'Podsumowanie tygodnia'
    break
  default:
    activitySuggestion = 'Praca nad bieżącymi projektami'
}

if (hour < 10) {
  activitySuggestion += ' i poranna rutyna'
} else if (hour >= 10 && hour < 14) {
  activitySuggestion += ' i najważniejsze zadania dnia'
} else {
  activitySuggestion += ' i planowanie kolejnego dnia'
}

console.log(`Sugerowana aktywność: ${activitySuggestion}`)
