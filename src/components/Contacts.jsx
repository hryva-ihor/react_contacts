// import React from "react";
import { useEffect, useState } from "react";
import "./Contacts.scss";
import { ContactForm } from "./Contact_components/Contact-form";
import { ContactItem } from "./Contact_components/Contact-item";

const API = "https://61e7eaede32cd90017acbe93.mockapi.io/contacts";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newNameInputText, setNewNameInputText] = useState("");
  const [newSurnameInputText, setNewSurnameInputText] = useState("");
  const [newPhoneInputText, setNewPhoneInputText] = useState("");

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setContacts(data));
  }, []);

  const addNewContact = (e) => {
    e.preventDefault();
    if (newNameInputText && newSurnameInputText && newPhoneInputText) {
      const newContact = {
        name: newNameInputText,
        surname: newSurnameInputText,
        phone: newPhoneInputText,
      };
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setContacts([...contacts, data]);
          setNewNameInputText("");
          setNewSurnameInputText("");
          setNewPhoneInputText("");
        });
    } else {
      alert(`inputs are empty`);
      return false;
    }
  };

  const OnDelBtnClick = (id) => {
    fetch(API + "/" + id, {
      method: "DELETE",
    });
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const inputValue = (e) => {
    switch (e.target.name) {
      case "setNewNameInputText":
        setNewNameInputText(e.target.value);
        break;
      case "setNewSurnameInputText":
        setNewSurnameInputText(e.target.value);
        break;
      case "setNewPhoneInputText":
        setNewPhoneInputText(e.target.value);
        break;
      default:
        alert("something wrong");
    }
  };
  return (
    <div className="contacts">
      <h1>Cotacts list</h1>
      {contacts.map((contact) => {
        return (
          <ContactItem
            contact={contact}
            key={contact.id}
            OnDelBtnClick={OnDelBtnClick}
          />
        );
      })}
      <h3>Add contact</h3>
      <ContactForm
        PhoneInputValue={newPhoneInputText}
        SurnameInputValue={newSurnameInputText}
        NameInputValue={newNameInputText}
        addNewContact={addNewContact}
        inputValue={inputValue}
      />
    </div>
  );
};
