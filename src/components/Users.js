import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

function Users() {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch users when the component mounts
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {users.results.map((user, index) => (
        <li key={index}>
          {user.name.first} {user.name.last}
        </li>
      ))}
      {console.log(users.results)}
    </ul>
  );
}

export default Users;
