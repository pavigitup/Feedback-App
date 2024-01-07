import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {clickes: false}

  reactEmojis = () => this.setState({clickes: true})

  render() {
    const {clickes} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    if (clickes === true) {
      return (
        <div className="main-con">
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1>Thank You!</h1>
          <p>
            You will use your feedback to improve our customer support
            performance!
          </p>
        </div>
      )
    }

    return (
      <div className="main-con">
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="inner-con">
          {emojis.map(each => (
            <li key={each.id}>
              <button type="button" onClick={this.reactEmojis}>
                <img src={each.imageUrl} alt={each.name} />
                <p>{each.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Feedback
