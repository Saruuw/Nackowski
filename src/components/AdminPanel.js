import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AdminPanel extends Component {
  //   handleEdit = () => {
  //     this.props.history.push(`/auctions/${this.props.auktionID}`);
  //   };

  render() {
    return (
      <div>
        {/* <button className="btn" onClick={this.handleEdit}>
          Edit Auction
        </button> */}
        <Link className="btn red" to={`/edit/${this.props.auktionID}`}>
          Edit Auction
        </Link>
        <Link className="btn red" to={`/delete/${this.props.auktionID}`}>
          Delete Auction
        </Link>
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

export default AdminPanel;