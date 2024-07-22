export const getURL = (path) => {
  const API_URL = 'https://api.themoviedb.org/3/'
  const API_KEY = '8301f46923b8f5b8c0ec187d61d3c5c2'

  return `${API_URL}${path}${path.includes('?') ? '&' : '?'}api_key=${API_KEY}`
}
