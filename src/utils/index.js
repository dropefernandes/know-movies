const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const dateFormat = (date = '') => {
  const data = new Date(date)

  return `${data.getDate()} ${months[data.getMonth()]} ${data.getFullYear()}`
}

export const timeFormat = (value) => {
  const hours = Math.floor(value / 60)
  const minutes = value % 60

  return hours ? `${hours}h ${minutes}m` : `${minutes}m`
}
