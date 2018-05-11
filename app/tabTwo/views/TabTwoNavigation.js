'use strict'
import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabTwo } from '../navigationConfiguration';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabTwo
  }
}

class TabTwoNavigation extends React.Component {

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabTwo
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

export default connect(mapStateToProps)(TabTwoNavigation);
