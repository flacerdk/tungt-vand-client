import queryString from 'query-string'

export default function fetchAndParse(options) {
  const query = queryString.stringify(options)
  return fetch(`/ddo?${query}`)
    .then((response) => {
      if (response.status >= 300) {
        return Promise.reject(new Error(response.statusText))
      }
      return response.text()
    })
}
