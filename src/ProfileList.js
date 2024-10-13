import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
   
    setProfiles([
      { id: 1, name: 'John Doe', description: 'Developer', location: { lat: 40.712776, lng: -74.005974 } },
      { id: 2, name: 'Jane Smith', description: 'Designer', location: { lat: 34.052235, lng: -118.243683 } },
    ]);
  }, []);

  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
