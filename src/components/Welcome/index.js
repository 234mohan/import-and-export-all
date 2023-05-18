import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onClickDisplay = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      return <button> Subscribed </button>
    }
    return <button> Subscribe </button>
  }

  render() {
    return (
      <div>
        <h1> Welcome </h1>
        <p> Thank You! Happy Learning </p>
        <button onClick={this.onClickDisplay}> Subscribe </button>
      </div>
    )
  }
}

export default Welcome
