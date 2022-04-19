import React from 'react'
import Main from './components/Main';
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
    return (
        <div className="App">
            <Main />
        </div>
    );
}

export default App;