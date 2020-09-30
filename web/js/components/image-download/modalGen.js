import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../util/button';

/*
 * A table that updates with image
 * data
 *
 * @class ResolutionTable
 * @extends React.Component
 */

const Modal = ({ handleClose, show, children, url}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <iframe src={url} ></iframe>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default class modalGen extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  url = "";



  setUrl(urlIn) {
    url=urlIn;
    this.render();
  }

  render() {
    return(
    <Modal show={this.state.show} url={url} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
    </Modal>
    );
  }

}

