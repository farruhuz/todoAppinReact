import React, { useEffect, useState } from "react";
import "./EditModal.css";

const EditModal = ({cancelBtn, editField, editTodoYes}) => {

  const [editBool, setEditBool] = useState(false);
  const [editFieldState, setEditFieldState] = useState("");
  const [field, setField] = useState({});

  useEffect(()=>{
    setEditFieldState(editField.val)
    setField(editField)
  },[])

  const onChangeEditField = (e) =>{
    setEditFieldState(e.target.value);
    const field = {
      id : editField.id,
      val : e.target.value.trim(),
      isValid : true
    }
  setField(field)
  }

  const onCancelBtnHandler = () =>{
    setEditBool(false);
    cancelBtn(editBool);
  }

  const onOkBtnHandler = () =>{
    editTodoYes(field)
    setEditBool(false);
    cancelBtn(editBool);
  }

  return (
    <>
      <div className="modal-background" onClick={onCancelBtnHandler} ></div>
      <div className="edit-modal">
        <div className="modal-header"></div>
        <div className="modal-content">
          <input type="text" value={editFieldState} onChange={onChangeEditField}/>
        </div>
        <div className="confirm-modal">
          <button onClick={onOkBtnHandler}>Ok</button>
          <button onClick={onCancelBtnHandler}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default EditModal;
