import React from 'react'

require('../stylesheets/SearchBox.scss')

export default function SearchBox(props) {
  return (
    <div className="search-box">
      <form action="" onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.query}
            onChange={props.handleChange}
            placeholder="Begreb..."
          />
        <button type="submit">Slå op</button>
      </form>
    </div>
  )
}

SearchBox.propTypes = {
  handleSubmit: React.PropTypes.func,
  handleChange: React.PropTypes.func,
  query: React.PropTypes.string,
}
