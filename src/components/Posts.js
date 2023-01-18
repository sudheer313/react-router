import React, { useEffect, useState } from "react";
import axios from "axios";
const Posts = () => {
  const api = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(api);
      console.log(response.data);
      setData(response.data);
    };
    fetchPosts();
    // axios
    //   .get(api)
    //   .then((response) => {
    //     setData(response.data);
    //     console.log(response.data);
    //   })

    //   .catch((error) => {
    //     console.log("error fetching data:", error);
    //     setError(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
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

      {data.map((data, index) => {
        return (
          <div key={index}>
            <h1>{data.id}</h1>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
