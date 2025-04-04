// Select the rating buttons
const ratingButtons = document.querySelectorAll('.rating__button');

// Element to display the selected rating
const selectedRatingDisplay = document.querySelector('#selected-rating-display');

// Rating Card
const ratingCard = document.querySelector('.card--rating');

// Thank You Card
const thankYouCard = document.querySelector('.card--thank-you');

// submit button
const submitButton = document.querySelector('.submit__button');

// Variable to store the selected rating
let selectedRating = null;

// Function to handle the rating button click
function handleRatingButtonClick(event) { 
     // get the value of the clicked button
      selectedRating = event.target.textContent;

      // Remove the 'active' class from all buttons
      ratingButtons.forEach(btn => btn.classList.remove('active'));
      // Add the 'active' class to the clicked button
      event.target.classList.add('active');
}

// function to handle the submit button click
function handleSubmitButtonClick() { 
  if (selectedRating) {
    // remove fade-in class from rating card
    ratingCard.classList.remove('fade-in');
    // add fade-out class to rating card
    ratingCard.classList.add('fade-out');

    setTimeout(() => { 
      // Hide the rating card
      ratingCard.style.display = 'none'; 
      
      // Show the thank you card
      thankYouCard.style.display = 'block'; 

      // add fade-in class to thank you card
      thankYouCard.classList.add('fade-in');

      selectedRatingDisplay.textContent = selectedRating;
    }, 500)
   
  } else {
    // Show an alert if no rating is selected
    alert('Please select a rating before submitting.');
  }
}


ratingButtons.forEach(button => { button.addEventListener('click', handleRatingButtonClick)});
submitButton.addEventListener('click', handleSubmitButtonClick);