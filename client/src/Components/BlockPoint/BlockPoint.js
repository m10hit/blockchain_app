import React, { Component } from 'react';
import Blocks from '../Blocks/Blocks';
import Entry from '../Entry/Entry';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import crypto from 'crypto';
class BlockPoint extends Component {
  state = {
    blockLink: [
      {
        id: 0,
        previousHash: 0,
        hash:
          '000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf',
        timestamp: new Date().toUTCString(),
        data: 'Welcome to Blockchain',
        nonce: 604,
      },
    ],
    dataInput: '',
  };

  calculateHash = (index, previousHash, timestamp, data, nonce) => {
    return crypto
      .createHash('sha256')
      .update(index + previousHash + timestamp + data + nonce)
      .digest('hex');
  };

  addBlock = () => {
    const blocks = [...this.state.blockLink];
    const lastBlock = blocks[blocks.length - 1];
    const calculatedHash = this.calculateHash(
      lastBlock.id + 1,
      lastBlock.hash,
      Date.now(),
      this.state.dataInput,
      lastBlock.nonce + 1
    );
    const newBlock = {
      id: lastBlock + 1,
      previousHash: lastBlock.hash,
      hash: calculatedHash,
      timestamp: new Date().toUTCString(),
      data: this.state.dataInput,
      nonce: lastBlock.nonce + 1,
    };
    blocks.push(newBlock);
    this.setState({ blockLink: blocks, dataInput: '' });
  };

  handleChange = (e) => {
    this.setState({ dataInput: e.target.value });
  };

  blockChangeHandler = () => {
    console.log('hello');
  };
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div>
        <button
          style={{
            width: '150px',
            borderRadius: '3px',
            letterSpacing: '1.5px',
            marginTop: '1rem',
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
        <Blocks
          blocks={this.state.blockLink}
          blockChange={this.blockChangeHandler}
        />
        <Entry
          add={this.addBlock}
          changed={(e) => this.handleChange(e)}
          inValue={this.state.dataInput}
        />
      </div>
    );
  }
}

BlockPoint.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(BlockPoint);
