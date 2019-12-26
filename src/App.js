import React, { Component } from "react";

// props:変更不可能、親から子に渡す
// state:変更可能、コンポーネント内部の値

//まずは全消し
// カウンターアプリを作る
// AppからCounterを呼ぶものを作成

// const App = () => <Counter></Counter>;

// class Counter extends Component {

//　componentの初期化時に呼ばれる
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   handlePlusButton = () => {
// まずはconsole.logを表示する
//     this.setState({ count: this.state.count + 1 });
//   };
//   handleMinusButton = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <React.Fragment>
//まずはカウントを表示する
//         <div>count: {this.state.count}</div>
//         <button onClick={this.handlePlusButton}>+1</button>
//         <button onClick={this.handleMinusButton}>-1</button>
//       </React.Fragment>
//     );
//   }
// }

export default App;
