const fs = require('fs');

// Function to count the number of words in a string
function countWords(text) {
    const words = text.split(/\s+/).filter((word) => word !== '');
    return words.length;
}

// Read the "data.txt" file
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
});
