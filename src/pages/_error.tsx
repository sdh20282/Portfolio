import { NextApiResponse } from "next";

type ErrorProps = {
  statusCode: number;
}

type InitialProps = {
  res: NextApiResponse;
  err: NextApiResponse;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <p>
      {
        statusCode 
          ? `An error ${statusCode} occurred on server` 
          : "An error occurred on client"
      }
    </p>
  );
};

Error.getInitialProps = ({ res, err }: InitialProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return {statusCode};
};

export default Error;