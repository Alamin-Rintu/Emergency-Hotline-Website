/**** 1st condition****/ 
const heartCount = document.getElementById('heart-count');
let count = 0;

const heartIcons = document.getElementsByClassName('heart-icon'); 
for (const icon of heartIcons) {
  icon.addEventListener('click', function () {
    count++;
    heartCount.textContent = count;
  });
}
/**** 2nd requirment****/ 
const coinCount = document.getElementById('coin-count');
let coins = parseInt(coinCount.textContent);

const callButtons = document.querySelectorAll('.call-btn');
const callHistory = document.getElementById('call-history');
const clearBtn = document.getElementById('clear-history');

callButtons.forEach(button => {
  button.addEventListener('click', function () {
    const card = button.closest('.bg-white'); // card element
    const serviceName = card.querySelector('.service-name').textContent;
    const serviceNumber = card.querySelector('.service-number').textContent;

    // Check coins
    if (coins < 20) {
      alert('Not enough coins! You need at least 20 coins.');
      return; // coin কম হলে history add হবে না
    }

    // Deduct coins
    coins -= 20;
    coinCount.textContent = coins;

    // Show alert
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Add to call history
    const div = document.createElement('div');
    div.className = "p-3 mb-2 bg-white border-gray-400 rounded shadow-sm font-bold";
    div.textContent = `${serviceName}  ${serviceNumber}`;
    callHistory.appendChild(div);
  });
});

// Clear history
clearBtn.addEventListener('click', function () {
  callHistory.innerHTML = ''; // Removes all li elements
});









//  