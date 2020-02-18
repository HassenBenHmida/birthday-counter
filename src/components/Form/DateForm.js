import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DateForm extends Component {
     
    handleChange = date => {
        console.log(date)
        this.props.selectBirthday(date);
    };
     
    render() {
        return (
          <DatePicker
            selected={this.props.birthday}
            maxDate={new Date()}
            placeholderText={this.props.placeholder}
            dateFormat="MMMM d, yyyy"
            onChange={this.handleChange}
            className="picker-input"
          />
        );
    }
}