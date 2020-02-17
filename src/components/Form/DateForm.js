import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DateForm extends Component {
     
    handleChange = date => {
        this.props.selectBirthday(date);
    };
     
    render() {
        return (
          <DatePicker
            selected={this.props.birthday}
            onChange={this.handleChange}
          />
        );
    }
}