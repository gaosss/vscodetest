import {initialState} from "../initialState";



export default function (previousState = initialState.originalPageUserinfo, action) {
    console.log('action inside original page is : ', action)

    if (action.type === 'originalInputChange') {
        let newState = JSON.parse(JSON.stringify(previousState));
        newState.originalInputValue = action.originalValue;

        return newState;
    }

    if(action.type === 'getusers'){
        console.log('inside if get user')
        let newState = JSON.parse(JSON.stringify(previousState));
        newState.userinfos = action.payload
        return newState;
    }


    return previousState

}

