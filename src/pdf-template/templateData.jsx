// templateData.js
const templateData = {
  excuse: {
    inputs: [
      { name: "name", label: "Name of the student" },
      { name: "section", label: "Section" },
      { name: "event", label: "Event" },
      { name: "date", label: "Date to be excused", isDate: true },
    ],
  },

  excuseMultiple: {
    inputs: [
      { name: "students", label: "Name of the students", isArray: true },
      { name: "event", label: "Event" },
      { name: "date", label: "Date to be excused", isDate: true },
    ],
  },

  invitation: {
    inputs: [{ name: "name", label: "Name" }],
  },

  utilizationRequest: {
    inputs: [
      { name: "recipientName", label: "Recipient Name" },
      { name: "room", label: "Venue/Room" },
      { name: "recipientPosition", label: "Recipient Position" },
      { name: "recipientDepartment", label: "Recipient Department" },
      { name: "meetingTitle", label: "Meeting Title" },
      { name: "meetingDate", label: "Meeting Date", isDate: true },
      { name: "meetingAttendees", label: "Meeting Attendees" },
      { name: "foodRequest", label: "Food Request (Optional)" },
      { name: "agenda", label: "Agenda" },
    ],
  },

  overtimeRequest: {
    inputs: [
      { name: "recipientName", label: "Recipient Name" },
      { name: "recipientPosition", label: "Recipient Position" },
      { name: "recipientDepartment", label: "Recipient Department" },
      { name: "occupation", label: "Occupation" },
      { name: "overtimePurpose", label: "Overtime Purpose" },
      { name: "startDate", label: "Start Hour" },
      { name: "endDate", label: "End Hour" },
    ],
  },

  noClasses: {
    inputs: [
      { name: "announcementTitle", label: "Announcement Title" },
      { name: "date", label: "Date of no classes", isDate: true },
      { name: "reason", label: "Reason" },
      { name: "additionalInfo", label: "Additional Info (Optional)" },
    ],
  },

  blank: {
    inputs: [
      { name: "announcementTitle", label: "Announcement Title" },
      { name: "firstParagraph", label: "First Paragraph" },
      { name: "secondParagraph", label: "Second Paragraph (Optional)" },
      { name: "thirdParagraph", label: "Third Paragraph (Optional)" },
    ],
  },

  roomRequest: {
    inputs: [
      { name: "room", label: "Room Requested" },
      { name: "reason", label: "Reason for Request" },
      {
        name: "datesOfRequest",
        label: "Request Dates and time",
        isDate: true,
      },
      { name: "nameRequest", label: "Name of Requestor" },
      { name: "positionRequest", label: "Position of Requestor (optional)" },
    ],
  },
};

export default templateData;
