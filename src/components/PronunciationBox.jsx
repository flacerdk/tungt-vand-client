import React from 'react'
import { Button } from 'react-bootstrap/lib'
import AudioButton from './AudioButton'

export default function PronunciationBox(props) {
  let pronunciations = ''
  if (props.pronunciations.length > 0) {
    const items = props.pronunciations.map((e) => {
      const pronunciationKey = e.audio ? (
        <AudioButton
          transcription={e.transcription}
          link={e.audio}
        />) : (
          <div className="transcription">
            <Button>{e.transcription}</Button>
          </div>
        )
      return (
        <li className="pronunciation-key">
          <div className="details">{e.details}</div>
          {pronunciationKey}
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
    </div>
  )
}

PronunciationBox.propTypes = {
  pronunciations: React.PropTypes.arrayOf(React.PropTypes.object),
}

PronunciationBox.defaultProps = {
  pronunciations: [],
}
