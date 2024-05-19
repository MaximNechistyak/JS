const badgeContainer = document.getElementById('badgeContainer');
const addBadgeBtn = document.getElementById('addBadgeBtn');

addBadgeBtn.addEventListener('click', () => {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const badge = document.createElement('span');
    badge.classList.add('badge', 'bg-primary', 'm-1');
    badge.textContent = currentTime;

    badgeContainer.appendChild(badge);
});