import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/userSlice';
import Input from '../InputFields/Input';
import './edit.css';

const EditPage = (props) => {
    const { setEdit } = props;

    const avaUrl = [
        "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
    ];

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [theme, setTheme] = useState("#ff9051");
    const [url, setUrl] = useState(user.avaUrl);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);

        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url
        }

        dispatch(update(updatedUser));
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="edit-container">
                <button className="close">SAVE</button>
                <div className="edit-profile">Edit Profile</div>
                <div className="input-container">
                    <Input label="Display name" data={user.name} setData={setName} />
                    <Input label="Age" data={user.age} setData={setAge} />
                    <Input inputType="textarea" classStyle="input-about" label="About" data={user.about} setData={setAbout} />

                    <label htmlFor="">Profile Picture</label>
                    <div className="input-img-container">
                        {
                            avaUrl.map((url, index) => {
                                return (
                                    <img src={url} className="input-image" key={index} onClick={(e) => setUrl(e.target.src)} />
                                )
                            })
                        }
                    </div>

                    <div className="theme-container">
                        <label htmlFor="">Theme</label>
                        <input type="color" className="theme-color" onChange={(e) => setTheme(e.target.value)} />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditPage;