const initialState = {
    data: [],
    loading: false,
    user:{}
  };
const counterReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case 'i':
        return {
            ...state,
            data:action.payload
        };
      default:
        return state;
    }
  };
  export default counterReducer;