import React, { Component } from 'react';
import Navbar from './Navbar';

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {},
          Taurus: {},
          Gemini:{},
          Cancer:{},
          Leo:{},
           Virgo:{},
         Libra:{},
        Scorpio :{},
    Sagittarius:{},
    Capricorn:{},
Aquarius:{},
 Pisces:{}
        }
    }
    //   Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces.

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });

        const URL1 = 'https://aztro.sameerkumar.website/?sign=taurus&day=today';
        fetch(URL1, {
            method: 'POST'
        }).then(response => response.json())
        .then(Taurus => { this.setState({Taurus}); });

        const URL2 = 'https://aztro.sameerkumar.website/?sign=gemini&day=today';
        fetch(URL2, {
            method: 'POST'
        }).then(response => response.json())
        .then(Gemini => { this.setState({Gemini}); });

        const URL3 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL3, {
            method: 'POST'
        }).then(response => response.json())
        .then(Cancer => { this.setState({Cancer}); });

        const URL4 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL4, {
            method: 'POST'
        }).then(response => response.json())
        .then(Leo => { this.setState({Leo}); });

        const URL5 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL5, {
            method: 'POST'
        }).then(response => response.json())
        .then(Vigro => { this.setState({Vigro}); });

        const URL6 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL6, {
            method: 'POST'
        }).then(response => response.json())
        .then(Libra => { this.setState({Libra}); });

        const URL7 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL7, {
            method: 'POST'
        }).then(response => response.json())
        .then(Scorpio => { this.setState({Scorpio}); });

        const URL8 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL8, {
            method: 'POST'
        }).then(response => response.json())
        .then(Sagittarius => { this.setState({Sagittarius}); });

        const URL9 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL9, {
            method: 'POST'
        }).then(response => response.json())
        .then(Capricorn => { this.setState({Capricorn}); });

        const URL10 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL10, {
            method: 'POST'
        }).then(response => response.json())
        .then(Aquarius => { this.setState({Aquarius}); });

        const URL11 = 'https://aztro.sameerkumar.website/?sign=cancer&day=today';
        fetch(URL11, {
            method: 'POST'
        }).then(response => response.json())
        .then(Pisces => { this.setState({Pisces}); });
    }

    render() {
        return (
          <div>
            <Navbar/>
            
            <div className='ast'>
            <h1 className='h1z'>Zodiac Prediction</h1>
            <div className='card card-ast'>
            <h1>Aries</h1>
              <b>Current Date</b>: {this.state.json.current_date} <br />
             <b>Compatibility</b>: {this.state.json.compatibility} <br />
             <b>Lucky Number</b> : {this.state.json.lucky_number} <br />
              <b>Lucky Time</b>: {this.state.json.lucky_time} <br />
             <b> Color</b>: {this.state.json.color} <br />
             <b> Date Range</b>: {this.state.json.date_range} <br />
             <b>  Mood</b>: {this.state.json.mood} <br />
             <b> Description</b>: {this.state.json.description} <br />
            </div>
            <div className='card card-ast'>
              <h1>Taurus</h1>
             <b> Current Date</b>: {this.state.Taurus.current_date} <br />
            <b>  Compatibility</b>: {this.state.Taurus.compatibility} <br />
            <b>  Lucky Number</b>: {this.state.Taurus.lucky_number} <br />
            <b>  Lucky Time</b>: {this.state.Taurus.lucky_time} <br />
            <b> Color</b>: {this.state.Taurus.color} <br />
            <b>Date Range</b>: {this.state.Taurus.date_range} <br />
            <b>Mood</b>: {this.state.Taurus.mood} <br />
            <b>Description</b>: {this.state.Taurus.description} <br />
              </div>
              <div className='card card-ast'>
              <h1>Gemini</h1>
              <b>Current Date</b>: {this.state.Gemini.current_date} 
              <b>Compatibility</b>: {this.state.Gemini.compatibility} <br />
             <b> Lucky Number</b>: {this.state.Gemini.lucky_number} <br />
             <b> Lucky Time</b>: {this.state.Gemini.lucky_time} <br />
            <b> Color</b>: {this.state.Gemini.color} <br />
             <b> Date Range</b>: {this.state.Gemini.date_range} <br />
            <b> Mood</b> : {this.state.Gemini.mood} <br />
            <b>  Description</b>: {this.state.Gemini.description} <br />
              </div>
              <div className='card card-ast'>
              <h1>Cancer</h1>
              Current Date: {this.state.Cancer.current_date} <br />
              Compatibility: {this.state.Cancer.compatibility} <br />
              Lucky Number: {this.state.Cancer.lucky_number} <br />
              Lucky Time: {this.state.Cancer.lucky_time} <br />
              Color: {this.state.Cancer.color} <br />
              Date Range: {this.state.Cancer.date_range} <br />
              Mood: {this.state.Cancer.mood} <br />
              Description: {this.state.Cancer.description} <br />
              </div>
              <div className='card card-ast'>
              <h1>Leo</h1>
              Current Date: {this.state.Leo.current_date} <br />
              Compatibility: {this.state.Leo.compatibility} <br />
              Lucky Number: {this.state.Leo.lucky_number} <br />
              Lucky Time: {this.state.Leo.lucky_time} <br />
              Color: {this.state.Leo.color} <br />
              Date Range: {this.state.Leo.date_range} <br />
              Mood: {this.state.Leo.mood} <br />
              Description: {this.state.Leo.description} <br />
</div>
</div>
          </div>
        );
    }
}

export default Aztro;