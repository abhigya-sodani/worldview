import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
import Checkbox from '../util/checkbox';
import TourIntro from './content-intro';
import TourBoxes from './tour-boxes';
import safeLocalStorage from '../../util/local-storage';
import Scrollbars from '../util/scrollbar';

class ModalImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // Set a reference to the inner div for checking clicks outside of the scrollbar
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  // Use custom clickOutside function since we contained the clickable area with
  // CSS to have a cleaner looking scrollbar
  handleClickOutside(e) {
    const { toggleModalImages } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      toggleModalImages(e);
    }
  }

  // Handle the show/hide checkbox state
  handleCheck() {
    const { hideTour, showTour } = this.props;
    const { checked } = this.state;
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
    if (!checked) {
      hideTour();
    } else {
      showTour();
    }
  }

  render() {
    const {
      ModalImages, endTour, showTourAlert, toggleModalImages, className, height, stories, storyOrder, selectTour,
    } = this.props;
    const { checked } = this.state;
    return (
      <Modal
        isOpen={ModalImages}
        toggle={endTour}
        onClosed={showTourAlert}
        wrapClassName="tour tour-start"
        className={className}
        backdrop
        fade={false}
        keyboard={false}
        innerRef={this.setWrapperRef}
      >
        <ModalHeader toggle={endTour}>
          Most Similar Images
        </ModalHeader>

        <iframe height="200px" width="300px" src="cesion.us/fdl"></iframe>
      </Modal>
    );
  }
}

ModalImages.propTypes = {
  checked: PropTypes.bool.isRequired,
  endTour: PropTypes.func.isRequired,
  hideTour: PropTypes.func.isRequired,
  ModalImages: PropTypes.bool.isRequired,
  selectTour: PropTypes.func.isRequired,
  showTour: PropTypes.func.isRequired,
  showTourAlert: PropTypes.func.isRequired,
  stories: PropTypes.object.isRequired,
  storyOrder: PropTypes.array.isRequired,
  toggleModalImages: PropTypes.func.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
};

export default ModalImages;
