import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class App extends Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// 本来なら親から子へ使わなきゃいけないものを、このように書くだけでどこでも使えるようにする
// 前述の通りProviderでラップする必要がある
const mapStateToProps = state => ({
  value: state.count.value
});

// 本来なら、親から子、更に孫などにイベント渡さないといけない
// これを使用することで、どこでもイベントを発火させることができる
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);
