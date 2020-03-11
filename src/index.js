import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    { id: 1, name: 'Дмитрий' },
    { id: 2, name: 'Светлана' },
    { id: 3, name: 'Женя' },
    { id: 4, name: 'Андрей' },
    { id: 5, name: 'Александр' },
    { id: 6, name: 'Мария' }
];

let messages = [
    { id: 1, message: 'Привет!' },
    { id: 2, message: 'Как дела?' },
    { id: 3, message: 'Чем занимаешься?' },
];

let posts = [
    { id: 1, message: 'Hello World!', countLike: 20, countDislike: 6 },
    { id: 2, message: 'It\'s my first post.', countLike: 123, countDislike: 56 },
    { id: 3, message: 'Test meesage', countLike: 500, countDislike: 0 },
    { id: 4, message: 'Test meesage 2', countLike: 0, countDislike: 0 },
];

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();