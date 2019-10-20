import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';
import satellitesTrajectory from './satellitesTrajectory';
import satellitesData from './satellitesData';

const createRootReducer = () =>
    combineReducers({

        imagesReducer,
        satellitesTrajectory,
        satellitesData,
    });
export default createRootReducer;