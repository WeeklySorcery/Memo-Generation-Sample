import React from "react";
import "./Letters.css";
import CurrentDateTime from "./CurrentDateTime";
import { format } from "date-fns";

const UtilizationRequestTemplate = ({
  recipientName,
  recipientPosition,
  recipientDepartment,
  room,
  meetingTitle,
  meetingDate,
  meetingAttendees,
  foodRequest,
  agenda,
  signatureImage,
  selectedName,
  selectedPosition,
  selectedName2,
  signatureImage2,
  selectedPosition2,
}) => {
  const capitalizedSelectedName = selectedName
    ? selectedName.toUpperCase()
    : "";
  const formattedDate = meetingDate
    ? format(new Date(meetingDate), "MMMM d, yyyy")
    : "";
  const capitalizedSelectedName2 = selectedName2
    ? selectedName2.toUpperCase()
    : "";

  return (
    <div className="print-container">
      <img src={"./template-new.png"} className="img-temp" />

      <p className="date">
        <CurrentDateTime />
      </p>
      <p className="bold">{recipientName}</p>
      <p>{recipientPosition}</p>
      <p>{recipientDepartment}</p>
      <p className="mt-3">Dear {recipientName},</p>

      <p className="mt-2">Greetings!</p>

      <p className="mt-4">
        This is to request the utilization of {room} to hold a meeting for{" "}
        {meetingTitle} on {formattedDate}, which will be attended by{" "}
        {meetingAttendees}.
      </p>
      <p className="mt-3">
        {foodRequest && (
          <p>
            Additionally, we would also request for {foodRequest} for the
            meeting.
          </p>
        )}
        The agenda of the meeting will be {agenda}.
      </p>
      <p className="mt-3">
        We look forward to a positive response from your good office, and we
        thank you in advance for your assistance.
      </p>

      <p className="mt-3">Sincerely,</p>
      <div className="flex gap-6 ">
        <div className="signature- mt-5">
          <p>Prepared by:</p>
          {signatureImage && (
            <img
              src={signatureImage}
              alt="Signature"
              className="signature-image w-52"
            />
          )}
          {capitalizedSelectedName && (
            <p className="bold">{capitalizedSelectedName}</p>
          )}
          <p>{selectedPosition}</p>
        </div>
        {selectedName2 && (
          <div className="signature-container mt-5">
            <p>Approved/Noted by:</p>
            {signatureImage2 && (
              <img
                src={signatureImage2}
                alt="Signature"
                className="signature-image w-52"
              />
            )}

            {capitalizedSelectedName2 && (
              <p className="bold">{capitalizedSelectedName2}</p>
            )}
            <p className="">{selectedPosition2}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UtilizationRequestTemplate;
