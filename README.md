<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReuseMart README</title>
</head>
<body>
    <h1>ReuseMart</h1>
    <p>ReuseMart is a marketplace application for buying and selling second-hand items. This project is built with React.js for the frontend and Node.js with Express.js for the backend.</p>
    <h2>Features</h2>
    <ul>
        <li><strong>Buy and Sell Second-Hand Items:</strong> Users can list items for sale and browse items to buy.</li>
        <li><strong>Product Management:</strong> Users can add, edit, and delete their product listings.</li>
        <li><strong>Chat Functionality:</strong> Real-time chat between buyers and sellers to facilitate transactions.</li>
        <li><strong>User Authentication:</strong> Secure user registration and login functionality.</li>
        <li><strong>Responsive Design:</strong> Ensures usability across various devices and screen sizes.</li>
        <li><strong>Profile Management:</strong> Users can view and manage their listed products in their profile.</li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> React.js</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
    </ul>
    <h2>Installation</h2>
    <h3>Prerequisites</h3>
    <p>Node.js and npm installed on your machine</p>

    <h3>Setup</h3>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone git@github.com:Aakash-sonawane/ReuseMart_Fullstack.git</code></pre>
        </li>
        <li><strong>Install dependencies for both frontend and backend:</strong>
            <pre><code>
                cd frontend
                npm install
                cd backend
                npm install
            </code></pre>
        </li>
        
        <li><strong>Configure environment variables:</strong>
            <p>Create a <code>.env</code> file in the <code>backend</code> directory and add the necessary environment variables (e.g., database connection string, port number, etc.).</p>
        </li>
        <li><strong>Run the application:</strong>
            <p>Start the backend server:</p>
            <pre><code>
                cd backend
                npm start
            </code></pre>
            <p>Start the frontend server:</p>
            <pre><code>
                cd ../frontend
                npm start
            </code></pre>
        </li>
        <li><strong>Access the application:</strong>
            <p>Open your browser and go to <a href="http://localhost:5000">http://localhost:5000</a></p>
        </li>
    </ol>

    <h2>Usage</h2>
    <ol>
        <li><strong>Register and Login:</strong> Create an account or log in to access the full functionality.</li>
        <li><strong>Add Products:</strong> Use the "Sell Product" feature to list your second-hand items for sale.</li>
        <li><strong>Chat with Sellers:</strong> Use the chat functionality to communicate with sellers for more details or to arrange transactions.</li>
        <li><strong>Manage Your Products:</strong> View and manage your listed products in the profile tab.</li>
    </ol>

    <h2>Folder Structure</h2>
    <pre><code>reuseMart/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components
│       ├── App.js
│       └── index.js
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── README.md
└── package.json</code></pre>

    <h2>Contributing</h2>
    <p>Contributions are welcome! Please fork this repository and submit a pull request for any features, enhancements, or bug fixes.</p>

    <h2>Contact</h2>
    <p>If you have any questions or suggestions, feel free to reach out at <a href="mailto:akashsonawane152256@gmail.com">akash-sonawane</a>.</p>
</body>
</html>
