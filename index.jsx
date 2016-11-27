import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component{
	
	render(){

	return (
		<MuiThemeProvider>
    <RaisedButton label="Bhara" />
  </MuiThemeProvider>
		);
		
	}
}

ReactDOM.render(<App/>,document.getElementById('test'));