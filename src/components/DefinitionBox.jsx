import React from 'react'
import ExampleList from './ExampleList'

require('../stylesheets/DefinitionBox.scss')

export default function DefinitionBox(props) {
  let definitions = null
  if (props.definitions.length > 0) {
    const items = props.definitions.map((e) => {
      const grammar = (
        <ExampleList
          content={e.grammar}
          title="Grammar"
          elementCb={g => (<div className="example">{g}</div>)}
        />)
      const examples = (
        <ExampleList
          content={e.examples}
          title="Examples"
          elementCb={g => (<div className="example">{g}</div>)}
        />)
      const synonyms = (
        <ExampleList
          content={e.synonyms}
          title="Synonyms" elementCb={g => (<div className="example">{g.text}</div>)}
        />)
      const quotes = (
        <ExampleList
          content={e.quotes}
          title="Quotes"
          elementCb={g => (<div className="example">{g}</div>)}
        />)

      return (
        <div className="definition">
          <div className="entry-definition">
            {e.definition}
          </div>

          {grammar}
          {examples}
          {synonyms}
          {quotes}
        </div>
      )
    })
    definitions = (
      <div className="definition-panel">
        <div className="header">
          {props.header}
        </div>
        {items}
      </div>
    )
  }

  return definitions
}

DefinitionBox.propTypes = {
  definitions: React.PropTypes.arrayOf(React.PropTypes.object),
  header: React.PropTypes.string,
}
