import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount(){
    this.props.fetchUsers();
  }

  renderUsers(){
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  };

  head(){
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }

  render(){
    return (
      <div className="container" style={{marginTop: '20px'}}>
        {this.head()}
        List of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function  mapsStateToProps(state) {
  return {users: state.users};
}

function loadData (store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapsStateToProps, {fetchUsers})(UsersList)
};