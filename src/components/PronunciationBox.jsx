import React from 'react'
import AudioButton from './AudioButton'

export default function PronunciationBox(props) {
  let inflection = null
  if (props.inflection !== '') {
    inflection = (
      <div id="bojning">
        <p>{props.inflection}</p>
      </div>
    )
  }
  let pronunciations = null
  if (props.pronunciations.length > 0) {
    const items = props.pronunciations.map((e) => {
      const audio = (<AudioButton link={e.audio} />)
      return (
        <li>
          {e.text} {audio}
        </li>
      )
    })
    pronunciations = (
      <ul className="list-inline">
        {items}
      </ul>
    )
  }
  return (
    <div id="pronunciation">
      {pronunciations}
      {inflection}
    </div>
  )
}

PronunciationBox.propTypes = {
  inflection: React.PropTypes.string,
  pronunciations: React.PropTypes.arrayOf(React.PropTypes.object),
}

PronunciationBox.defaultProps = {
  inflection: '',
  pronunciations: [],
}
