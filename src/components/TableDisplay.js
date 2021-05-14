import React, {Component} from "react";




class Body extends Component {
    render() {
        //map只能遍历数组，如果是集合需要转换成数组然后遍历
        let result = [];//定义数组
        let idx = 0;//定义自增变量，用于数组存储数据
        //循环遍历对象，将数据存进数组
        for (let key in this.props.body) {
            result[idx] = (<td>{this.props.body[key]}</td>);
            idx++;
        }
        return result;
    }
}







class TableBody extends Component {
    render() {

        if (this.props.bodys) {
            return (
                this.props.bodys.map(body => {
                        return (
                            <tr>
                                <Body body={body}/>
                            </tr>
                        );
                    }
                )
            );
        } else {
            return (<tr></tr>);
        }
    }
}


export default class TableDisplay extends Component {
    constructor(props) {
        super(props);

    }

    render(){
            return (
                <table>
                    <thead>
                    <tr>

                    </tr>
                    </thead>
                    <tbody>
                    <TableBody bodys={this.props.bodys}/>
                    </tbody>
                </table>

            );
    }
}
