import React from 'react';
import './App.css';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
	        <div class="main">
	          {/* App Component Has a Child Component called Main*/}
	          <Main/>
	    	</div>
		</BrowserRouter>

  );
}

export default App;
