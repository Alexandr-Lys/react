import {renderEntireTree} from "../render";
let state = {
    profilePage: {
        posts: [
        {id: 0, message:'Hi, how are you?', likeCount:'30'},
        {id: 1, message:'Its my first post', likeCount:'20'}
        ]
    },
    dialogsPage:{
        messages: [
        {message: 'Hi', id: 1},
        {message: 'How', id: 2},
        {message: 'Yo', id: 3},
        ],

        dialogs: [
        {id:1, name: 'Vasya'},
        {id:2, name: 'Masha'},
        {id:3, name: 'Asya'},
        ],
    }
};

export let addPost=(postMessage) => {

    let newPost = {
        id: 2,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
};

export default state;
