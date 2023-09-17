function populateCurrencyDropdowns() {
    fetch('https://api.frankfurter.app/currencies')
      .then(response => response.json())
      .then(data => {
        const fromCurrencyDropdown = document.getElementById('fromCurrency');
        const toCurrencyDropdown = document.getElementById('toCurrency');
  
        for (const currency in data) {
          const option1 = new Option(currency, currency);
          const option2 = new Option(currency, currency);
          fromCurrencyDropdown.appendChild(option1);
          toCurrencyDropdown.appendChild(option2);
        }
      })
      .catch(error => {
        console.error('Error al obtener las monedas:', error);
      });
  }
  
function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      .then(response => response.json())
      .then(data => {
        const resultAmount = document.getElementById('resultAmount');
        resultAmount.textContent = `${amount} ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}`;
      })
      .catch(error => {
        console.error('Error al realizar la conversión:', error);
      });
  }
  
  populateCurrencyDropdowns();
  const convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', convertCurrency);
  