import React from "react";
import "./Letters.css";
import CurrentDateTime from "./CurrentDateTime";
import { format } from "date-fns";

const NoClassTemplate = ({
  date,
  announcementTitle,
  announcementDate,
  reason,
  additionalInfo,
  senderName,
  selectedPosition,
  signatureImage,
  selectedName,
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

  const formattedDate = date ? format(new Date(date), "MMMM d, yyyy") : "";

  return (
		<div className="print-container">
			<img src={'./template-new.png'} className="img-temp" />

			<p className="date">
				<CurrentDateTime />
			</p>
			<p className="announcement-title text-center bold">{announcementTitle}</p>

			<p className="mt-3">
				We would like to inform all students and faculty members that there will
				be no classes on {formattedDate}.
			</p>
			<p className="mt-3">
				The reason for the cancellation is due to {reason}.
			</p>
			{additionalInfo && <p className="mt-3">{additionalInfo}</p>}
			<p className="mt-3">
				Please be guided accordingly. We apologize for any inconvenience this
				may cause and thank you for your understanding.
			</p>

			<p className="mt-3">Sincerely,</p>
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
					{senderName && <p className="bold">{senderName}</p>}
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
	)
};

export default NoClassTemplate;
