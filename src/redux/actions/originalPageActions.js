
import axios from 'axios'

export function getUserList(){
    console.log('getUserList is trigger')

    return dispatch => axios({
        url: 'http://localhost:8080/alluser',
        method: 'get',

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
