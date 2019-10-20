import React from 'react';
import './Menu.css';

const MenuSatellite = props => {
    const { satellite } = props;
    return (
        <div className="title-info">
            {satellite.name && (
                <span>
          <span className="title-span">Name:</span> {satellite.name}
        </span>
            )}
            {satellite.type && (
                <span>
          <span className="title-span">Type:</span> {satellite.type}
        </span>
            )}
            {satellite.origin && (
                <span>
          <span className="title-span">Origin:</span> {satellite.origin}
        </span>
            )}
            {satellite.mission && (
                <span>
          <span className="title-span">Mission:</span> {satellite.mission}
        </span>
            )}
            {satellite.missionDuration && (
                <span>
          <span className="title-span">Mission duration:</span> {satellite.missionDuration}
        </span>
            )}
            {satellite.website && <a href={satellite.website}>More info...</a>}
        </div>
    );
};

export default MenuSatellite;