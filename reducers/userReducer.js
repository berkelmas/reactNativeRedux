const initialState = {
  username: '',
  password: ''
}

export default (state= initialState, {type, payload}) => {
  switch (type) {
    case 'updateCredentials':
      return {...state, [payload.type]: payload.value}
      break;
    default:
      return {...state}
  }
}
