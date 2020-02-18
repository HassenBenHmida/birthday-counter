import React, { Component } from 'react';
import './App.css';
import DateForm from './components/Form/DateForm';
import Counter from './components/Counter/Counter';

class App extends Component {
  state = {
    birthdaySelected: false,
    birthday: 0,
    daysLeft: 0,
    daysLived: 0,
    monthsLived: 0,
  }

  
  daysUntilBirthday = (birthday) => {
    const myBirthdayThisYear = new Date(new Date().getFullYear(), birthday.getMonth(), birthday.getDate()).setHours(23, 59, 59);
    const addToYear = myBirthdayThisYear > Date.now() ? 0 : 1;
    const oneDay = 24 * 60 * 60 * 1000;
    const secondDate = new Date(new Date().getFullYear() + addToYear, birthday.getMonth(), birthday.getDate());
    const firstDate = new Date();
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  };

  daysLived = (birthday) => {
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((today.getTime() - birthday.getTime()) / (oneDay)));
  }

  monthsLived = (birthday) => {
    const today = new Date();
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((today.getTime() - birthday.getTime()) / (oneMonth)));
  }

  selectBirthday = (birthday) => {
    if (birthday) {
      let daysLeft = this.daysUntilBirthday(birthday);
      let daysLived = this.daysLived(birthday);
      let monthsLived = this.monthsLived(birthday);
      this.setState({
        birthdaySelected: true,
        birthday,
        daysLeft,
        daysLived,
        monthsLived,
      })
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.birthdaySelected ? 
            <Counter 
              daysLeft={this.state.daysLeft}
              daysLived={this.state.daysLived} 
              monthsLived={this.state.monthsLived} 
            /> :
            <h1>Please selact your birthday to start!</h1>
        }
        <DateForm 
          birthday={this.state.birthday} 
          placeholder="Click to select a date"
          selectBirthday={this.selectBirthday} />
      </div>
    );
    }
}

export default App;
