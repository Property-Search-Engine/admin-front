import React from "react";

function Modal(props) {
  const { isOpen, handleModalToggle, children } = props;
  const classNames = isOpen ? "modalOverlay" : "modalOverlay modalHidden";
  function handleModalClick(e) {
    e.target.classList.contains("modalOverlay") && handleModalToggle();
  }
  return (
    <div className={classNames} onClick={handleModalClick}>
      {children}
    </div>
  );
}

export default Modal;
