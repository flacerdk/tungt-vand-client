import React from 'react'

require('../stylesheets/PronunciationBox.scss')

export default class AudioButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.audio.load()
    this.audio.play()
  }

  render() {
    return (
      <div className="transcription">
        <audio ref={(audio) => { this.audio = audio }}>
          <source src={this.props.link} type="audio/mp3" />
        </audio>
        <button
          onClick={this.handleClick}
        >
          {this.props.transcription}
        </button>
      </div>
    )
  }
}

AudioButton.propTypes = {
  link: React.PropTypes.string,
  transcription: React.PropTypes.string,
}
