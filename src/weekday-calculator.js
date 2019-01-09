export function weekdayCalculator(year, month, day){
  const date = new Date(year, (month-1), day)
  const dayOfWeek = date.getDay()
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return weekdays[dayOfWeek];
}
