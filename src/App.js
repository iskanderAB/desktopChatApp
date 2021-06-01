import React, {useEffect} from 'react';
import {Provider, useStore} from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Settings from "./views/Settings/Settings";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Chat from "./views/Chat/Chat";
import {fetchChats} from './api/chats';
import configureStore from "./store";


// const   { ipcRenderer } = window.require('electron');
function App() {
    const store = configureStore();
    useEffect(() => {
        fetchChats();
    }, []);

    const sendNotify = () => {
        // eslint-disable-next-line no-undef
        electron
            .notificationApi
            .sendNotification('my notif');
    };
    return (
        <div>
            <button onClick={sendNotify}>
                sendNotification
            </button>
        </div>
        /*<Provider store={store}>
            <Router>
                <NavBar/>
                <div className='content-wrapper'>
                    <Switch>
                        <Route path='/' exact>
                            <Home/>
                        </Route>
                        <Route path='/register'>
                            <Register/>
                        </Route>
                        <Route path='/login'>
                            <Login/>
                        </Route>
                        <Route path='/settings'>
                            <Settings/>
                        </Route>
                        <Route path='/chat/:id'>
                            <Chat/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>*/
    )
}

export default App;
