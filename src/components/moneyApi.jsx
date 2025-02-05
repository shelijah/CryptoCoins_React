

export default async function moneyApi() {
    const url = "https://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json";
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