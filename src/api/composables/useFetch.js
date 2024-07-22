import { reactive } from 'vue'
import { getURL } from '@api/config'

export const useFetch = async (url, method = 'get') => {
  const data = reactive({
    response: []
  })

  try {
    const response = await fetch(getURL(url), {
      method
    })

    data.response = await response.json()
  } catch (err) {
    data.response = err
  }

  return { data }
}
