const tooltip = document.getElementById('tooltip');

tooltip.addEventListener('click', function () {
  if (!tooltip.classList.contains('tooltip-clicked')) {
    const tooltipMessage = document.createElement('div');
    tooltipMessage.classList.add('tooltip-message');
    this.classList.add('tooltip-clicked');
    this.removeEventListener('click', arguments.callee);
  }
});


const legitButton = document.getElementById('legitButton');
const maliciousButton = document.getElementById('maliciousButton');

legitButton.addEventListener('click', () => {
  alert('You Trapped! 🐁 You actually clicked the Dangerous Link!');
});

maliciousButton.addEventListener('click', () => {
  legitButton.click();
});
