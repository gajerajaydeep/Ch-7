import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; 

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
          padding: '20px',
          borderRadius: '8px',
          minWidth: '300px',
          color:"white"
        }}
      >
        {children} 
        <button onClick={onClose} style={{ marginTop: '10px' }}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById('other-root')
  );
}
export function DeeplyNestedComponent({ onOpenModal }) {
  return (
    <div>
      <p>This component is on 'root' level</p>
      <button onClick={onOpenModal}>Open Modal</button>
    </div>
  );
}