import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Education = (props) => {
  const [showForm, setShowForm] = useState(true);

  if (showForm) {
    return (
      <div id='education-container'>
        <h2>Education & Qualifications</h2>
        <Input
          id="school"
          name="school"
          type="text"
          value={props.school}
          placeholder={"School Name"}
          onChange={props.onChange}
        />
        <Input
          id="major"
          name="major"
          type="text"
          value={props.major}
          placeholder={"Your Major"}
          onChange={props.onChange}
        />
        <Input
          id="gradDate"
          name="gradDate"
          type="date"
          value={props.gradDate}
          placeholder={"Graduation Date"}
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
    <div id='education-container'>
      <h2>Education & Qualifications</h2>
      <ul>
        <li><strong>School: </strong>{props.school}</li>
        <li><strong>Major: </strong>{props.major}</li>
        <li><strong>Grad Date: </strong>{props.gradDate}</li>
      </ul>
      <Button
        text={showForm ? "submit" : "edit"}
        onClick={() => setShowForm(!showForm)}
      />
    </div>
  );
};

export default Education;
