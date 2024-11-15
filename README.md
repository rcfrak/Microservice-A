# Microservice-A, Microservice Build for CS361 Team, Username generator for Gavin B.

A. Request Data:

Request data from the microservice with fetch. A function can be created that uses fetch to call the endpoint. In this case, the endpoint is on localhost on port 2133, api/username. The function can be used with an "onclick" event in order to allow the user to generate their username with a button.

Example of request:

            async function generateUsername() {
                        
                        const response = await fetch('http://localhost:2133/api/username');{
                        const data = await response.json();
                        document.getElementById('username-display').textContent = data.username;
                    } 
                }
        

Example of response:

            app.get('/api/username', (req, res) => {
                console.log(`Get request received.`)
                const username = generateUsername();
                res.json({ username });
                console.log(`Username sent.`);
            });

B. Receive Data:

The fetch is assigned to the response variable. When the request is made to the endpoint, the generateUsername function is run within the index.js file. The response to the request is the generated username as a JSON response. Back in the index.html file, the response data is assigned to the data variable as seen in the request example above. In the case of the given example, that data is assigned to ID username-display in order to display on button click.

C. UML Sequence Diagram:

[UML Sequence Diagram](UML.png)
