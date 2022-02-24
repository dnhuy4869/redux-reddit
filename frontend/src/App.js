import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import EditPage from './components/Edit/EditPage';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
    const [isEdit, setEdit] = useState(false);

    return (
        <Provider store={store}>
            <div>
                {
                    isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />
                }
            </div>
        </Provider>
    )
}

export default App;