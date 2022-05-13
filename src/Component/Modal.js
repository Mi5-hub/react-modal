import React, { useState } from "react";
import ReactModal from "./Modal/react-modal-by-mino-randy";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        handleClose={setIsOpen}
        title={"My Modal"}
        modalContent={
          <>
            <div className="modal-content">
              <label>Name</label>
              <input placeholder="Name"></input>
              <label>FirstName</label>
              <input placeholder="FirstName"></input>
              <label>Email</label>
              <input placeholder="Email"></input>
            </div>
          </>
        }
        footerContent={
          <>
            <button onClick={(e)=>setIsOpen(false)} className="btn-save">
              Save
            </button>
          </>
        }
      ></ReactModal>
    </div>
  );
}

export default Modal;
