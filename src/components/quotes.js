import { useEffect, useState } from 'react';
import GetQuote from '../API/API';
import '../styles/quote.css';

const Quotes = () => {
  const [quotes, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetQuote().then((res) => {
      setQuote(res[0]);
      setIsLoading(false);
    }).catch(() => {
      setIsError(true);
    });
  }, []);

  const message = isError ? 'Request Failed!\nBroken Link' : 'Getting quote...';
  return (
    <div className="quotes-box">
      {(isError || isLoading) ? <p className="message">{message}</p> : (
        <blockquote>
          <span className="quote">{quotes.quote}</span>
          <cite>{quotes.author}</cite>
        </blockquote>
      )}
    </div>
  );
};

export default Quotes;
