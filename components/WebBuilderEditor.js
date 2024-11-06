"use client"; // Make sure this is at the top

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import AceEditor to prevent SSR issues
const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace");

    // Import languages
    await import("ace-builds/src-noconflict/mode-javascript");
    await import("ace-builds/src-noconflict/mode-html");
    await import("ace-builds/src-noconflict/mode-css");

    // Import themes
    await import("ace-builds/src-noconflict/theme-xcode");
    await import("ace-builds/src-noconflict/theme-solarized_light");
    await import("ace-builds/src-noconflict/theme-dracula");
    await import("ace-builds/src-noconflict/theme-monokai");

    // Import language tools for autocomplete
    await import("ace-builds/src-noconflict/ext-language_tools");

    // Import snippets
    await import("ace-builds/src-noconflict/snippets/javascript");
    await import("ace-builds/src-noconflict/snippets/html");
    await import("ace-builds/src-noconflict/snippets/css");

    const aceBuilds = await import("ace-builds/src-noconflict/ace");
    aceBuilds.config.set("workerPath", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/");

    return ace;
  },
  { ssr: false }
);



const WebBuilderEditor = ({ theme, fontSize, html, setHtml, css, setCss, js, setJs, currentLanguage }) => {
  let code;
  let onChange;
  let mode="html";

  switch (currentLanguage) {
    case "html":
      mode = "html";
      code = html;
      onChange = setHtml;
      break;
    case "css":
      mode = "css";
      code = css;
      onChange = setCss;
      break;
    case "js":
      mode = "javascript";
      code = js;
      onChange = setJs;
      break;
  }

  return (
    <AceEditor
      className="rounded-md z-0"
      width="100%"
      mode={mode}
      theme={theme}
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        wrap: true,
      }}
      fontSize={fontSize}
      value={code}
    />
  );
};

export default WebBuilderEditor;
