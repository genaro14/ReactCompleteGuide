import { Fragment } from 'react';
import ReacDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}>

        </div>
    )
};

const ModalOverlay = (props) => {

    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const portalLocation = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReacDOM.createPortal(<Backdrop onClose={props.onClose} />, portalLocation)}
            {ReacDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
        </Fragment>
    );
};

export default Modal;