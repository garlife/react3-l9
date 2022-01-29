import React from 'react';
import './style.css';

function withAuthUser(Comp) {
  const WrapperComp = (props) => {
    if (!props.isAuth) {
      return <p>Smth wrong!</p>;
    }
    return (
      <>
        <div>Our brand new WRAPPER!</div>
        <Comp name={props.name} />
      </>
    );
  };
  return WrapperComp;
}

function User({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Congrats, user</p>
    </div>
  );
}

function Admin({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Congrats, Admin!</p>
    </div>
  );
}

function SuperUser({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Congrats, you are SuperUser!</p>
    </div>
  );
}

export default function App(props) {
  return (
    <div>
      {/* <User name={...props} />
      <SuperUser name={...props} />
      <Admin name={...props} /> */}
      {withAuthUser(User)(props)}
    </div>
  );
}
