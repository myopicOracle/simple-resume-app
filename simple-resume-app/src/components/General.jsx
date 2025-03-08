import Input from  './Input'
import Button from './Button'

const General = ({ buttonText, onClick }) => {

  return (
    <>
      <Input id={'text'} type={'text'} placeholder={'Your Name'} />
      <Input id={'email'} type={'email'} placeholder={'Your Email'} />
      <Input id={'tel'} type={'tel'} placeholder={'Your Phone Number'} />
      <Button text={buttonText} onClick={onClick}/>
    </>
  )
}

export default General