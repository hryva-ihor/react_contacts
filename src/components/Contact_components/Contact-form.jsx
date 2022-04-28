export const ContactForm = (props) => {
  return (
    <div>
      <form className="contacts-form" action="#">
        <div>
          <label htmlFor="setNewNameInputText">Name</label>
          <input
            onChange={props.inputValue}
            value={props.NameInputValue}
            type="text"
            name="setNewNameInputText"
          />
        </div>
        <div>
          <label htmlFor="setNewSurnameInputText">Surname</label>
          <input
            onChange={props.inputValue}
            value={props.SurnameInputValue}
            type="text"
            name="setNewSurnameInputText"
          />
        </div>
        <div>
          <label htmlFor="setNewPhoneInputText">Tel</label>
          <input
            onChange={props.inputValue}
            value={props.PhoneInputValue}
            type="tel"
            name="setNewPhoneInputText"
          />
        </div>
        <button onClick={props.addNewContact}>ADD</button>
      </form>
    </div>
  );
};
