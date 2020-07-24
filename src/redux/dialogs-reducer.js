const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});
export default dialogsReducer;