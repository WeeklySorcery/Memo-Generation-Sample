import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "./PrintComponent.css"; // Import CSS file for styling

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="print-container">
        <h2>Name: {this.props.name}</h2>
        <h2>Section: {this.props.section}</h2>
        <h2>
          Combined xxText: {this.props.name} - {this.props.section}
        </h2>
      </div>
    );
  }
}

const PrintComponent = () => {
  const componentRef = useRef();

  const [name, setName] = React.useState("");
  const [section, setSection] = React.useState("");

  const handlePrint = () => {
    // You can add validation or further processing here before printing
    // For simplicity, I'm just printing the combined text directly
    window.print();
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={section}
        onChange={(e) => setSection(e.target.value)}
        placeholder="Enter Section"
      />
      <ReactToPrint
        trigger={() => <button onClick={handlePrint}>Gxenerate</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} name={name} section={section} />
    </div>
  );
};

export default PrintComponent;
