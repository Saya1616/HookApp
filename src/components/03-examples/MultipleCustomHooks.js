import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)  
  const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
  const { data, loading } = useFetch(url);
  const {author, quote} = !!data && data[0];
  

  console.log(author, quote);

  return (
    <div>
      <h1> BreakingBad Quotes </h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
        <button className='btn btn-primary' onClick={increment}>
            Siguiente Frase
        </button>
    </div>
  );
};
