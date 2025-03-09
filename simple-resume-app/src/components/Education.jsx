import Input from  './Input'
import Button from './Button'

const Education = ({ showForm, onClick, buttonText }) => {

  const handleClick = () => {
    setForm();
  };

  return (
    <>
      <Input id={'text'} type={'text'} value={value} placeholder={'School Name'} />
      <Input id={'text'} type={'text'} value={value} placeholder={'Your Major'} />
      <Input id={'date'} type={'date'} value={value} placeholder={'Graduation Date'} />
      <Button text={buttonText} onClick={onClick}/>
    </>
  )
}

export default Education