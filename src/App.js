import React from "react";

//props 受け渡しの基礎

// const App = () => {
//   return (
//     <div>
//       <User name={"Taro"} />
//     </div>
//   );
// };

// const User = props => {
//   return;
//   <div>Hi I'm {props.name}!</div>;
// };

// const App = () => {
//   const profiles = [
//     { name: "Taro", age: 10 },
//     { name: "Hanako", age: 5 },
//     { name: "Noname" }
//   ];
//   return (
//     <div>
//       {profiles.map((profile, index) => {
//         return <User name={profile.name} age={profile.age} key={index} />;
//       })}
//     </div>
//   );
// };

//デフォルトの値も決めることができる
// User.defaultProps = {
//   age: 1
// };

export default App;
