import React from 'react';

const Modal = () => {
    return (
        <div>
            {/* The modal using <dialog> element */}
            <dialog id="my_modal_7" className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold">For Login</h3>
                <p className="py-4">Please Register first</p>
                {/* Add a button to close the modal */}
                <div className="modal-action">
                  <button className="btn" onClick={() => document.getElementById('my_modal_7').close()}>
                    Close
                  </button>
                </div>
              </div>
            </dialog>
        </div>
    );
};

export default Modal;
