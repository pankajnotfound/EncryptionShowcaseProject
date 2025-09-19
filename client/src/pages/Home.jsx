import React from 'react';

const Home = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Secure Communication in Industry 4.0</h2>
      <p>
        Welcome to the Secure Communication Dashboard. This project demonstrates advanced cryptographic techniques to ensure data security and privacy in modern industrial applications.
      </p>
      <br/>
      <h4>Security Models Used:</h4>
      <ul>
        <li><strong>Elliptic Curve Cryptography (ECC):</strong> A powerful public-key cryptography approach that provides strong security with smaller key sizes compared to traditional RSA.</li>
        <li><strong>Homomorphic Encryption:</strong> A revolutionary form of encryption that allows for computation on ciphertexts, generating an encrypted result which, when decrypted, matches the result of the operations as if they had been performed on the plaintext.</li>
      </ul>
    </div>
  );
};

export default Home;
