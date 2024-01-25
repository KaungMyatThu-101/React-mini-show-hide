import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";

const useFetch = (url, { test }) => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let options = useRef(test).current; //1
  // let [options, setOptions] = useState(test);  //2

  //-------------------------------------for reference to prevent infinite re-render-------------------------------------

  //--for function -- useCallback
  //--object,array -- userstate/ useRef

  let fetchTrips = useCallback(() => {
    let abourtController = new AbortController();
    let signal = abourtController.signal;

    setLoading(true);
    fetch(url, { signal })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong!!!");
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
        console.log("connecting");
      })
      .catch((e) => {
        setError(e.message);
      });
    return () => {
      abourtController.abort();
    };
  }, [url, test]);

  useEffect(() => {
    console.log(options);
    fetchTrips();
  }, [fetchTrips]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
