import React from 'react';
import { showModal, hideModal, updateModal } from 'react-unimodal';

const modalType2 = () => (
  <div>
    <div>modal type 2</div>
    <button type="button" onClick={() => { updateModal({ body: 'modal type string' }); }}>modal type string</button>
  </div>
);

const modalType1 = () => (
  <div>
    <div>modal type 1</div>
    <button type="button" onClick={() => { updateModal({ body: modalType2 }); }}>modal type 2</button>
  </div>
);

const modalType3 = () => (
  <div>modal type 3</div>
);

function TestPage() {
  return (
    <div>
      <div>
        <button type="button" onClick={() => showModal()}>show modal 1</button>
        <button type="button" onClick={() => hideModal()}>hide modal 1</button>
        <button type="button" onClick={() => { updateModal({ body: modalType1 }); }}>modal type 1</button>
      </div>
      <div>
        <button type="button" onClick={() => showModal('modal2')}>show modal 2</button>
        <button type="button" onClick={() => hideModal('modal2')}>hide modal 2</button>
        <button type="button" onClick={() => { updateModal('modal2', { body: modalType3 }); }}>modal type 3</button>
        <button type="button" onClick={() => { updateModal('modal2', { body: 'modal type string' }); }}>modal type string</button>
      </div>
    </div>
  );
}

export default TestPage;
