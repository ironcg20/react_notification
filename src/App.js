import React, { useState } from "react";

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const requestNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted");
        closeDialog();
      }
    });
  };

  return (
    <div className='App'>
      <p>Your app content...</p>
      <button onClick={openDialog}>Select Notification State</button>
      {showDialog && (
        <div className='notification-dialog'>
          <h2>Select Notification State</h2>
          <p>Choose your notification settings:</p>
          <button onClick={requestNotificationPermission}>
            Request Permission
          </button>
          {/* You can add more options or instructions for managing settings */}
          <button onClick={closeDialog}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
