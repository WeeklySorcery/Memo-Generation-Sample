import React from "react";
import ExcuseLetterTemplate from "./Letters/ExcuseLetterTemplate";
import InvitationTemplate from "./Letters/InvitationTemplate";
import ExcuseLetterMultipleTemplate from "./Letters/ExcuseLetterMultipleTemplate";
import UtilizationRequestTemplate from "./Letters/UtilizationRequestTemplate";
import OverTimeTemplate from "./Letters/OvertimeTemplate";
import NoClassTemplate from "./Letters/NoClassTemplate";
import BlankTemplate from "./Letters/BlankTemplate.jsx";
import RoomUsageTemplate from "./Letters/RoomUsageTemplate.jsx";

class ComponentToPrint extends React.Component {
  handlePrint = () => {
    window.print();
  };

  renderTemplate() {
    const {
      template,
      name,
      section,
      date,
      event,
      names,
      selectedName,
      selectedPosition,
      signatureImage,
      recipientName,
      room,
      recipientPosition,
      recipientDepartment,
      meetingTitle,
      meetingDate,
      meetingAttendees,
      foodRequest,
      agenda,
      senderName,
      senderTitle,
      occupation,
      overtimePurpose,
      startDate,
      endDate,
      announcementTitle,
      reason,
      additionalInfo,
      firstParagraph,
      secondParagraph,
      thirdParagraph,
      datesOfRequest,
      nameRequest,
      positionRequest,
      selectedName2,
      signatureImage2,
      selectedPosition2,
    } = this.props;

    switch (template) {
      case "excuse":
        return (
          <ExcuseLetterTemplate
            name={name}
            section={section}
            date={date}
            event={event}
            selectedName={selectedName}
            signatureImage={signatureImage}
            selectedPosition={selectedPosition}
            selectedName2={selectedName2}
            signatureImage2={signatureImage2}
            selectedPosition2={selectedPosition2}
          />
        );
      case "excuseMultiple":
        return (
          <ExcuseLetterMultipleTemplate
            names={names}
            date={date}
            event={event}
            selectedName={selectedName}
            signatureImage={signatureImage}
            selectedPosition={selectedPosition}
            selectedName2={selectedName2}
            signatureImage2={signatureImage2}
            selectedPosition2={selectedPosition2}
          />
        );
      case "invitation":
        return <InvitationTemplate name={name} />;
      case "utilizationRequest":
        return (
          <UtilizationRequestTemplate
            recipientName={recipientName}
            room={room}
            recipientPosition={recipientPosition}
            recipientDepartment={recipientDepartment}
            date={date}
            meetingTitle={meetingTitle}
            meetingDate={meetingDate}
            meetingAttendees={meetingAttendees}
            foodRequest={foodRequest}
            agenda={agenda}
            selectedName={selectedName}
            selectedPosition={selectedPosition}
            signatureImage={signatureImage}
            selectedName2={selectedName2}
            signatureImage2={signatureImage2}
            selectedPosition2={selectedPosition2}
          />
        );
      case "overtimeRequest":
        return (
          <OverTimeTemplate
            recipientName={recipientName}
            recipientPosition={recipientPosition}
            recipientDepartment={recipientDepartment}
            date={date}
            occupation={occupation}
            overtimePurpose={overtimePurpose}
            startDate={startDate}
            endDate={endDate}
            selectedName={selectedName}
            selectedPosition={selectedPosition}
            signatureImage={signatureImage}
            selectedName2={selectedName2}
            signatureImage2={signatureImage2}
            selectedPosition2={selectedPosition2}
          />
        );
      case "noClasses":
        return (
          <NoClassTemplate
            date={date}
            announcementTitle={announcementTitle}
            reason={reason}
            additionalInfo={additionalInfo}
            selectedName={selectedName}
            selectedPosition={selectedPosition}
            signatureImage={signatureImage}
            selectedName2={selectedName2}
            signatureImage2={signatureImage2}
            selectedPosition2={selectedPosition2}
          />
        );
      case "blank":
        return (
          <BlankTemplate
            announcementTitle={announcementTitle}
            firstParagraph={firstParagraph}
            secondParagraph={secondParagraph}
            thirdParagraph={thirdParagraph}
            selectedName={selectedName}
            selectedPosition={selectedPosition}
            signatureImage={signatureImage}
            selectedName2={selectedName2}
            signatureImage2={signatureImage2}
            selectedPosition2={selectedPosition2}
          />
        );
      case "roomRequest":
        return (
          <RoomUsageTemplate
            room={room}
            reason={reason}
            names={names}
            nameRequest={nameRequest}
            positionRequest={positionRequest}
            selectedName={selectedName}
            selectedPosition={selectedPosition}
            signatureImage={signatureImage}
            selectedName2={selectedName2}
            signatureImage2={signatureImage2}
            selectedPosition2={selectedPosition2}
          />
        );
      // Add more cases for other templates if needed
      default:
        return null;
    }
  }

  render() {
    return <div>{this.renderTemplate()}</div>;
  }
}

export default ComponentToPrint;
