const Reducer =(state,action)=>{
    switch (action.type) {
    case "SUCCESS":
        return {
            user: action.payload,
        };
      default:
        return state;
    }
}
export default Reducer;
