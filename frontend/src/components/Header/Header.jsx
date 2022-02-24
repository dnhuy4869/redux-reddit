import React from 'react';
import { useSelector } from 'react-redux';
import './header.css';

const Header = (props) => {
    const { setEdit } = props;

    const user = useSelector(state => state.user);

    const handleEdit = () => {
        setEdit(true);
    }

    return (
        <header className="" style={{ backgroundColor: '#ff9051', backgroundImage: 'linear-gradient(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%)' }}>
            <div className="info-container">
                <div className="info-edit" onClick={() => handleEdit()}>
                    Edit
                </div>

                <img src={user.avaUrl} className="info-ava" />

                <div className="info-username">Daniel Truong</div>
                <div className="info-age">20 years old</div>
                <div className="info-about">I'm a software engineer</div>
            </div>
        </header>
    )
}

export default Header;