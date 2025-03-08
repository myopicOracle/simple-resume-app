import Input from  './Input'
import TextField from  './TextField'
import Button from './Button'

const Experience = () => {
  return (
    <>
      <Input id={id} type={type} placeholder={placeholder} />
      <Input id={id} type={type} placeholder={placeholder} />
      <TextField id={id} type={type} placeholder={placeholder} />
      <Button text={'submit'} onClick={handleClickSubmit}/>
      <Button text={'edit'} onClick={handleClickEdit}/>
    </>
  )
}

export default Experience