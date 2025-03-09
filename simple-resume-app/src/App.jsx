import { useState } from "react";
import "./styles/App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  // const  [ formGeneral, setFormGeneral ] = useState({
  //   showForm: true,
  //   personName: "",
  //   email: "",
  //   phone: "",
  // });
  // const [ formEducation , setFormEducation ] = useState({
  //   showForm: true,
  //   school: '',
  //   major: '',
  //   gradDate: '',
  // })
  // const [ formExperience , setFormExperience ] = useState({
  //   showForm: true,
  //   employer: '',
  //   position: '',
  //   duties: '',
  //   workDate: '',
  // })
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

  // const handleSubmitButton = () => {
  //   setFormInputs((otherInputs) => ({
  //     ...otherInputs,
  //     showForm: !formInputs.showForm,
  //   }))
  // };

  return (
    <>
      <h1>Hello World.</h1>
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
    </>
  );
}

export default App;
