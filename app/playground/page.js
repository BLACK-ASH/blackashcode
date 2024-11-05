// pages/index.js
"use client";

import InputEditor from "@/components/InputEditor";
import Output from "@/components/Output";
import PlayNav from "@/components/PlayNav";
import { useState, useEffect } from "react";

export default function Home() {
    const [language, setLanguage] = useState("javascript");
    const [version, setVersion] = useState("18.15.0");
    const [code, setCode] = useState("");
    const [theme, setTheme] = useState("monokai");
    const [fontSize, setFontSize] = useState(14);


    // Load settings from localStorage on the client side
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("language");
            const storedVersion = localStorage.getItem("version");
            const storedCode = localStorage.getItem("editorCode");
            const storedTheme = localStorage.getItem("editorTheme");
            const storedFontSize = localStorage.getItem("fontSize");

            if (storedLanguage) setLanguage(storedLanguage);
            if (storedVersion) setVersion(storedVersion);
            if (storedCode) setCode(storedCode);
            if (storedTheme) setTheme(storedTheme);
            if (storedFontSize) setFontSize(parseInt(storedFontSize, 10));
        }
    }, []);

    // Save settings to localStorage on changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("editorTheme", theme);
            localStorage.setItem("fontSize", fontSize);
            localStorage.setItem("version", version);
            localStorage.setItem("language", language);
        }
    }, [theme, fontSize, version, language]);

    // Handle change in editor and store in localStorage
    const handleEditorChange = (newCode) => {
        setCode(newCode);
        if (typeof window !== "undefined") {
            localStorage.setItem("editorCode", newCode);
        }
    };

    return (
        <div className="p-4 min-h-screen">
            <PlayNav
                language={language}
                setLanguage={setLanguage}
                version={version}
                setVersion={setVersion}
                theme={theme}
                setTheme={setTheme}
                fontSize={fontSize}
                setFontSize={setFontSize}
            />
            <InputEditor
                language={language}
                theme={theme}
                code={code}
                fontSize={fontSize}
                onChange={handleEditorChange}
            />
            <Output
                code={code}
                version={version}
                language={language}
            />
        </div>
    );
}
