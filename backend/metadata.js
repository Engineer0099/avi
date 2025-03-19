const { exec } = require("child_process");

// Function to get metadata
function getMediaDetails(url) {
    let command = `yt-dlp -J "${url}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }

        try {
            const data = JSON.parse(stdout);
            console.log("🔹 Title:", data.title);
            console.log("🔹 Duration:", data.duration, "seconds");
            console.log("🔹 Uploader:", data.uploader);
            console.log("🔹 Upload Date:", data.upload_date);
            console.log("🔹 Available Formats:");
            data.formats.forEach(f => console.log(`    - ${f.format_note} (${f.ext})`));
            console.log("🔹 Thumbnail:", data.thumbnail);
        } catch (parseError) {
            console.error("Error parsing metadata:", parseError.message);
        }
    });
}

// Example Usage:
getMediaDetails("https://youtube.com/shorts/R0AXl17TJfk?si=oqOJpLdFtZ8u-pxd");
// Output will be logged to the console