import React from 'react'

export default class AudioButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.audio.play()
  }

  render() {
    return (
      <div className="audio">
        <audio ref={(audio) => { this.audio = audio }}>
          <source src={this.props.link} type="audio/mp3" />
        </audio>
        <button onClick={this.handleClick}>Play!</button>
      </div>
    )
  }
}
