import './modal.css';

const Modal = ({ handleClose, show, children }) => {
    // const Modal = () => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        // <div className={showHideClassName}>
        <div>
            Show
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;