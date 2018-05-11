'use strict'
import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabOne } from '../navigationConfiguration';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabOne
  }
}

class TabOneNavigation extends React.Component {

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabOne
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabOneNavigation);
