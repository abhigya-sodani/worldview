import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  initState as initStateAction,
} from '../../modules/product-picker/actions';


class NNResultsProvider extends React.Component {
  componentDidMount() {
    const { initState } = this.props;
    initState();
  }

  render() {
    const { searchConfig } = this.props;
    return !searchConfig ? null : (
      <div>
        <p>HELLO WORLD</p>
        <img src="https://www.nesdis.noaa.gov/sites/default/files/assets/images/infrared_imagery.jpg"/>
      </div>
    );
  }
}

NNResultsProvider.propTypes = {
  initState: PropTypes.func,
  searchConfig: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  initState: () => {
    dispatch(initStateAction());
  },
});

const mapStateToProps = (state) => {
  const { productPicker } = state;
  const { searchConfig } = productPicker;
  return {
    searchConfig,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NNResultsProvider);
