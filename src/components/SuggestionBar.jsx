import React from 'react'

require('../stylesheets/SuggestionBar.scss')

export default function SuggestionBar(props) {
  let suggestionList = null
  if (props.suggestions.length > 0) {
    const items = props.suggestions.map((e, i) => {
      const onClick = props.onClick.bind(null, e.link)
      return (
        <button key={i} onClick={onClick}>{e.text}</button>
      )
    })
    suggestionList = (
      <div className="suggestions">
        {items}
      </div>
    )
  }
  return suggestionList
}

SuggestionBar.propTypes = {
  suggestions: React.PropTypes.arrayOf(React.PropTypes.object),
  onClick: React.PropTypes.func,
}
