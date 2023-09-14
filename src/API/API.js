const apiKey = 'https://api.api-ninjas.com/v1/quotes?category=movies';
const uniqueToken = '93kCq2I2vkVFI8wy5mfLCA==WCa6p7A1SUzZOXuK';

const GetQuote = async () => {
  const response = await fetch(apiKey, {
    method: 'GET',
    headers: {
      'X-Api-key': uniqueToken,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (data.error) throw data.error;
  return data;
};

export default GetQuote;
/*
const QUOTE_API = 'https://api.api-ninjas.com/v1/quotes?category=success';
const API_KEY = 'RpfsaV7nmDsDUjhBFuoirw==1nbR3TwipCYKqTtC';
const fetchQuote = async () => {
  const response = await fetch(QUOTE_API, {
    method: 'GET',
    headers: {
      'X-Api-key': API_KEY,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (data.error) throw data.error;
  return data;
};

export default fetchQuote;
*/
