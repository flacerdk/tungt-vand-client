import React from 'react'
import styles from '../stylesheets/entry.css'

export default function Title({ title, inflection }) {
  const inflectionElement =
    inflection ? (<span className={styles.inflection}>({inflection})</span>) : null
  return (
    <div className={styles.definitionHeader}>
      <div className={styles.title}>
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
