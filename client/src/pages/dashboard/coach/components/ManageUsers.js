import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data here
  }, []);

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <div className="users-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers; 