import React from "react";
import PropTypes from "prop-types";
import "../../css/main.css";
const Modal = ({ response, modalState, handleModalState }) => {
  return modalState ? (
    <div className={modalState ? "modal__container show" : "modal__container"}>
      <div className="modal__container--response">
        <p style={{ color: `${response.error ? "#F31431" : "#4BB543"}` }}>
          {response.success
            ? response.success.data.msg
            : `Looks like there was a problem sending the email...`}
        </p>
        <button onClick={e => handleModalState()}>Close</button>
      </div>
    </div>
  ) : (
    <></>
  );
};

Modal.propTypes = {
  response: PropTypes.object.isRequired
};

export default Modal;
