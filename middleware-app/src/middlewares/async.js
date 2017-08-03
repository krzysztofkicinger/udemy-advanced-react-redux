export default function({ dispatch }) {
    return next => action => {
        console.log(action);
        if(isActionPayloadPromise(action)) {
            // Make sure the action's promise resolves
            action.payload.then(response => {
                dispatch({
                    ...action,
                    payload: response.data
                });
            });
        }
        next(action);
    }
}

function isActionPayloadPromise(action) {
    return action.payload && action.payload.then;
}