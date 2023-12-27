import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialState = { loading: true, post: {}, error: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };

    default:
      return state;
  }
};

export const FetchingUseReducer = () => {
  //con useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  //Xon useState
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [post, setPost] = useState({});
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) => {
  //       setPost(res.data);
  //       setLoading(false);
  //       setError("");
  //     })
  //     .catch((error) => {
  //       setPost({});
  //       setLoading(false);
  //       setError("Something went wrong");
  //     });
  // }, []);
  return (
    <div>
      {/* con useState
      {loading ? "loading" : post.title}
      {error ? error : null} */}
      {/* con useREducer */}
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};
