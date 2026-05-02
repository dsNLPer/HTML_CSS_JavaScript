'use strict';
const orders = [];
const updateDisplay = () => {
  const displayDiv = document.querySelector('#order-list');
  displayDiv.textContent = ''; 
  
  let text = '';
  for (let item of orders) {
    text += item + ' / '; 
  }
  displayDiv.textContent = text;
};
const addOrder = (foodName) => {
  orders.push(foodName); 
  updateDisplay();
};
document.querySelector('#btn-tempura').addEventListener('click', () => {
  addOrder('天ぷら');
});
document.querySelector('#btn-nikujaga').addEventListener('click', () => {
  addOrder('肉じゃが');
});
document.querySelector('#btn-oyako').addEventListener('click', () => {
  addOrder('親子丼');
});
document.querySelector('#btn-tendon').addEventListener('click', () => {
  addOrder('天丼');
});
document.querySelector('#btn-teishoku').addEventListener('click', () => {
  addOrder('豚生姜定食');
});
document.querySelector('#btn-other').addEventListener('click', () => {
  const input = document.querySelector('#input-other');
  if (input.value !== '') {
    addOrder(input.value);
    input.value = ''; 
  }
});
document.querySelector('#btn-serve').addEventListener('click', () => {
  if (orders.length > 0) { 
    orders.shift(); 
    updateDisplay();
  }
});