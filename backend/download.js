const { exec } = require('child_process');
const path = require('path');
const os = require('os');

// Get the Downloads folder
const downloadsFolder = path.join(os.homedir(), 'Downloads');

// Function to download file using yt-dlp
const downloadFile = async (url) => {
  // Generate a file name based on the video's title
  const fileName = '%(title)s.%(ext)s'; // yt-dlp will automatically replace this with the title and appropriate extension
  
  // yt-dlp command to download video (MP4) or audio (MP3)
  const command = `yt-dlp -o "${path.join(downloadsFolder, fileName)}" -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4" ${url}`;

  try {
    // Execute yt-dlp command
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing yt-dlp: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout: ${stdout}`);
    });
  } catch (err) {
    console.error('Error in download process:', err);
  }
};

// Export the download function
module.exports = downloadFile;
// In this snippet, we define a function downloadFile that takes a URL as input and uses yt-dlp to download the video or audio file from that URL. The yt-dlp command is constructed based on the input URL and the desired output file format (MP4 for video and MP3 for audio). The command is then executed using the exec function from the child_process module.