import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Experience = (props) => {
  const [showForm, setShowForm] = useState(true);

  if (showForm) {
    return (
      <>
        <h2>Professional Experience</h2>
        <Input
          id="employer"
          name="employer"
          type="text"
          value={props.employer}
          placeholder={"Company Name"}
          onChange={props.onChange}
        />
        <Input
          id="position"
          name="position"
          type="text"
          value={props.position}
          placeholder={"Position Title"}
          onChange={props.onChange}
        />
        <Input
          id="duties"
          name="duties"
          type="text"
          value={props.duties}
          placeholder={"Job Duties"}
          onChange={props.onChange}
        />
        <Input
          id="workDate"
          name="workDate"
          type="date"
          value={props.workDate}
          placeholder={"Dates of Employment"}
          onChange={props.onChange}
        />
        <Button
          text={showForm ? "submit" : "edit"}
          onClick={() => setShowForm(!showForm)}
        />
      </>
    );
  }
  return (
    <>
      <h2>Professional Experience</h2>
      <ul>
        <li>{props.employer}</li>
        <li>{props.position}</li>
        <li>{props.duties}</li>
        <li>{props.workDate}</li>
      </ul>
      <Button
        text={showForm ? "submit" : "edit"}
        onClick={() => setShowForm(!showForm)}
      />
    </>
  );
};

export default Experience;
