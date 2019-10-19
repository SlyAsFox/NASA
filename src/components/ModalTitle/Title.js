import React from 'react';
import './Title.css';

const Title = () => {
  return (
    <div className="title">
      <h1>
        Explore more <span className="title-space">space</span>
      </h1>
      <span className="title-text-span">
        NASA builds and operates numerous satellite and airborne missions that deliver critical measurements and data to
        the world’s science community. Your challenge is to develop a tool that enables people to identify NASA
        satellites and satellite instruments as they fly over their locations on Earth. Help people explore the data and
        applications coming from the instruments overhead!
      </span>
    </div>
  );
};

export default Title;
