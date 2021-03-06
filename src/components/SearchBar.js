import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editFilter } from '../actions/auctionActions';

export class SearchBar extends Component {
  state = {
    input: ''
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editFilter(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field row">
          <div className="col m7 s12">
            <input
              id="newbid"
              type="text"
              className="validate input-field"
              onChange={this.handleChange}
            />
            {/* <label className="active" htmlFor="newbid">
              New Bid
            </label> */}
          </div>
          <div className="col m5 s12">
            <button className="btn red input-field waves-effect">
              Submit search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    editFilter: input => dispatch(editFilter(input))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
