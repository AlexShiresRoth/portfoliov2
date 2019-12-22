import React, { Fragment, useState } from "react";
import axios from "axios";
import Modal from "./modal/Modal";
import "../css/main.css";

const Contact = ({ contactRef }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [response, setResponse] = useState({
    success: "",
    error: ""
  });
  const [modalState, setModalState] = useState(false);

  const { name, email, message } = inputs;

  const initialState = {
    name: "",
    email: "",
    message: ""
  };

  const handleInput = event => {
    if (event) {
      event.preventDefault();

      setInputs({ ...inputs, [event.target.name]: [event.target.value] });
    }
  };

  const handleModalState = () => {
    return setModalState(!modalState);
  };

  const formSubmit = async e => {
    e.preventDefault();
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    const messageInfo = {
      name: name,
      email: email,
      message: message
    };
    return await axios({
      method: "post",
      url: `${corsAnywhere}https://asrserver.herokuapp.com/api/portfolio/send-email?email=${messageInfo.email}&name=${messageInfo.name}&message=${messageInfo.message}`,
      data: {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000/",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    })
      .then(response => {
        setInputs({ ...initialState });
        setResponse({
          success: response
        });
        setModalState(true);
        setTimeout(() => {
          setModalState(false);
        }, 5000);
      })
      .catch(error => {
        setModalState(true);
        setResponse({
          error: error.response.data
        });
        setTimeout(() => {
          setModalState(false);
        }, 5000);
      });
  };

  const renderForm = () => {
    return (
      <div className="section__contact" ref={contactRef}>
        <Modal
          modalState={modalState}
          response={response}
          handleModalState={handleModalState}
        />
        <div className="section__contact--container">
          <h2>Want to work together?</h2>
          <hr></hr>
          <form
            onSubmit={e => formSubmit(e)}
            className="section__contact--container--form"
          >
            <div className="section__contact--container--form--input-row">
              <div className="section__contact--container--form--input-row--icon-box">
                <i className="far fa-user"></i>
              </div>
              <input
                name="name"
                type="text"
                placeholder="First & Last Name"
                value={name}
                onChange={e => handleInput(e)}
                required
              />
            </div>
            <div className="section__contact--container--form--input-row">
              <div className="section__contact--container--form--input-row--icon-box">
                <i className="far fa-envelope"></i>
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => handleInput(e)}
                required
              />
            </div>
            <div className="section__contact--container--form--input-row">
              <textarea
                name="message"
                type="text"
                placeholder="How Can We Make this Happen?"
                rows="10"
                value={message}
                onChange={e => handleInput(e)}
                required
              />
            </div>
            <div className="section__contact--container--form--input-row">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return <Fragment>{renderForm()}</Fragment>;
};

export default Contact;
