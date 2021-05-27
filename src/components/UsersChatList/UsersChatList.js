import React from 'react';
import UserItem from "../UserItem/UserItem";
const UsersChatList = () => {
    return <div className="list-container">
        <div className="chat-search-box">
            <div className="input-group">
                <input className="form-control" placeholder="Search" />
            </div>
        </div>
        <ul className="items">
            <UserItem/>
            <UserItem/>
            <UserItem/>
        </ul>
    </div>
}
export default UsersChatList;
