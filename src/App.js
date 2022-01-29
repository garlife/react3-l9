import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select"

const user = {
  firstName: "",
  secondName: "",
  age: 0,
  isFemale: "",
  favouriteFruit: "",
};

function App() {
  const [person, setPerson] = useState(user);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    defaultValues: {
      firstName: "Ann",
    },
  }); //!!!

  const onSubmit = (e) => {
    e.preventDefault();
    //setPerson(e.target.value);
    console.log(e);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    const newPerson = { ...person };
    newPerson[name] = value;
    setPerson(newPerson);
  }

  console.log(
    watch("firstName"),
    watch("secondName"),
    watch("age"),
    watch("isFemale"),
    watch("favouriteFruit"),
    errors
  );

  return (
    <div className="App">
      <h1></h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input
            type="text"
            {...register("firstName", {
              required: true,
              pattern: /^[А-Я][а-я]+$/i,
            })}
          />
          {errors.firstName && (
            <span> This field is required/pattern violation </span>
          )}
        </label>
        <label>
          Surname
          <input
            type="text"
            {...register("secondName", { required: true, maxLength: 31 })}
          ></input>
          {errors.secondName && <span> This field is required! </span>}
        </label>
        <label>
          Age
          <input
            type="number"
            {...register("age", { min: 5, max: 100 })}
          ></input>
          {errors.number && <span>min/max err</span>}
        </label>
        <label>
          Female
          <input
            type="checkbox"
            {...register("isFemale", { required: true })}
          ></input>
        </label>
        <label>
          любимый фрукт:
          {/* <select {...register("favouriteFruit")}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>

            <option value="mango">Манго</option>
          </select> */}
          <Controller
            name="favouriteFruit"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "lime", label: "lime" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            )}
          />
        </label>

        <input type="submit" value="Save to model"></input>
      </form>
    </div>
  );
}

export default App;