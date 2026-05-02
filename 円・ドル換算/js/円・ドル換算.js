'use strict';
const rateInput = document.querySelector('#rate');
const yenInput = document.querySelector('#yen');
const dollarInput = document.querySelector('#dollar');
yenInput.addEventListener('input', () => {
  const rate = Number(rateInput.value); 
  const yen = Number(yenInput.value);
  const result = yen / rate;
  dollarInput.value = result;
});
dollarInput.addEventListener('input', () => {
  const rate = Number(rateInput.value);
  const dollar = Number(dollarInput.value);
  const result = dollar * rate;
  yenInput.value = result;
});
rateInput.addEventListener('input', () => {
  const rate = Number(rateInput.value);
  const yen = Number(yenInput.value);
  
  const result = yen / rate;
  dollarInput.value = result;
});