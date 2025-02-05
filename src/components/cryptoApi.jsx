

export default async function cryptoApi() {
    const url = "https://api.coinpaprika.com/v1/tickers";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

