const Input = (props) => {
    return (
      <>
        <label htmlFor={props.id}></label>
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        ></input>
      </>
    )
};

export default Input;
