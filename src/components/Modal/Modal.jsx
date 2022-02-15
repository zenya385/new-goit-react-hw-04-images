import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ imgXL, onClose }) {
  // const [state, setState] = useState({});

  useEffect(() => {
    const handleKeyDownEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDownEscape);
    return () => {
      window.removeEventListener('keydown', handleKeyDownEscape);
    };
  }, [onClose]);

  const handleBackdropeClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.overlay} onClick={handleBackdropeClick}>
      <div className={s.modal}>
        <img src={imgXL} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

// const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {
//   state = {};

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropeClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return createPortal(
//       <div className={s.overlay} onClick={this.handleBackdropeClick}>
//         <div className={s.modal}>
//           <img src={this.props.imgXL} alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imgXL: PropTypes.string.isRequired,
};
// export default Modal;
