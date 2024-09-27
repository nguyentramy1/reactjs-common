import React, { useState } from "react";
import "./App.scss";
import Button from "./common/Button/Button.tsx";
import Input from "./common/Input/Input.tsx";
import DropDownField from "./common/Input/DropDown/DropDownField.tsx";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState("tra my");

  const handleFormSubmit = (name: string) => {
    console.log(`Name submitted: ${name}`);
    setShowForm(false);
  };

  const changeName = () => {
    setName("my");
  };
  const fakeOptions = [
    {
      value: "opt1",
      label: "option 1",
    },
    {
      value: "opt2",
      label: "option 2",
    },

    {
      value: "opt3",
      label: "option 3",
    },
    {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    }, {
      value: "opt1",
      label: "option 1",
    },
  ];


  return (
    <div className="App">
      {/* <header className="App-header">
        <Button
          content="Show Me"
          onClick={() => setShowForm(true)}
          disabled={showForm}
        />
        <Button
          content="Show Me 2"
          onClick={() => setShowForm(true)}
          disabled={showForm}
          className="show-me-2"
        />
        <Button
          content="Hide Me"
          onClick={() => setShowForm(false)}
          disabled={!showForm}
        />
        <Button content="Set my name" onClick={changeName} />
        {showForm && <Input onChange={setName} value={name} />}
      </header> */}
      <DropDownField options={fakeOptions} />
    </div>
    
  );
}

export default App;











file cuar dduc
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Input from "../Input/Input";
import DropDownField, { optionType } from "../Input/DropDown/DropDownField";
import Button from "../Button/Button";
import "./FormDropDown.scss";
 
type Props = {
    onClose: () => void;
    isOpen: boolean;
}
 
const FormDropDown: React.FC<Props> = ({ onClose, isOpen }) => {
    const [selected1, setSelected1] = useState<optionType | null>(null);
    const [text, setText] = useState("");
 
    const handleOnchange = () => {
        setText((text) => {
            if(text == ""){
                return text = "Chưa chọn Option";
            }
            return text = `${selected1?.value}`;
        })
    };
 
 
    const newArr = new Array(10).fill(null);
    const fakeOptions1 = newArr.map((_, index) => ({
        value: `option${index}`,
        label: `Lựa chọn số ${index}`,
    }));
 
    return  ReactDOM.createPortal(
        <div className={`modal-overlay ${isOpen ? 'open' : 'close'}`} onClick={onClose}>
            <div className={`modal-content ${isOpen ? 'open' : 'close'}`} onClick={(e) => e.stopPropagation()} >
                <h1>Thêm mới bảng lương</h1>
                <div className="form-input">
                    <div className="enter-text">
                        <h2>Tên bảng lương <p>*</p></h2>
                        <Input placeHolder="Nhập tên bảng lương" onChange={handleOnchange} value={text? text : "Bảng lương theo kỳ lương"} className="custom-input"/>
                    </div>
                    <div className="drop-option">
                        <h2>Kỳ lương<p>*</p></h2>
                        <div className="drop-field-salary">
                            <DropDownField options={fakeOptions1} onChange={setSelected1} selected={selected1?.label}/>
                        </div>
                    </div>
                </div>
                <div className="form-btn">
                    <Button label="Thoát" onClick={onClose} className="btn-exit"/>
                    <Button label="Lưu" onClick={handleOnchange} className="btn-save"/>
                </div>
            </div>
        </div>,
        document.body
    ) ;
};
 
export default FormDropDown;
 
 
--scss
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity .3s ease, visibility .3s ease;
 
    &.open {
        opacity: 1;
        visibility: visible;
    }
 
    &.close {
        opacity: 0;
        visibility: hidden;
    }
}
 
.modal-content {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    max-width: 100%;
    width: 800px;
    transform: translateY(-20px);
    transition: transform .3s ease;
 
    &.open {
        transform: translateY(-100px);
    }
 
    &.close {
        transform: translateY(0);
    }
 
 
    h1{
        font-size: 18px;
        color: #003E5B;
        border-bottom: 1px solid #ccc;
        padding: 10px 20px;
    }
 
    .form-input{
        display: flex;
        justify-content: space-between;
        max-height: 300px;
        height: 120px;
        padding: 10px 20px;
        border-bottom: 1px solid #ccc;
        .enter-text{
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 45%;
            h2{
                display: flex;
                justify-content: start;
                align-items: center;
                max-height: 10px;
                font-size: 14px;
                font-weight: 400;
                p{
                color: red;
                font-size: 14px;
                }
            }
            .custom-input{
                img{
                    display: none;
                }
                input{
                    padding-left: 10px;
                }
            }
        }
 
        .drop-option{
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 45%;
            h2{
                display: flex;
                justify-content: start;
                align-items: center;
                max-height: 10px;
                font-size: 14px;
                font-weight: 400;
                p{
                color: red;
                font-size: 14px;
                }
            }
 
            .drop-field-salary{
                width: 100%;
                .input-dropdown{
                width: 100%;
                }
            }
        }
    }
 
    .form-btn{
        display: flex;
        margin-top: 10px;
        justify-content: end;
        align-items: center;
        padding: 10px 20px;
        gap: 8px;
        .btn-exit{
        width: 100px;
        }
       
        .btn-save{
        width: 100px;
        }
    }
}
