import { profileReducer, addPost, deletePost } from './profileReducer';
import React from 'react';

//npm run test
it('legth of posts should == 5', () => {
    //1. Тестовые данные
    let action = addPost("test data");
    let state = {
        posts: [
            { id: 1, message: 'Hello World!', countLike: 20, countDislike: 6, userId: 7836, setLike: false, setDislike: false },
            { id: 2, message: 'It\'s my first post.', countLike: 12, countDislike: 56, userId: 7836, setLike: false, setDislike: false },
            { id: 3, message: 'Test message', countLike: 50, countDislike: 0, userId: 7836, setLike: false, setDislike: false },
            { id: 4, message: 'Test message 2', countLike: 0, countDislike: 1, userId: 7836, setLike: false, setDislike: false },
        ]
    };

    //2. Action 
    let newState = profileReducer(state, action);

    //3. Ожидание того, что мы должны получить
    expect(newState.posts.length).toBe(5);
});

it('message in posts invalid', () => {
    //1. Тестовые данные
    let action = deletePost(1);

    //2. Action 
    let newState = profileReducer(state, action);

    //3. Ожидание того, что мы должны получить
    expect(newState.posts.length).toBe(3);
});