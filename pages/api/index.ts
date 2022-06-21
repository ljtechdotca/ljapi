import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  method: string;
  body: string;
  query: {
    [key: string]: string | string[];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body, query } = req;

  let data: Data = {
    method: "INVALID",
    body: "Internal server error.",
    query: {},
  };

  switch (method) {
    case "POST":
      data = {
        method,
        body,
        query,
      };
      res.status(200).json(data);
      break;
    case "DELETE":
      data = {
        method,
        body,
        query,
      };
      res.status(200).json(data);
      break;
    case "PUT":
      data = {
        method,
        body,
        query,
      };
      res.status(200).json(data);
      break;
    case "GET":
      data = {
        method,
        body,
        query,
      };
      res.status(200).json(data);
      break;
    default:
      res.status(200).json(data);

      break;
  }
}
