import React, { useState } from 'react';

const KeyGeneration = () => {
  const [eccKeys, setEccKeys] = useState(null);
  // const [homomorphicKeys, setHomomorphicKeys] = useState(null); // Placeholder for future, commented out to remove warning
  const [isEccVisible, setIsEccVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to handle ECC key generation
  const handleGenerateEccKeys = async () => {
    setLoading(true);
    setError('');
    setEccKeys(null);
    setIsEccVisible(false);

    try {
      // By default, fetch makes a GET request, so this is correct.
      const response = await fetch('/api/keys/ecc'); 
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      const data = await response.json();
      setEccKeys(data);
      setIsEccVisible(true);
    } catch (err) {
      setError('Failed to generate keys. Is the backend server running?');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to copy key to clipboard
  const copyToClipboard = (key) => {
    navigator.clipboard.writeText(key);
  };


  return (
    <div className="key-gen-container">
      <h1>Key Generation Dashboard</h1>
      <p className="page-description">
        Generate cryptographic keys for the supported security models. Once generated, you can copy them for use in the encryption and decryption dashboards.
      </p>

      {/* --- ECC Keys Section --- */}
      <div className="key-section">
        <h2>Elliptic Curve Cryptography (ECC)</h2>
        <p>Generates a highly secure and efficient public/private key pair using the 'secp256k1' curve.</p>
        <button onClick={handleGenerateEccKeys} disabled={loading} className="generate-btn">
          {loading ? 'Generating...' : 'Generate ECC Keys'}
        </button>

        {error && <p className="error-message">{error}</p>}

        {isEccVisible && eccKeys && (
          <div className="key-display-area slide-down">
            <h3>Your ECC Keys</h3>
            <div className="key-pair">
              <label>Public Key</label>
              <div className="key-wrapper">
                <textarea readOnly value={eccKeys.publicKey} rows="3" />
                <button onClick={() => copyToClipboard(eccKeys.publicKey)} className="copy-btn">Copy</button>
              </div>
            </div>
            <div className="key-pair">
              <label>Private Key</label>
               <div className="key-wrapper">
                <textarea readOnly value={eccKeys.privateKey} rows="2" />
                <button onClick={() => copyToClipboard(eccKeys.privateKey)} className="copy-btn">Copy</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- Homomorphic Keys Section (Placeholder) --- */}
      <div className="key-section">
        <h2>Homomorphic Encryption</h2>
        <p>This section will allow for the generation of keys for homomorphic encryption schemes (coming soon).</p>
        <button className="generate-btn" disabled>Generate Homomorphic Keys</button>
      </div>
    </div>
  );
};

export default KeyGeneration;

