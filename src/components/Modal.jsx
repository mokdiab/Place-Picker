import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ children, open, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
    if (!open) {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
