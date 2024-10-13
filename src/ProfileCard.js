import React, { useState } from 'react';
import MapComponent from './MapComponent';

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="profile-card">
      <img src={`https://via.placeholder.com/150`} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={() => setShowMap(!showMap)}>Show on Map</button>
      {showMap && <MapComponent location={profile.location} />}
    </div>
  );
};

export default ProfileCard;
