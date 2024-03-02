let btc = document.getElementById("bitcoin");
let etc = document.getElementById("ethereum");
let teth = document.getElementById("tether");

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  etc.innerHTML = response.ethereum.usd;
  teth.innerHTML = response.tether.usd;
});
