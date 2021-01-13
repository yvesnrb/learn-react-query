import { AxiosError } from "axios";
import React from "react";

interface Props {
  error: AxiosError | null;
}

const Error: React.FC<Props> = (props) => {
  const { error } = props;

  return (
    <div className="h-screen flex items-center justify-center bg-red-900">
      <p className="text-white">{error && JSON.stringify(error, null, 4)}</p>
    </div>
  );
};

export default Error;
