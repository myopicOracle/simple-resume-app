const Input = (props) => {
  
  return (
    <>
      <label htmlFor={id}></label>
      <input id={props.id} type={props.type} placeholder={props.placeholder}></input>
    </>
  )
}

export default Input 