const express = require('express');
const mysql = require('mysql2')
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root',      // Replace with your MySQL user
    password: 'Iplaygames@100', // Replace with your MySQL password
    database: 'autobazaar' // Replace with your MySQL database name
});

db.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database.');
  });

app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    });
});

app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
      if (err) {
          console.error('Error retrieving users:', err);
          return res.status(500).json({ message: 'Error retrieving users' });
      }
      res.status(200).json(results);
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT email, password FROM users WHERE email = ?";
  
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error retrieving users:', err);
      return res.status(500).json({ message: 'Error retrieving users' });
    }

    // Check if user exists and password matches
    if (results.length > 0 && results[0].password === password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

app.get('/api/dealerships', (req, res) => {
  db.query('SELECT * FROM Dealership', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.get('/api/vehicle', (req, res) => {
  db.query('SELECT * FROM vehicle', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});
app.get('/api/specs/:vehicle_id', (req, res) => {
  const { vehicle_id } = req.params;

  // Query the database for the vehicle by ID
  db.query('SELECT * FROM specs WHERE vehicle_id = ?', [vehicle_id], (err, results) => {
    if (err) {
      // Handle database errors
      return res.status(500).json({ error: 'Database error', details: err.message });
    }

    if (results.length === 0) {
      // Handle case when no vehicle is found
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    // Return the first result (assuming vehicle_id is unique)
    res.json(results[0]);
  });
});
app.get('/api/specs/:vehicle_id', (req, res) => {
  const { vehicle_id } = req.params;

  // Query the database for the vehicle by ID
  db.query('SELECT * FROM specs WHERE vehicle_id = ?', [vehicle_id], (err, results) => {
    if (err) {
      // Handle database errors
      return res.status(500).json({ error: 'Database error', details: err.message });
    }

    if (results.length === 0) {
      // Handle case when no vehicle is found
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    // Return the first result (assuming vehicle_id is unique)
    res.json(results[0]);
  });
});


app.get('/logo/:dealerId', (req, res) => {
  const dealerId = req.params.dealerId;
  
  // SQL query to retrieve the logo BLOB for the given Dealer_id
  const query = 'SELECT logo FROM Dealership WHERE Dealer_id = ?';

  db.query(query, [dealerId], (err, result) => {
    if (err) {
      console.error('Error retrieving logo:', err);
      res.status(500).send('Error retrieving logo');
    } else {
      if (result[0] && result[0].logo) {
        res.set('Content-Type', 'image/jpeg'); // Assuming JPEG format
        res.send(result[0].logo); // Send the image data as a response
      } else {
        res.status(404).send('Logo not found');
      }
    }
  });
});

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the folder to save files
    cb(null, 'uploads/'); // Save in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    // Generate a unique filename using timestamp and original file name
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename
  }
});

// Configure the multer upload with file filter and storage options
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Only accept image files (check MIME type)
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // Accept image files
    } else {
      cb(new Error('Invalid file type'), false); // Reject non-image files
    }
  }
});

// API route to upload the logo
app.post('/upload-logo', upload.single('logo'), (req, res) => {
  const { file, body } = req;

  // Ensure that dealer_id and logo are provided
  if (!body.dealer_id) {
    return res.status(400).send('Dealer ID is required');
  }

  // Convert the image buffer (file.buffer) to binary and insert into the database
  const logoData = file.buffer;
  const dealerId = body.dealer_id;

  // SQL query to update the logo for a specific dealer_id
  const query = 'UPDATE Dealership SET logo = ? WHERE dealer_id = ?';

  // Insert the binary logo data into the database for the specified dealer_id
  db.query(query, [logoData, dealerId], (err, result) => {
    if (err) {
      console.error('Error inserting logo into the database:', err);
      res.status(500).send('Error inserting logo');
    } else {
      console.log('Logo updated for dealer ID:', dealerId);
      res.status(200).send('Logo uploaded successfully');
    }
  });
});


app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
