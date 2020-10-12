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
      <div height="600px"  width="1000px">

        <iframe height="600px" width="1000px" src={this.props.urlLoad}></iframe>
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
