import request from "../../json/request"

const initalState = {
  requestarray:request
  
};

export default function reducer(state=initalState,action)

{
 switch (action.type) {
    case "SET_REQ_DATA": {
      return { ...state, ...action.payload };
    }
    case "REQ_REQUEST_TERMINATE": {
      return { ...state, fetching: false, fetched: true, ...action.payload }
    }
    default: {
      return { ...state }
    }

  }
}