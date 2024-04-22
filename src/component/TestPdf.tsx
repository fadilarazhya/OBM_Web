// src/components/DocumentViewer.tsx

import React from "react";

const TestPdf: React.FC = () => {
  return (
    <div className="min-h-xl flex justify-start">
      {/* Your document viewer UI goes here */}
      <div className="w-screen p-4 bg-white">
        {/* Document content */}
        <iframe
          src="./docs/OBM_CERTIFICATE_ISO.pdf"
          className="w-full aspect-auto"
          title="Document Viewer"></iframe>
      </div>
    </div>
  );
};

export default TestPdf;
