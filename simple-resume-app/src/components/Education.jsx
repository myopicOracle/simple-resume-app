import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Education = (props) => {
  const [showForm, setShowForm] = useState(true);

  if (showForm) {
    return (
      <>
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
      </>
    );
  }
  return (
    <>
      <h2>Education & Qualifications</h2>
      <ul>
        <li>{props.school}</li>
        <li>{props.major}</li>
        <li>{props.gradDate}</li>
      </ul>
      <Button
        text={showForm ? "submit" : "edit"}
        onClick={() => setShowForm(!showForm)}
      />
    </>
  );
};

export default Education;
