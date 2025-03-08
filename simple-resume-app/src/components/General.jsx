import Input from  './Input'
import Phone from  './Phone'
import Button from './Button'

const General = () => {
  return (
    <>
      <Input id={id} type={type} placeholder={placeholder} />
      <Input id={id} type={type} placeholder={placeholder} />
      <Phone id={id} type={type} placeholder={placeholder} />
      <Button text={'submit'} onClick={handleClickSubmit}/>
      <Button text={'edit'} onClick={handleClickEdit}/>
    </>
  )
}

export default General