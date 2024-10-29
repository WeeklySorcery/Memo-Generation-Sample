import React from "react";

const InvitationTemplate = ({ name, section }) => (
  <div className="print-container">
    <h2>Invitation</h2>
    <p>Name: {name}</p>
    <p>Section: {section}</p>
    <p>Dear {name},</p>
    <p>We cordially invite you to [event] happening on [date] at [location].</p>
    <p>We hope to see you there!</p>
  </div>
);

export default InvitationTemplate;
