import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

import RegisterField from './components/RegisterField';

export default class App extends Component<Props> {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{flex : 1, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
          <RegisterField />
        </View>
      </Provider>
    );
  }
}
