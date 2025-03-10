import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Experience = (props) => {
  const [showForm, setShowForm] = useState(true);

  if (showForm) {
    return (
      <div id='experience-container'>
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
      </div>
    );
  }
  return (
    <div id='experience-container'>
      <h2>Professional Experience</h2>
      <ul>
        <li><strong>Company Name: </strong>{props.employer}</li>
        <li><strong>Position Title: </strong>{props.position}</li>
        <li><strong>Job Duties: </strong>{props.duties}</li>
        <li><strong>Dates of Employment: </strong>{props.workDate}</li>
      </ul>
      <Button
        text={showForm ? "submit" : "edit"}
        onClick={() => setShowForm(!showForm)}
      />
    </div>
  );
};

export default Experience;
