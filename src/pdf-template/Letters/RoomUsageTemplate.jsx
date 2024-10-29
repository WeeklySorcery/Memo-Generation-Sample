import React from "react";
import "./Letters.css";
import CurrentDateTime from "./CurrentDateTime";

const RoomUsageTemplate = ({
  senderName,
  selectedPosition,
  signatureImage,
  selectedName,
  room,
  reason,
  names,
  nameRequest,
  positionRequest,
  selectedName2,
  signatureImage2,
  selectedPosition2,
}) => {
  const capitalizedSelectedName = selectedName
    ? selectedName.toUpperCase()
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

      <p className="mt-3 bold">Notice for the users of {room}:</p>

      <p className="mt-3">
        The {room} will be used for {reason} on the following dates and time:
      </p>

      <div className="mt-3">
        {names && names.length > 0 && (
          <ul className="ul">
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-3">
        We appeal for your understanding in temporarily using the said room.
      </p>
      <p className="mt-3">Thank you very much.</p>

      <p className="mt-3">Sincerely,</p>

      <p className="bold mt-3">{nameRequest}</p>
      {positionRequest && <p>{positionRequest}</p>}

      {/* <p className="mt-3">Noted:</p> */}
      <div className="flex gap-6 ">
        <div className="signature-container ">
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
          {senderName && <p className="bold">{senderName}</p>}
          <p>{selectedPosition}</p>
        </div>
        {selectedName2 && (
          <div className="signature-container">
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

export default RoomUsageTemplate;
