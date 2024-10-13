import React, { useState } from 'react';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', description: 'Developer', location: { lat: 40.712776, lng: -74.005974 } },
  ]);
  const [newProfile, setNewProfile] = useState({ name: '', description: '', location: { lat: 0, lng: 0 } });

  const handleAdd = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({ name: '', description: '', location: { lat: 0, lng: 0 } });
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        />
        <button type="button" onClick={handleAdd}>Add Profile</button>
      </form>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} - {profile.description}
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
