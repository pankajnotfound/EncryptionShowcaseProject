// server/index.js
const express = require('express');
const cors = require('cors');
const EC = require('elliptic').ec;

// Initialize elliptic curve
const ec = new EC('secp256k1'); // A common and secure curve used by Bitcoin

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// --- API ROUTES ---

// Health check route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend server!' });
});

/**
 * @route   GET /api/keys/ecc
 * @desc    Generates a new ECC public/private key pair.
 * @access  Public
 */
app.get('/api/keys/ecc', (req, res) => {
  try {
    const keyPair = ec.genKeyPair();
    const publicKey = keyPair.getPublic('hex');
    const privateKey = keyPair.getPrivate('hex');

    res.status(200).json({
      publicKey,
      privateKey,
    });
  } catch (error) {
    console.error('Error generating ECC keys:', error);
    res.status(500).json({ message: 'Server error while generating keys.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

