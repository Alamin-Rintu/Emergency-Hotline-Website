/**** 1st condition****/ 
// Heart count
const heartCount = document.getElementById('heart-count');
let count = 0;

const heartIcons = document.getElementsByClassName('heart-icon'); 
for (const icon of heartIcons) {
  icon.addEventListener('click', function () {
    count++;
    heartCount.innerText = count;
  });
}

/**** 2nd requirement****/ 
const coinCount = document.getElementById('coin-count');
let coins = parseInt(coinCount.innerText);

const callButtons = document.querySelectorAll('.call-btn');
const callHistory = document.getElementById('call-history');
const clearBtn = document.getElementById('clear-history');

for (const button of callButtons) {
  button.addEventListener('click', function () {
    const card = button.closest('.bg-white'); 
    const serviceName = card.querySelector('.service-name').innerText; 
    const serviceNumber = card.querySelector('.service-number').innerText;

    if (coins < 20) {
      alert('Not enough coins! You need at least 20 coins.');
      return; 
    }

    coins -= 20;
    coinCount.innerText = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // current time add
    const now = new Date();
    const time = now.toLocaleTimeString();

    // history add 
    const div = document.createElement('div');
    div.className = "p-3 mb-2 bg-white border-gray-400 rounded shadow-sm font-bold";
    div.innerText = `${serviceName}  ${serviceNumber}  (Time: ${time})`;
    callHistory.appendChild(div);
  });
}

// Clear history
clearBtn.addEventListener('click', function () {
  callHistory.innerHTML = '';
});



// challange part & help form chartgpt

const copyButtons = document.querySelectorAll('.copy-btn');
const headerCopyButton = document.querySelector('header .copy-btn span');

for (const button of copyButtons) {
  button.addEventListener('click', () => {

    const card = button.closest('.bg-white');
    let numberText;

    if (card) {
      numberText = card.querySelector('.service-number').innerText;
    } else {
      numberText = "Header copy button clicked";
    }
    navigator.clipboard.writeText(numberText)
      .then(() => {
        if (headerCopyButton) {
          let count = parseInt(headerCopyButton.innerText) || 0;
          headerCopyButton.innerText = count + 1;
        }
        alert(`Copied: ${numberText}`);
      })
      .catch(err => console.error('Copy failed: ', err));
  });
}
















//  