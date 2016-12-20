import queryString from 'query-string'

export default function fetchAndParse(options) {
  const query = queryString.stringify(options)
  return fetch(`http://127.0.0.1:3000/ddo?${query}`)
    .then(response => response.text())
    .catch(ex => console.log(ex))
}
