import React, { useEffect } from "react";
import "./Drag.css";
import CancelPresentationTwoToneIcon from "@mui/icons-material/CancelPresentationTwoTone";
function ReactModal({ modalContent, title }) {
  let x = 10;
  let y = 10;

  const mouseDownHandler = async (e) => {
    x = e.clientX;
    y = e.clientY;

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = async (e) => {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    if (document.getElementById("dragMe")) {
      document.getElementById("dragMe").style.top = `${
        document.getElementById("dragMe").offsetTop + dy
      }px`;
      document.getElementById("dragMe").style.left = `${
        document.getElementById("dragMe").offsetLeft + dx
      }px`;
    }

    x = e.clientX;
    y = e.clientY;
  };

  const mouseUpHandler = async () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  const handleClose = async () => {
    document.getElementById("dragMe").style.display = "none";
  };
  const openModal = async () => {
    document.getElementById("dragMe").style.display = "block";
  };
  return (
    <div>
      <div id="dragMe" className="draggable">
        <div className="modal-header" onMouseDown={mouseDownHandler}>
          <CancelPresentationTwoToneIcon
            onClick={handleClose}
            className="icon_close"
          />
        </div>
        {modalContent}
        <div className="modal-footer">
          <button onClick={handleClose} className="btn-save">
            Save
          </button>
        </div>
      </div>

      <button onClick={openModal}>open Modal</button>
    </div>
  );
}

export default ReactModal;
