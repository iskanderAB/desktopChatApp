import React from 'react' ;
import { useParams } from 'react-router-dom';
import UsersChatList from "../../components/UsersChatList/UsersChatList";
import ChatContainer from "../../containers/ChatContainer";

const Chat =() => {
    const {id} = useParams();
    return (
            <div className="row no-gutters fh">
                <div className="col-3 fh">
                        <UsersChatList/>
                </div>
                <div className="col-9 fh">
                    {/* ########## CHAT NAME CONTAINER START ############ */}
                    <div className="chat-name-container">
                        <span className="name">Chat N°: {id}</span>
                        <a
                            href="/"
                            className="btn btn-primary btn-sm back-button">Back</a>
                    </div>
                    {/* ########## CHAT NAME CONTAINER END ############ */}
                    <ChatContainer/>
                </div>
            </div>
    )
}
export default Chat;
