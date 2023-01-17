import React, { useEffect, useState } from "react";
import axios from "axios";
const Fetch = () => {
  const api = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        console.log("error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const createPost = () => {
    axios
      .post(api, {
        title: "hello World!",
        body: "this is new Post",
      })
      .then((response) => {
        setData(response.data);
      });
  };
  if (!data) return "No data!";
  return (
    <>
      <button onClick={createPost}> create post</button>

      {data.map((data, key) => {
        return (
          <>
            <h1>key={key}</h1>
            <h1>{data.id}</h1>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </>
        );
      })}
    </>
  );
};

export default Fetch;
