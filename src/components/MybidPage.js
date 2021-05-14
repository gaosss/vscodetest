import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {inputChange, clickBtn, testingclick, inputBidNameChange, inputDayChange} from '../redux/actions/bidPageActions';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

class MybidPage extends Component {
    constructor(props) {
        super(props);


    }




    render() {
        return (
            <div>
                <header>this is my bid page </header>
                <div>


                    <span>bid name : </span> <span>{this.props.bidName}</span> <br/>
                    <input type="text"  placeholder={this.props.inputBidNameValue}
                           value={this.props.inputBidNameValue}
                           onChange={this.props.inputBidNameChange}/>
<br/>
                    <span>bid due date : </span>

                    <p>Day</p><input type="text"  placeholder={this.props.inputDayValue}
                                       value={this.props.inputDayValue}
                                       onChange={this.props.inputDayChange}/>
                                       <br/>
                                    <br/>


                    <button style={{verticalAlign: 'middle'}} onClick={this.props.clickBtn}>Add</button>
<br/>
                    <button style={{verticalAlign: 'middle'}} onClick={this.props.testingclick}>testing</button>
                    <br/>
                </div>

                <div>
                    <ul>
                        {this.props.list.map((item, index) => {
                            return (<li key={item + index}>{item} </li>);
                        })}

                    </ul>

                </div>

                <div>
                    <ul>
                        {this.props.listDate.map((item, index) => {
                            return (<li key={item + index}>{item}</li>);
                        })}

                    </ul>

                </div>
            </div>
        );
    }
}

const stateToProps = (state) => {
    console.log('state is : ', state)

    return {
        inputValue: state.userPage.inputValue,
        list: state.userPage.list,
        listDate : state.userPage.listDate,
        userName: state.userPage.userName,
        bidName: state.userPage.bidName,
        inputBidNameValue: state.userPage.inputBidNameValue,
        inputYearValue:state.userPage.inputYearValue,
        inputMonthValue:state.userPage.inputMonthValue,
        inputDayValue:state.userPage.inputDayValue,
    };
};




function dispatchToProps(dispatch) {
    return bindActionCreators({inputChange,clickBtn,testingclick,inputBidNameChange,inputDayChange}, dispatch);
}

export default connect(stateToProps, dispatchToProps) (MybidPage);
