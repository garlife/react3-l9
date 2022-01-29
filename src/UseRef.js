import React from 'react';

const UseRef = () => {
  const myRef = useRef();

  return (
    <>
      <h1>Ссылки</h1>
      <label>Текст </label>
      <input type="text" ref={myRef} />
    </>
  );
};
export default UseRef;
