/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import JoditEditor from "jodit-react";

import { Jodit } from "jodit-react";

const config = {
  buttons: ["bold", "italic", "underline", "ol", "ul"],
};

const RichTextEditor = ({ setValue }) => {
  // Menambahkan parameter config
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      onChange={(content) => setValue(content)}
      config={config} // Menggunakan parameter config yang diterima
    />
  );
};

export default RichTextEditor;
