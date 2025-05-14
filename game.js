let cash = 10000;
let day = 1;

const tickers = Array.from({ length: 6 }, () => ({
  name: generateCompanyName(),
  price: Math.floor(Math.random() * 500 + 50),
}));

function render() {
  document.getElementById("cash").textContent = cash.toLocaleString();
  document.getElementById("day").textContent = day;

  const tickerList = document.getElementById("tickers");
  tickerList.innerHTML = "";
  tickers.forEach(ticker => {
    // Simulate minor price changes
    const change = Math.floor(Math.random() * 21 - 10); // ±10
    ticker.price = Math.max(1, ticker.price + change);

    const li = document.createElement("li");
    li.textContent = `${ticker.name}: $${ticker.price}`;
    tickerList.appendChild(li);
  });

  // Change advisor dialogue once every few days
  if (day % 3 === 0) {
    document.getElementById("advisor-dialogue").textContent = random([
      "Decentralize your chakras.",
      "This market is held together with vape pens and vibes.",
      "Rugpulls build character.",
      "Buy low, ghost high.",
      "We're shorting time itself.",
      "Retire? Capital never sleeps, honey."
    ]);
  }
}

function advanceDay() {
  day++;
  render();
}

window.onload = render;
