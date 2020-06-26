import React from "react";
import PropTypes from "prop-types";
import style from "../Contact.module.scss";
const Modal = ({ response, modalState, handleModalState }) => {
  return modalState ? (
    <div className={modalState ? `${style.modal} ${style.show}` : style.modal}>
      <div className={style.response}>
        <p style={{ color: `${response.error ? "#F31431" : "#4BB543"}` }}>
          {response.success
            ? response.success.data.msg
            : `Looks like there was a problem sending the email...`}
        </p>
        <button onClick={(e) => handleModalState()}>Close</button>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  response: PropTypes.object.isRequired,
};

export default Modal;
