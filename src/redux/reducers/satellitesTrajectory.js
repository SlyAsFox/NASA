const initialState = {
    arrayDots: [],
    isRequired: false,

};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_TRAJECTORY':
            return {
                ...state,
                arrayDots: action.payload,
                isRequired: true,
            };

        case 'FAILURE_TRAJECTORY':
            return {
                ...state,
                isRequired: false,
            };

        default:
            return state;
    }
}