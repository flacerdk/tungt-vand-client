import React from 'react'

require('../stylesheets/ErrorPage.scss')

export default function ErrorPage() {
  const title = (<h1>Ingen resultater!</h1>)
  return (
    <div className="error-panel">
      {title}
      Vi kunne ikke finde noget. Prøv igen!
    </div>
  )
}
