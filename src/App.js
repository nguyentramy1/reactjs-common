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








