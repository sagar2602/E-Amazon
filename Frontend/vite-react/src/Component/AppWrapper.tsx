
// Wrapper component applying default gradient background
const AppWrapper = ({ children  }) => {
  return (
    <div style={{ background: '#e3b2b2',height: '100vh', marginTop : '20px'}}>
     {/* <div style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', height: '100vh' }}> */}

      {children}
    </div>
  );
};

export default AppWrapper;
