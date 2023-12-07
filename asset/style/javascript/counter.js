// animateCounter
// Set the target counts
const targetCounts = [1232, 64, 42, 15];

// Set the duration of the animation in milliseconds
const animationDuration = 2000;

// Calculate the increment per interval for each counter
const increments = targetCounts.map(target => (target / animationDuration) * 50);

// Initialize the current counts
let currentCounts = Array(targetCounts.length).fill(0);

// Reference to the counter elements
const counterElements = targetCounts.map((_, index) => document.getElementById(`counter${index + 1}`));

// Function to update the counters
function updateCounters() {
    currentCounts = currentCounts.map((count, index) => {
        count += increments[index];

        // Check if we've reached or exceeded the target count for each counter
        if (count >= targetCounts[index]) {
            count = targetCounts[index];
        }

        // Update the counter element
        counterElements[index].textContent = Math.floor(count);

        return count;
    });

    // Check if all counters have reached their targets
    if (currentCounts.every((count, index) => count >= targetCounts[index])) {
        clearInterval(interval);
    }
}
// Set up the interval
const interval = setInterval(updateCounters, 50); 
