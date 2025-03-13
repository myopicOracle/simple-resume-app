import { useState } from "react";
import "./styles/App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {

  const [formInputs, setFormInputs] = useState({
    personName: "",
    email: "",
    phone: "",
    school: "",
    major: "",
    gradDate: "",
    employer: "",
    position: "",
    duties: "",
    workDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((otherInputs) => ({
      ...otherInputs,
      [name]: value,
    }));
  };

  return (
    <div id='main'>
      <h1>Resume Builder 1.0</h1>
      <General
        personName={formInputs.personName}
        email={formInputs.email}
        phone={formInputs.phone}
        onChange={handleInputChange}
      />
      <Education
        school={formInputs.school}
        major={formInputs.major}
        gradDate={formInputs.gradDate}
        onChange={handleInputChange}
      />
      <Experience
        employer={formInputs.employer}
        position={formInputs.position}
        duties={formInputs.duties}
        workDate={formInputs.workDate}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default App;
