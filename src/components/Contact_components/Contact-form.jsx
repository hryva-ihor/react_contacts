export const ContactForm = (props) => {
  return (
    <div>
      <form className="contacts-form" action="#">
        <div className="contacts-form__input">
          <label htmlFor="setNewNameInputText">Name</label>
          <input
            onChange={props.inputValue}
            value={props.NameInputValue}
            type="text"
            name="setNewNameInputText"
          />
        </div>
        <div className="contacts-form__input">
          <label htmlFor="setNewSurnameInputText">Surname</label>
          <input
            onChange={props.inputValue}
            value={props.SurnameInputValue}
            type="text"
            name="setNewSurnameInputText"
          />
        </div>
        <div className="contacts-form__input">
          <label htmlFor="setNewPhoneInputText">Phone</label>
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
