const initialState = {
    arrayImages: [],
    isRequired: false,

};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_IMAGES':
            return {
                ...state,
                arrayDots: action.payload,
                isRequired: true,
            };

        case 'FAILURE_IMAGES':
            return {
                ...state,
                isRequired: false,
            };

        default:
            return state;
    }
}