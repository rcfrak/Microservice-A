# Microservice-A, Microservice Build for CS361 Team, Username generator for Gavin B.

A. Request Data:

Request data from the microservice with fetch. A function can be created that uses fetch to call the endpoint. In this case, the endpoint is on localhost with port 2133, api/username. The function can be used with an "onclick" event in order to allow the user to generate their username with a button.

Example of function and fetch:

            async function generateUsername() {
                        
                        const response = await fetch('http://localhost:2133/api/username');{
                        const data = await response.json();
                        document.getElementById('username-display').textContent = data.username;
                    } 
                }
        

Microservice:

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
                const username = generateUsername();
                res.json({ username });
            });
            
            app.listen(PORT, () => {
                console.log(`Server running...`);
            });

B. Receive Data:

The fetch is assigned to the response variable. When the request is made to the endpoint, the generateUsername function is run within the index.js file. The server responds to the request with the generated username as a JSON response. Back in the index.html file, the response data is assigned to the data variable as seen in the example above. In the case of the given example, that data is assigned to ID username-display in order to display on button click.

C. UML Sequence Diagram:

[UML Sequence Diagram](UML.png)
