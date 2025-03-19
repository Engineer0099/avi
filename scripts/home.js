// Step 1: Check Link
document.getElementById('checkLinkBtn').addEventListener('click', () => {
  const link = document.getElementById('linkInput').value;
  if (!link) {
    alert('Please paste a valid link.');
    return;
  }

  // Simulate checking the link
  document.querySelector('.step-1').classList.add('hidden');
  document.querySelector('.step-2').classList.remove('hidden');
  document.getElementById('linkTitle').textContent = "Sample Video Title";
});

// Step 2: Select Format
document.getElementById('formatSelect').addEventListener('change', (e) => {
  const format = e.target.value;
  const qualitySelect = document.getElementById('qualitySelect');

  if (format === 'audio' || format === 'video') {
    qualitySelect.classList.remove('hidden');
  } else {
    qualitySelect.classList.add('hidden');
  }

  document.getElementById('downloadBtn').classList.remove('hidden');
});

// Step 3: Download
document.getElementById('downloadBtn').addEventListener('click', () => {
  document.querySelector('.step-2').classList.add('hidden');
  document.querySelector('.step-3').classList.remove('hidden');

  // Simulate download progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    document.querySelector('.progress').style.width = `${progress}%`;
    document.getElementById('downloadProgress').textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById('timeRemaining').textContent = "Done!";
    } else {
      document.getElementById('timeRemaining').textContent = `${10 - progress / 10}s`;
    }
  }, 500);
});

// scripts/home.js
document.getElementById('downloadBtn').addEventListener('click', async () => {
  const url = document.getElementById('linkInput').value; // Get the link

  // Validate the URL
  if (!url) {
    alert('Please enter a valid link!');
    return;
  }

  // Make a POST request to the server to start the download
  try {
    const response = await fetch('http://localhost:3000/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (response.ok) {
      console.log('Download started');
      // You can update the UI to show download progress here
    } else {
      console.error('Error starting download');
    }
  } catch (err) {
    console.error('Failed to start download:', err);
  }
});
