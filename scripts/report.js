document.getElementById('reportForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const description = document.getElementById('message').value;

  // Create the data object
  const reportData = {
      name: name,
      email: email,
      description: description
  };

  // Send the data to the server using fetch
  try {
      const response = await fetch('http://avidownloader.rf.gd/report.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(reportData)
      });

      // Handle the response
      if (response.ok) {
          alert('Report submitted successfully!');
          document.getElementById('reportForm').reset(); // Clear the form
      } else {
          alert('Failed to submit report. Please try again.');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your report.');
  }
});
