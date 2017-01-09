import React from 'react'
import AudioButton from './AudioButton'

require('../stylesheets/PronunciationBox.scss')

export default function PronunciationBox(props) {
  let pronunciations = ''
  if (props.pronunciations.length > 0) {
    pronunciations = props.pronunciations.map((e) => {
      const pronunciationKey = e.audio ? (
        <AudioButton
          transcription={e.transcription}
          link={e.audio}
        />) : (
          <div className="transcription">
            <button>{e.transcription}</button>
          </div>
        )
      return (
        <li className="pronunciation-key">
          <div className="details">{e.details}</div>
          {pronunciationKey}
        </li>
      )
    })
  }
  return (
    <ul className="pronunciations">
      {pronunciations}
    </ul>
  )
}

PronunciationBox.propTypes = {
  pronunciations: React.PropTypes.arrayOf(React.PropTypes.object),
}

PronunciationBox.defaultProps = {
  pronunciations: [],
}
