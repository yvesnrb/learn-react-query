import React, { useCallback, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import api from '../services/api';

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const GHUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await api.get<User[]>('users');
      setIsLoading(false);
      setUsers(response.data);
    } catch (error) {
      setIsError(true);
      setError(error);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await fetchUsers();
    })();
  }, [fetchUsers]);

  if (isError)
    return <p>Error! {error && JSON.stringify(error.response?.data)}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-gray-200 p-5 flex flex-wrap justify-center">
      {users.map((user) => (
        <div className="bg-gray-50 w-56 mx-3 my-3">
          <img className="w-full" src={user.avatar_url} alt="User avatar" />
          <div className="flex flex-col p-2">
            <h2 className="font-semibold text-xl mb-5">{user.login}</h2>
            <a
              className="text-blue-600 self-end"
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              See on GitHub &gt;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GHUsers;
