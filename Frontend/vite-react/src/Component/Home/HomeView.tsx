import React, { useEffect } from 'react';

const Home = () => {


    // useEffect(() => {
    //     // Fetch or update data when component mounts or when dependencies change
        
    //   }, [window && window.location]); // Add dependencies if needed

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of your application after logging in.</p>
      <button onClick={() => alert('Navigating to another feature...')}>
        Go to Feature
      </button>
    </div>
  );
};

export default Home;
