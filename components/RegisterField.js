import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Text, View, TextInput, Button} from 'react-native';
//import actions
import {updateCredentials} from '../actions';

class RegisterField extends React.Component {
  render(){
    return(
      <View>
        <TextInput
          value={this.props.username}
          onChangeText={username => this.props.updateCredentials(username, 'username')}
          placeholder="Kullanıcı Adı"
        />
        <TextInput
          value={this.props.password}
          onChangeText={password => this.props.updateCredentials(password, 'password')}
          placeholder="Şifre"
        />
        <Button
          title="Üye Ol"
          color="#841584"
          onPress={() => {console.log(this.props.username); console.log(this.props.password)}}
        />
      </View>
    )
  }
}

const mapStateToProps = ({userResponse}) => {
  const {username, password} = userResponse;
  return ({
    username,
    password
  })
}

export default connect(mapStateToProps, {updateCredentials})(RegisterField);
