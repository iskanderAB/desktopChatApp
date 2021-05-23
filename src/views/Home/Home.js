import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import JoinedChats from "../../components/JoinedChat/JoinedChats";
import AvailableChats from "../../components/AvilableChats/AvilableChats";
import JoinedChatTitle from "../../components/JoinedChatTitle/JoinedChatTitle";


const Home = () => {
    return <div className='content-wrapper'>
        <NavBar/>
        <div className="row no-gutters fh">
            <div className="col-3 fh">
                <JoinedChats/>
            </div>
            <div className="col-9 fh">
                <JoinedChatTitle/>
                <AvailableChats/>
            </div>
        </div>
    </div>
}
export default Home;
