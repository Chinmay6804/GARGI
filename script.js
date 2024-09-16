// Function to calculate the days of love
function updateDaysOfLove() {
    const startDate = new Date('2024-07-16T20:26:00'); // Start date
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const counterElement = document.getElementById('counter');
    counterElement.textContent = `You have been together for ${diffDays} days.`;
}

// Update the counter on page load
document.addEventListener('DOMContentLoaded', updateDaysOfLove);
