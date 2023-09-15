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