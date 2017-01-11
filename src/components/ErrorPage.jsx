import React from 'react'

require('../stylesheets/ErrorPage.scss')

export default function ErrorPage() {
  return (
    <div className="error-panel">
      <div className="header">
        <h3>Ingen resultater!</h3>
      </div>
      <div className="body">
        Vi kunne ikke finde noget. Prøv igen!
      </div>
    </div>
  )
}
