import React from "react";

//まずはimport
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3 }
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = props => {
  return (
    <div>
      Hi I'm {props.name}, and {props.age}years old!
    </div>
  );
};

//このように書く
User.propTypes = {
  name: PropTypes.string,
  //必須の場合
  age: PropTypes.number.isRequired
};

export default App;
