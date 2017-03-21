import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { goToList, goToAdd } from '../actions';
import { LIST_SCREEN, ADD_SCREEN, EDIT_SCREEN } from '../constants';
import ListScreen from './ListScreen';
import AddScreen from './AddScreen';
import EditScreen from './EditScreen';
import './App.css';

class App extends Component {

  render() {
    const { page } = this.props;

    return (
        <div className="row">
          <div className="col m4 offset-m4 s10 offset-s1 m-t-sm">
            <ListScreen display={page === LIST_SCREEN}/>
            <AddScreen display={page === ADD_SCREEN}/>
            <EditScreen display={page === EDIT_SCREEN} />
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log("state", state);
  if(state.page === null) {
    return {
      page: LIST_SCREEN
    }
  }
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
