import {initialState} from "../initialState";


export default function  (previousState = initialState.user, action) {


    if (action.type === 'inputName') {
        let newState = JSON.parse(JSON.stringify(previousState));
        newState.inputValue = action.value;

        return newState;
    }

    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(previousState));
        newState.list.push(newState.inputBidNameValue);
        newState.listDate.push(newState.inputDayValue);
        newState.inputBidNameValue = '';
        newState.inputDayValue = '';
        return newState;
    }

    if (action.type === 'inputBidNameChange') {
        let newState = JSON.parse(JSON.stringify(previousState));
        newState.inputBidNameValue = action.value;

        return newState;
    }



    if (action.type === 'inputDayChange') {
        let newState = JSON.parse(JSON.stringify(previousState));
        newState.inputDayValue = action.value;

        return newState;
    }
    return previousState;
}
