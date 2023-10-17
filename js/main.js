document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('data-form');
    const consumptionList = document.getElementById('consumption-list');

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const date = document.getElementById('date').value;
        const dieselAmount = document.getElementById('diesel-amount').value;
        const tankLevel = document.getElementById('tank-level').value;

        // Create a JSON object with the form data
        const formData = {
            date: date,
            dieselAmount: dieselAmount,
            tankLevel: tankLevel
        }
        // Send a POST request to the backend using the Fetch API
        fetch('/submit-consumption/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to submit data to the backend');
            }
        })
        .then(data => {
            // Handle success - you can update the UI or display a success message
            console.log('Data submitted successfully:', data);

            // You may also want to update the consumption history if needed
            // Call a function to fetch and display the updated history
        })
        .catch(error => {
            // Handle errors - you can display an error message to the user
            console.error('Error:', error);
        });
    });
});
