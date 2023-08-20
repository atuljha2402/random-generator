const positionImage = document.getElementById('position-image');
const generateButton = document.getElementById('generate-button');
const cardContainer = document.getElementById('card-container');

generateButton.addEventListener('click', generateRandomPosition);

function generateRandomPosition() {
  // Disable the button to prevent multiple clicks during generation
  generateButton.disabled = true;

  const minNumber = 1;
  const maxNumber = 35; // Update this to the maximum number in your file names
  const randomPositionNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  const positionImagePath = `components/${minNumber} (${randomPositionNumber}).jpg`; // Update with your image path

  // Apply animation classes
  cardContainer.classList.remove('reveal'); // Remove reveal class to reset the animation
  cardContainer.classList.add('shuffle');

  // Wait for animation to finish
  setTimeout(() => {
    // Set the new card image
    positionImage.src = positionImagePath;
    positionImage.alt = ''; // Clear the alt attribute after the image is loaded

    // Re-enable the button and add reveal animation class
    generateButton.disabled = false;
    cardContainer.classList.remove('shuffle');
    cardContainer.classList.add('reveal');
  }, 500); // 500 milliseconds for the shuffle animation

  // Re-enable the button after a short delay to avoid rapid clicking
  setTimeout(() => {
    generateButton.disabled = false;
  }, 1500); // 1500 milliseconds for the delay before re-enabling the button
}
