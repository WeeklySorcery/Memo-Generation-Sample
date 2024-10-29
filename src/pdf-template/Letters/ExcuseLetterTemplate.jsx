import React from "react";
import "./Letters.css";
import CurrentDateTime from "./CurrentDateTime";
import { format } from "date-fns";

const ExcuseLetterTemplate = ({
  name,
  section,
  date,
  event,
  selectedName,
  signatureImage,
  selectedPosition,
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

  // Format the date using date-fns
  const formattedDate = date ? format(new Date(date), "MMMM d, yyyy") : "";

  return (
    <div className="print-container">
      <img src={"./template-new.png"} className="img-temp" />

      <p className="date">
        <CurrentDateTime />
      </p>
      <p className="bold">To the Class Instructors/Professors.</p>
      <p className="marginNegative">Bulacan State University</p>
      <p>
        This is to certify that {name} of {section} will be attending the{" "}
        {event} on {formattedDate}, which is of significant importance to
        him/her. Due to his/her participation in this event, he/she will be
        unable to attend classes as scheduled.
      </p>
      <p className="undersigned">
        The undersigned appeals that {name} be excused in your class and be
        given a chance to take any activity or quiz that he may have missed.
      </p>
      <p className="thanks">Thank you very much..</p>
      <div className="flex gap-6 ">
        <div className="signature-container mt-5">
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
          <p className="">{selectedPosition}.</p>
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

export default ExcuseLetterTemplate;
