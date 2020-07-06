const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state: {
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

            newMessageText: 'mess'
        }
    },
    _callSubscriber () {
     console.log('wow');
 },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if(action.type === ADD_POST ){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE){
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };
            debugger;
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
});

export default store;
