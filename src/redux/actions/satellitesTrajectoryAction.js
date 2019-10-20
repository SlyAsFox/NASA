import axios from 'axios';

export const getSatellites = () => async dispatch => {
    try {
        const response = await axios.get('https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/spaseObservatories',
        );
        dispatch(satellitesSuccesful(response.data.data));
    } catch (error) {
        dispatch({
            type: 'FAILURE_Satellites',

        });
    }
};

export const satellitesSuccesful = data => ({ type: 'GET_SATELLITES', payload: data });




export const getTrajectory = satelites => async dispatch => {

    try {
        const response = await axios.get('https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/locations/${ satelites[i] }/20191019T230000Z,${ curr_date }/geo/',
        );
        dispatch(trajectorySuccesful(response.data.data));
    } catch (error) {
        dispatch({
            type: 'FAILURE_TRAJECTORY',

        });
    }
};

export const trajectorySuccesful = data => ({ type: 'GET_TRAJECTORY', payload: data });