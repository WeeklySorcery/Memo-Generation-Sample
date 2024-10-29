import { useRef, useState, useEffect } from "react";
import ComponentToPrint from "./ComponentToPrint";
import templateData from "./templateData";
import ArrayInput from "./ArrayInput";
import "./MemoMain.css";
import signatures from "./signatures.json";

const MemoMain = () => {
  const componentRef = useRef();
  const [template, setTemplate] = useState("excuse");
  const [formData, setFormData] = useState({
    name: "",
    section: "",
  });
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState(""); // Initialize selectedName state
  const [selectedPosition, setSelectedPosition] = useState(""); // Initialize selectedName state
  const [allNames, setAllNames] = useState([]);
  const [signatureImage, setSignatureImage] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  // State for the second signature
  const [selectedName2, setSelectedName2] = useState("");
  const [selectedPosition2, setSelectedPosition2] = useState("");
  const [signatureImage2, setSignatureImage2] = useState("");
  const [isSecondSignatureEnabled, setIsSecondSignatureEnabled] =
    useState(false); // Add this state

  const fetchAllNames = () => {
    const namesArray = signatures;
    setAllNames(namesArray);
    if (namesArray.length > 0) {
      setSelectedName(namesArray[0].name);
      setSelectedPosition(namesArray[0].position);
      setSignatureImage(namesArray[0].signature_image);
    }
  };

  useEffect(() => {
    fetchAllNames();
  }, []);

  const handleNameChange = (e, setName, setPosition, setImage) => {
    const { id } = JSON.parse(e.target.value);
    const selectedNameData = allNames.find((nameData) => nameData.id === id);
    if (selectedNameData) {
      setName(selectedNameData.name);
      setPosition(selectedNameData.position);
      setImage(selectedNameData.signature_image);
    }
  };

  const handleGenerateClick = () => {
    componentRef.current.handlePrint();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the element is sticking to the top
      const divElement = document.querySelector(".headr");
      const boundingBox = divElement.getBoundingClientRect();
      setIsSticky(boundingBox.top <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderInputs = () => {
    return templateData[template].inputs.map((input) => (
      <div key={input.name} className="mb-4">
        <label className="block text-sm font-medium text-gray-600 dark:text-slate-400 ">
          {input.label}:
          {input.isArray ? (
            <ArrayInput
              name={input.name}
              onAdd={(value) => handleArrayInput(input.name, value)}
            />
          ) : input.isDate ? (
            <input
              type="date"
              name={input.name}
              value={formData[input.name] || ""}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full dark:bg-slate-700 dark:border-slate-300/20"
            />
          ) : (
            <input
              type="text"
              name={input.name}
              value={formData[input.name] || ""}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full dark:bg-slate-700 dark:border-slate-300/20 input-style"
            />
          )}
        </label>
      </div>
    ));
  };

  const handleArrayInput = (name, value) => {
    setNames((prevNames) => [...prevNames, value]);
  };

  return (
    <div>
      <div
        className={`mt-2 px-4 py-4 justify-between items-center inset-0 sticky scroll-pt-4 z-10 headr ${
          isSticky
            ? "bg-white border-b-2 border-slate-300 dark:border-slate-300/10 dark:bg-slate-900"
            : ""
        }`}
      >
        <header className="font-bold ml-4 lg:text-2xl sm:text-xl">
          Memorandum and Letter Generation
        </header>
      </div>
      <div className="memoMain grid sm:grid-cols-2 lg:grid-cols-2 min-h-screen gap-3">
        <div className="w-[80%] ml-6">
          <div className="">
            <span className="mr-3 font-medium">Template:</span>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="selection dark:bg-slate-800 dark:border-slate-300/20"
            >
              <option value="excuse">Excuse Letter</option>
              <option value="excuseMultiple">Excuse Letters (Multiple)</option>
              {/* <option value="invitation">Invitation</option> */}
              <option value="utilizationRequest">Utility Request</option>
              <option value="roomRequest">Room Request</option>
              <option value="overtimeRequest">Staff Overtime Request</option>
              <option value="noClasses">No Classes Memo</option>
              <option value="blank">Custom Memo/Letter</option>
            </select>
          </div>
          <div>
            <span className="mr-3 font-medium">Signature Template:</span>
            <select
              value={selectedName}
              onChange={(e) =>
                handleNameChange(
                  e,
                  setSelectedName,
                  setSelectedPosition,
                  setSignatureImage
                )
              }
              className="selection dark:bg-slate-800 dark:border-slate-300/20"
            >
              <option value="">Select Signature Template</option>
              {allNames.map(({ id, name, signatureImage, position }) => (
                <option
                  key={id}
                  value={JSON.stringify({ id, name, signatureImage, position })}
                >
                  {name}
                </option>
              ))}
            </select>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isSecondSignatureEnabled}
                  onChange={() =>
                    setIsSecondSignatureEnabled(!isSecondSignatureEnabled)
                  }
                />
                <span className="ml-2">Enable Second Signature</span>
              </label>
            </div>

            {isSecondSignatureEnabled && (
              <div>
                <select
                  value={selectedName2}
                  onChange={(e) =>
                    handleNameChange(
                      e,
                      setSelectedName2,
                      setSelectedPosition2,
                      setSignatureImage2
                    )
                  }
                  className="selection dark:bg-slate-800 dark:border-slate-300/20"
                >
                  <option value="">Select Second Signature Template</option>
                  {allNames.map(({ id, name, signatureImage, position }) => (
                    <option
                      key={id}
                      value={JSON.stringify({
                        id,
                        name,
                        signatureImage,
                        position,
                      })}
                    >
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="mt-3">{renderInputs()}</div>
          <div className="flex justify-end">
            <button
              className="generate-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleGenerateClick}
            >
              Generate
            </button>
          </div>
        </div>
        <div className=" w-[90%] justify-self-center h-fit">
          Preview:
          <div className="color bg-white dark:bg-slate-300">
            <div id="print-content">
              <ComponentToPrint
                ref={componentRef}
                template={template}
                {...formData}
                names={names}
                onAddName={handleArrayInput}
                selectedName={selectedName} // Pass selectedName to ComponentToPrint
                signatureImage={signatureImage}
                selectedPosition={selectedPosition}
                selectedName2={isSecondSignatureEnabled ? selectedName2 : ""}
                signatureImage2={
                  isSecondSignatureEnabled ? signatureImage2 : ""
                }
                selectedPosition2={
                  isSecondSignatureEnabled ? selectedPosition2 : ""
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoMain;
