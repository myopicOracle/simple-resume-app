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
  const  [ formInputs, setFormInputs ] = useState({
    showForm: true,
    personName: "",
    email: "",
    phone: "",
    school: '',
    major: '',
    gradDate: '',
    employer: '',
    position: '',
    duties: '',
    workDate: '',
  })

  const handleInputChange = (e) => {
    const [ name, value ] = e.target
    setFormInputs((otherInputs) => ({
      ...otherInputs, 
      [name]: value,
    }))
  };

  const handleSubmitButton = () => {
    setFormInputs((otherInputs) => ({
      ...otherInputs,
      showForm: !showForm,
    }))
  };

  return (
    <>
      <h1>Hello World.</h1>
      <General
        showForm={formInputs.showForm}
        personName={formInputs.personName}
        email={formInputs.email}
        phone={formInputs.phone}
        onChange={handleInputChange}
        onClick={handleSubmitButton}
        buttonText={formInputs.showForm ? "submit" : "edit"}
      />
      {/* <Education
        showForm={showForm}
        onClick={handleClick}
        buttonText={showForm ? "submit" : "edit"}
      />
      <Experience
        showForm={showForm}
        onClick={handleClick}
        buttonText={showForm ? "submit" : "edit"}
      /> */}
    </>
  );
}

export default App;
