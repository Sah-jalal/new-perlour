import React from 'react';

const ConfermationModal = ({title, message, confermModal, clogeModal, member}) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=> confermModal(member)} htmlFor="my-modal-6" className="btn">delete</label>
                        <label onClick={()=> clogeModal} htmlFor="my-modal-6" className="btn">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfermationModal;