import React, {Component} from "react";
import store from "../store";
import {bindActionCreators} from "redux";
import {getUserList} from "../redux/actions/originalPageActions";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";
import TableDisplay from "./TableDisplay";

class OriginalPage extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }




    render() {
        console.log('inside original page all users are : ', this.props.allUsers)
        return (
            <div>
                <header>this is original page</header>
                <div>
                 <br/><br/>


                    <button style={{verticalAlign: 'middle'}} onClick={this.props.getUserList}>GET USER LIST</button>
                    <br/><br/>
                    <TableDisplay bodys = {this.props.allUsers} />
                    <br/><br/>

            </div>
            </div>
        );
    }
}
const stateToProps = (state) => {
    console.log('state in original page is : ' , state)
    return {
        allUsers: state.originalPageUser.userinfos
    };
};

function dispatchToProps(dispatch) {
    return bindActionCreators({getUserList}, dispatch);
};


export default connect (stateToProps,dispatchToProps)(OriginalPage)
