const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 2133;
const name_array = [];

app.use(cors());

function generateUsername() {
    const first = ['Silly', 'Handsome', 'Wild', 'Noble', 'Beautiful', 'Charming', 'Shy', 'Mysterious'];
    const second = ['Guy', 'Girl', 'Dog', 'Cat', 'Dragon', 'Cowboy', 'Cowgirl', 'Astronaut'];
    const first_word = first[Math.floor(Math.random() * first.length)];
    const second_word = second[Math.floor(Math.random() * second.length)];
    const year = Math.floor(Math.random() * (2006 - 1900) + 1900);
    const name = `${first_word}_${second_word}_${year}`;
    const name_match = name_array.includes(name)

    if (name_match) {
        return generateUsername();
    } else {
        name_array.push(name);
        return name;
    }
};

app.get('/api/username', (req, res) => {
    console.log(`Get request received.`)
    const username = generateUsername();
    console.log(`Username sent.`)
    res.json({ username });
});

app.listen(PORT, () => {
    console.log(`Server running...`);
});