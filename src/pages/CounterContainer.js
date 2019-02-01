import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Count'
import { increment, incrementIfOdd, decrement, incrementAsync } from '../actions/count'
import {Button} from 'antd'

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
}

class CounterContainer extends React.Component {
  render () {
    const { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props
    return (
      <div>
        <Counter
          value={counter}
          onIncrement={increment}
          onDecrement={decrement}
          onIncrementAsync={incrementAsync}
          onIncrementIfOdd={incrementIfOdd}
        />
        <Button>dsada</Button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)


