export const ContactItem = (props) => {
  let { name, surname, phone, id } = props.contact;
  return (
    <div className="contact-items">
      <div className="contact-item">
        <p className="contact-item__name">{name}</p>
        <p className="contact-item__surname">{surname}</p>
        <p className="contact-item__phone">{phone}</p>
      </div>
      <button
        onClick={() => {
          props.OnDelBtnClick(id);
        }}
        className="contact-item__btn-delet"
      >
        DEL
      </button>
    </div>
  );
};
