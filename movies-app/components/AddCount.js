import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCount } from '../store';

const AddCount = ({ count, addCount }) => ( // eslint-disable-line no-shadow
  <div>
    <style jsx>{`
      div {
        padding: 0 0 20px 0;
      }
  `}</style>
    <h1>AddCount: <span>{count}</span></h1>
    <button onClick={addCount}>Add To Count</button>
  </div>
);

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = (dispatch) => ({ addCount: bindActionCreators(addCount, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AddCount);
