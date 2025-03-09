import Input from "./Input";
import Button from "./Button";

const General = ( props ) => {
  if (props.showForm) {
    return (
      <>
        <h2>Summary Info</h2>
        <Input
          id="personName"
          name="personName"
          type="text"
          value={props.personName}
          placeholder="Your Name"
          onChange={props.onChange}
        />
        <Input
          id="email"
          name="email"
          type="email"
          value={props.email}
          placeholder="Your Email"
          onChange={props.onChange}
        />
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={props.phone}
          placeholder="Your Phone Number"
          onChange={props.onChange}
        />
        <Button text={props.buttonText} onClick={props.onClick} />
      </>
    );
  }
  return (
    <>
      <h2>Summary Info</h2>
      <ul>
        <li>{props.personName}</li>
        <li>{props.email}</li>
        <li>{props.phone}</li>
      </ul>
    </>
  );
};

export default General;
