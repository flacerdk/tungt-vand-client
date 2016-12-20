import React from 'react'

export default function Title({ title, inflection }) {
  const inflectionElement =
    inflection ? (<span className="inflection">({inflection})</span>) : null
  return (
    <div className="definition-header">
      <div className="title">
        {title}
        {inflectionElement}
      </div>
    </div>
  )
}

Title.propTypes = {
  title: React.PropTypes.string,
  inflection: React.PropTypes.string,
}
