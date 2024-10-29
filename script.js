document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    
    // Log each form entry
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // Use Formspree's API to submit the form data
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Redirect to the thank you page
            window.location.href = 'thank-you.html';
        } else {
            // Handle error here (e.g., display a message)
            alert('There was a problem with your submission.');
        }
    })
    .catch(error => {
        // Handle network error here
        alert('There was a network error.');
    });
});
