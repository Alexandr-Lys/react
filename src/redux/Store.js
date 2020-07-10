import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
            {id: 0, message:'Hi, how are you?', likeCount:'30'},
            {id: 1, message:'Its my first post', likeCount:'20'}
        ],
            newPostText: 'olololo'
        },
        dialogsPage: {
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
        sidebar:[],

            newMessageBody: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};




export default store;
