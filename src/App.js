import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;





Modal.tsx
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './Modal-content.tsx';
import Button from "../Button/Button.tsx";

const PortalExample: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Button 
        content="Show modal using a portal" 
        onClick={() => setShowModal(true)} 
      />
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} label='Thêm mới bảng lương'/>,
        document.body
      )}
    </>
  );
};

export default PortalExample;



App.tsx
import React, { useState } from "react";
import "./App.scss";
import Button from "./common/Button/Button.tsx";
import DropDownField, { optionType } from "./common/Input/DropDown/DropDownField.tsx";
import ModalContent from './common/Modal/Modal.tsx';
import { createPortal } from 'react-dom';

function App() {
  const [selected1, setSelected1] = useState<optionType | null>(null);
  const [selected2, setSelected2] = useState<optionType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false); // Trạng thái cho modal

  // Dữ liệu cho dropdown
  const newArr = new Array(15).fill(null);
  const fakeOptions1 = newArr.map((_, index) => ({
    value: `option${index}`,
    label: `Lựa chọn số ${index}`,
  }));
  const fakeOptions2 = newArr.map((_, index) => ({
    value: `option${index}`,
    label: `Option ${index}`,
  }));

  // Hàm để đóng modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <DropDownField
        options={fakeOptions1}
        onChange={setSelected1}
        selected={selected1?.label}
      />
      <DropDownField
        options={fakeOptions2}
        onChange={setSelected2}
        selected={selected2?.label}
      />

      

      
   
        <ModalContent />
      
    </div>
  );
}

export default App;




modal.tsx
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './Modal-content.tsx';
import Button from "../Button/Button.tsx";

const PortalExample: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Button 
        content="Show modal using a portal" 
        onClick={() => setShowModal(true)} 
      />
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} label='Thêm mới bảng lương'/>,
        document.body
      )}
    </>
  );
};

export default PortalExample;






Modal-content.tsx
import React from 'react';
import Button from "../Button/Button.tsx";
import './Modal-content.scss';
interface ModalContentProps {
  onClose: () => void; // Định nghĩa kiểu cho hàm onClose
  label: string; // Nhận thêm prop label cho tiêu đề
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose, label }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h2>{label}</h2> {/* Tiêu đề modal */}
      </div>
      <div className="modal-body">
        I'm a modal dialog
      </div>
      <Button className="modal-close-button" onClick={onClose} content="Lưu"/>
    </div>
  );
};

export default ModalContent;



Modal-content.scss





.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;
  
    .modal-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #e0e0e0;
  
      h2 {
        font-size: 1.5rem;
        margin: 0;
      }
    }
  
    .modal-body {
      margin: 20px 0;
      font-size: 1rem;
    }
  
    .modal-close-button {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #ff4b4b;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
  
      &:hover {
        background-color: #ff0000;
      }
    }
  }
  



