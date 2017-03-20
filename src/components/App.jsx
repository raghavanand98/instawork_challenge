import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { goToList, goToAdd } from '../actions';
import { LIST_SCREEN, ADD_SCREEN, EDIT_SCREEN } from '../constants';
import ListScreen from './ListScreen';
import AddScreen from './AddScreen';
import EditScreen from './EditScreen';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { page } = this.props;

    return (
      <div>
        App { page }
        <ListScreen display={page === LIST_SCREEN}/>
        <AddScreen display={page === ADD_SCREEN}/>
        <EditScreen display={page === EDIT_SCREEN} />
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
