import React from 'react';
const UserItem = () => {
    return <li
        onClick={() => {}}
        className="item">
        <div className="item-status">
            <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
            <span className="status online"></span>
        </div>
        <p className="name-time">
            <span className="name mr-2">Some User 1</span>
        </p>
    </li>
}
export default UserItem;
