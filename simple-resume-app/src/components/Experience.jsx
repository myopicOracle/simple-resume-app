import Input from  './Input'
import Button from './Button'

const Experience = ({ buttonText, onClick }) => {

  return (
    <>
      <Input id={'text'} type={'text'} placeholder={'Company Name'} />
      <Input id={'text'} type={'text'} placeholder={'Position Title'} />
      <Input id={'text'} type={'text'} placeholder={'Job Duties'} />
      <Input id={'date'} type={'date'} placeholder={'Dates of Employment'} />
      <Button text={buttonText} onClick={onClick}/>
    </>
  )
}

export default Experience