import React from "react";

const LowerLinks = () => {
  return (
    <div className="flex flex-row items-start gap-24 text-white">
      <ul>
        <h4>Quick Links</h4>
        <li>About Us</li>
        <li>Book a Flight</li>
        <li>Contact Us</li>
      </ul>

      <ul>
        <h4>Community Links</h4>
        <li>Forum</li>
        <li>Events</li>
        <li>Feedbacks</li>
      </ul>

      <ul>
        <h4>Customer Care</h4>
        <li>FAQs</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Ticket Prices</li>
        <li>Personal Support</li>
      </ul>
    </div>
    
  );
};

export default LowerLinks;
