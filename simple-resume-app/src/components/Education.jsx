import Input from  './Input'
import Button from './Button'

const Education = ({ buttonText, onClick }) => {
  
  return (
    <>
      <Input id={'text'} type={'text'} placeholder={'School Name'} />
      <Input id={'text'} type={'text'} placeholder={'Your Major'} />
      <Input id={'date'} type={'date'} placeholder={'Graduation Date'} />
      <Button text={buttonText} onClick={onClick}/>
    </>
  )
}

export default Education