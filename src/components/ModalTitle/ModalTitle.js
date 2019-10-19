import React from 'react';
import Modal from 'react-modal';
import Title from './Title';
import './Title.css';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(72, 85, 99, 0.6)';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '2em 7em 3em',
    // backgroundImage: linearGradient(60deg, #29323c 0%, #485563 100%);
    background: 'linear-gradient(to right bottom, #29323c, #485563 )',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    borderColor: '#fe9f00',
  },
};

class ModalTitle extends React.Component {
  state = {
    modalIsOpen: true,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="modal">
        {/* <button onClick={this.openModal}>Open Modal</button> */}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-main">
            <Title />
            <button className="close-title-button" onClick={this.closeModal}>
              Let`s explore
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalTitle;
