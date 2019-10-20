const initialState = {
    arraySatellitesData: [],
    isRequired: false,
    srcImages: 'aim'

};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_SATELLITE_DATA':
            return {
                ...state,
                arrayDots: action.payload,
                isRequired: true,
            };

        case 'FAILURE_SATELLITE_DATA':
            return {
                ...state,
                isRequired: false,
            };

        default:
            return state;
    }
}