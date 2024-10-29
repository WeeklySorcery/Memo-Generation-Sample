import React from "react";
import "./Letters.css";
import CurrentDateTime from "./CurrentDateTime";

const BlankTemplate = ({
  announcementTitle,
  senderName,
  selectedPosition,
  signatureImage,
  selectedName,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
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
			<img src={'./template-new.png'} className="img-temp" />

			<p className="date">
				<CurrentDateTime />
			</p>
			<p className="announcement-title text-center bold">{announcementTitle}</p>

			<p className="mt-3">{firstParagraph}.</p>

			{secondParagraph && <p className="mt-3">{secondParagraph}</p>}
			{thirdParagraph && <p className="mt-3">{thirdParagraph}</p>}

			<p className="mt-3">Sincerely,</p>
      <div className="flex gap-6">
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
				<div className="signature-container ">
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

export default BlankTemplate;
