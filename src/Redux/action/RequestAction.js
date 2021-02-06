export function setReqData(name, value) {
    return {
        type: 'SET_REQ_DATA',
        payload: { [name]: value },
    }
}