import React from 'react'
import './style.css'
import Typing from 'react-typing-animation'

class Photothingy extends React.Component {
  state = {
    word: '',
    end: false
  }
  
  componentDidMount() {
    this.setNewWord()
  }
  
  setNewWord = () => {
    const captions = this.props.captions
    this.setState({
      word: captions[Math.floor(Math.random()*captions.length)]
    })
  }

  
  render () {
    return (
      <div className={this.props.item} data-aos={this.props.aosAction || 'fade-up'}>
        <p className={this.props.textclass}>
          <Typing loop={true} hideCursor={true} onFinishedTyping={() => this.setNewWord()}>
            <span>{this.state.word}</span>
            <Typing.Backspace count={this.state.word.length} delay={5000} />
          </Typing>
        </p>
      </div>
    )
  }
}


export default Photothingy