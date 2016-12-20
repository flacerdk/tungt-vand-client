import queryString from 'query-string'

export default function fetchAndParse(options) {
  const query = queryString.stringify(options)
  return fetch(`/ddo?${query}`)
    .then(response => response.text())
    .catch(ex => console.log(ex))
}
