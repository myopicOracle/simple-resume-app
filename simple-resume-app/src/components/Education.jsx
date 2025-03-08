import Input from  './Input'
import Date from  './Date'
import Button from './Button'

const Education = () => {
  return (
    <>
      <Input id={id} type={type} placeholder={placeholder} />
      <Input id={id} type={type} placeholder={placeholder} />
      <Date id={id} type={type} placeholder={placeholder} />
      <Button text={'submit'} onClick={handleClickSubmit}/>
      <Button text={'edit'} onClick={handleClickEdit}/>
    </>
  )
}

export default Education