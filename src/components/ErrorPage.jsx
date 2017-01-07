import React from 'react'
import { Panel } from 'react-bootstrap/lib'

require('../stylesheets/ErrorPage.scss')

export default function ErrorPage() {
  const title = (<h1>Ingen resultater!</h1>)
  return (
    <div className="error-panel">
      <Panel header={title} bsStyle="danger">
        Vi kunne ikke finde noget. Prøv igen!
      </Panel>
    </div>
  )
}
