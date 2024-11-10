document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];  // Get the file
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;  // File content as text
            console.log(text);  // Use the file content here
        };

        reader.onerror = function() {
            console.error("Error reading file.");
        };

        reader.readAsText(file);  // Read the file as text
    }
});
