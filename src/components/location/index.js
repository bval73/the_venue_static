import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14059.353229430319!2d-82.1874487!3d28.242587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b19902b4e914b30!2sCommandough&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1583859878111!5m2!1sen!2sus" 
        width="100%" 
        height="500" 
        frameBorder="0" 
        allowFullScreen="" 
        aria-hidden="false" 
        tabindex="0">
      </iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;