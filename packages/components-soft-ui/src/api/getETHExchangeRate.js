export const getETHExchangeRate = async () => {
    var requestOptions = { method: "GET", redirect: "follow" };
    return fetch("https://api.coinbase.com/v2/exchange-rates?currency=USD", requestOptions)
        .then((response) => response.json())
        .then((result) => {return(result.data.rates.ETH)})
        .catch((error) => {return("error", error)});
}