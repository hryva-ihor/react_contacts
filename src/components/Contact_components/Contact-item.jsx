export const ContactItem = (props) => {
  let { name, surname, phone, id } = props.contact;
  return (
    <div className="contact-item">
      <p className="contact-item__name">{name}</p>
      <p className="contact-item__surname">{surname}</p>
      <p className="contact-item__phone">{phone}</p>
      <button
        onClick={() => {
          props.OnDelBtnClick(id);
        }}
        className="todo_item__btn_delet"
      >
        DEL
      </button>
    </div>
  );
};
