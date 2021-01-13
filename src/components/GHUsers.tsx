import React, { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";
import github from "../services/github";
import Loading from "./Loading";
import Error from "./Error";
import timeout from "../helpers/timeout";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const GHUsers = () => {
  // TODO: Refactor with useQuery hook
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading"
  );
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<User[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setStatus("loading");
      await timeout(2000);
      const response = await github.get<User[]>("users");
      setStatus("success");
      setData(response.data);
    } catch (error) {
      setStatus("error");
      setError(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (status === "error") return <Error error={error} />;

  if (status === "loading") return <Loading />;

  return (
    <div className="bg-gray-200 p-5 flex flex-wrap justify-center">
      {data &&
        data.map((user) => (
          <div className="bg-gray-50 w-56 mx-3 my-3">
            <img className="w-full" src={user.avatar_url} alt="User avatar" />
            <div className="flex flex-col p-2">
              <h2 className="font-semibold text-2xl mb-5">{user.login}</h2>
              <a
                className="text-red-400 font-bold self-center hover:text-red-600 transition-colors"
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
