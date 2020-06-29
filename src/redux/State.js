
let renderEntireTree = () => {
 console.log('wow');
}

let state = {
    profilePage: {
        posts: [
        {id: 0, message:'Hi, how are you?', likeCount:'30'},
        {id: 1, message:'Its my first post', likeCount:'20'}
    ],
        newPostText: 'olololo'
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

export const addPost=() => {

    let newPost = {
        id: 2,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export const updateNewPostText=(newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
}


export default state;
