import React from 'react'
import { Button } from 'react-bootstrap/lib'

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
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.handleClick}
        >
          {this.props.transcription}
        </Button>
      </div>
    )
  }
}

AudioButton.propTypes = {
  link: React.PropTypes.string,
  transcription: React.PropTypes.string,
}
