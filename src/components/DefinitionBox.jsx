import React from 'react'
import styles from '../stylesheets/entry.css'

function buildExampleList(items, header, renderFunction) {
  let exampleList = null
  if (typeof items !== 'undefined' && items.length > 0) {
    const exampleItems = items.map(renderFunction)
    exampleList = (
      <div className="examples">
        <div className={styles.entryHeader}>
          {header}
        </div>
        <div className={styles.exampleList}>
          {exampleItems}
        </div>
      </div>
    )
  }
  return exampleList
}

export default function DefinitionBox(props) {
  let definitions = null
  if (props.definitions.length > 0) {
    const items = props.definitions.map((e) => {
      const grammar = buildExampleList(e.grammar, 'Grammar', g => (<div className={styles.example}>{g}</div>))
      const examples = buildExampleList(e.examples, 'Examples', g => (<div className={styles.example}>{g}</div>))
      const synonyms = buildExampleList(e.synonyms, 'Synonyms', g => (<div className={styles.example}>{g.text}</div>))
      const quotes = buildExampleList(e.quotes, 'Quotes', g => (<div className={styles.example}>{g}</div>))

      return (
        <div className={styles.definition}>
          <div className={styles.entryDefinition}>
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
        <div className={styles.header}>
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
