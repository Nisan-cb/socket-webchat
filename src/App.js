import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';


function App(){

    return(
        <Router>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Join} />
            <Route path={process.env.PUBLIC_URL + '/chat'}  component={Chat} />
        </Router>
    );
}

export default App;