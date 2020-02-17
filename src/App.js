import React, { Component } from 'react';
import './App.css';
import DateForm from './components/Form/DateForm';
import Counter from './components/Counter/Counter';

class App extends Component {
  state = {
    daysLeft: 0,
    birthday: new Date(),
    birthdaySelected: false
  }

  
  daysUntilBirthday = (birthday) => {
    const myBirthdayThisYear = new Date(new Date().getFullYear(), birthday.getMonth(), birthday.getDate()).setHours(23, 59, 59);
    const addToYear = myBirthdayThisYear > Date.now() ? 0 : 1;
    const oneDay = 24 * 60 * 60 * 1000;
    const secondDate = new Date(new Date().getFullYear() + addToYear, birthday.getMonth(), birthday.getDate());
    const firstDate = new Date();
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  };

  selectBirthday = (birthday) => {
    let daysLeft = this.daysUntilBirthday(birthday);
    this.setState({
      birthday,
      birthdaySelected: true,
      daysLeft: Math.abs(daysLeft),
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.birthdaySelected ? <Counter daysLeft={this.state.daysLeft} /> : <h1>Please selact your birthday to start!</h1>}
        <DateForm birthday={this.state.birthday} selectBirthday={this.selectBirthday} />
      </div>
    );
    }
}

export default App;
