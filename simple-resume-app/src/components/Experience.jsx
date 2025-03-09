import Input from  './Input'
import Button from './Button'

const Experience = ({ showForm, onClick, buttonText }) => {

  const handleClick = () => {
    setForm();
  };

  return (
    <>
      <Input id={'text'} type={'text'} value={value} placeholder={'Company Name'} />
      <Input id={'text'} type={'text'} value={value} placeholder={'Position Title'} />
      <Input id={'text'} type={'text'} value={value} placeholder={'Job Duties'} />
      <Input id={'date'} type={'date'} value={value} placeholder={'Dates of Employment'} />
      <Button text={buttonText} onClick={onClick}/>
    </>
  )
}

export default Experience