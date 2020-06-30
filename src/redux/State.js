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
        if(action.type === 'ADD-POST' ){
            let newPost = {
                id: 2,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}

export default store;
