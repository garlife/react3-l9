import React, { useState } from 'react';

export default function App() {
  const [person, setPerson] = useState({
    firstName: 'David',
    secondName: 'Fisherman',
    isFemale: false,
    age: 0,
    favouriteFruit: ''
  });

  console.log('App', person);

  function handlerPerson(event) {
    setPerson(event.target.value);
  }

  function handlerChange(event) {
    const { name, value } = event.target;
    const newPerson = {...person};
    newPerson[name] = value;
    setPerson(newPerson);
  }

  return (
    <>
      <form onSubmit={handlerPerson}>
        <label>firstName</label>
        <input type="text"
          name="firstName"
          value={person.firstName}
          onChange={handlerChange}
        />
        <br />
        <label>secondName</label>
        <input type="text"
          name="secondName"
          value={person.secondName}
          onChange={handlerChange}
        />
        <br />
        <label>Age</label>
        <input type="text" name="age" value={person.age} onChange={handlerChange} />
        <br />
        <label>isFemale</label>
        <input type="checkbox" name="isFemale" value={person.isFemale} onChange={handlerChange} />
        <br />
        <label>
          любимый фрукт:
          <select value={person.value} onChange={handlerChange}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            
            <option value="mango">Манго</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Save to model" />
      </form>
    </>
  );
}
