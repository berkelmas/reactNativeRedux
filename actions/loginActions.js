export const updateCredentials = (value, type) => {
  return (dispatch) => {
    dispatch({
      type: 'updateCredentials',
      payload: {value, type}
    })
  }
}
