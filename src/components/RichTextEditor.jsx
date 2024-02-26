/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

const config = {
  disablePlugins: [
    "about",
    "print",
    "preview",
    "fullsize",
    "image",
    "image-processor",
    "image-properties",
    "search",
    "color",
    "justify",
    "indent",
    "symbols",
    "link",
    "table",
    "hr",
    "copyformat",
    "source",
    "powered-by-jodit",
    "clipboard",
    "spellcheck",
    "speech-recognize",
    "video",
    "file",
    "class-span",
    "line-height",
    "format-block",
    "font",
    "clean-html"
  ],
  sizeLG : "500"
};

const RichTextEditor = ({ value, setValue }) => {
  // Menambahkan parameter config
  const editor = useRef(null);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <JoditEditor
      ref={editor}
      value={value}
      onChange={(content) => setValue(content)}
      config={config} // Menggunakan parameter config yang diterima
    />
  );
};

export default RichTextEditor;
