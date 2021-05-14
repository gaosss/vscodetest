import axios from "axios";


export function inputChange(res){

    const action = {
        type: 'inputName',
        value: res.target.value,
    };

    return action;
}

export function inputBidNameChange(res){

    const action = {
        type: 'inputBidNameChange',
        value: res.target.value,
    };

    return action;
}

export function inputDayChange(res){

    const action = {
        type: 'inputDayChange',
        value: res.target.value,
    };

    return action;
}

export function clickBtn(){

    const action = {
        type:  'addItem',
    };

    return action;
}

export function testingclick(){

   console.log("this is testing click")
}


export function addBid(){

    return dispatch => axios({
        url: 'http://localhost:8080/addbid',
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        console.log('res in ios = ', res)
        if (res.status == 202){
            console.log('res.data in dispatch is : ' , res.data)
            dispatch(
                {
                    type: 'getusers',
                    payload: res.data
                }
            )
        }

    }).catch(err => {
        dispatch({
            type: 'ASSET_LOAD_CLASS_FAILED',
            payload: err.message
        })
    })


}
