import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    const UserString = sessionStorage.getItem('User');
    const userUser = JSON.parse(UserString);
    return userUser?.User
  };

  const [User, setUser] = useState(getUser());

  const saveUser = userUser => {
    sessionStorage.setItem('User', JSON.stringify(userUser));
    setUser(userUser.User);
  };

  return {
    setUser: saveUser,
    user
  }
}