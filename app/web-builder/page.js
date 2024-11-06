"use client";
import React, { useEffect, useState } from 'react'
import WebBuilderEditor from '@/components/WebBuilderEditor'
import Divider from '@/components/Divider';

const page = () => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [theme, setTheme] = useState("monokai");
    const [fontSize, setFontSize] = useState(14);
    const [currentLanguage, setCurrentLanguage] = useState("html");
    const [code, setCode] = useState(
        `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
            </html>
            `
    )


    // Load settings from localStorage on the client side
    useEffect(() => {
        if (typeof window !== "undefined") {

            const storedTheme = localStorage.getItem("editorTheme");
            const storedFontSize = localStorage.getItem("fontSize");
            const storedHTML = localStorage.getItem("html");
            const storedCSS = localStorage.getItem("css");
            const storedJS = localStorage.getItem("js");

            if (storedHTML) setHtml(storedHTML);
            if (storedCSS) setCss(storedCSS);
            if (storedJS) setJs(storedJS);
            if (storedTheme) setTheme(storedTheme);
            if (storedFontSize) setFontSize(parseInt(storedFontSize, 10));
        }
    }, []);

    // Save settings to localStorage on changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("editorTheme", theme);
            localStorage.setItem("fontSize", fontSize);
        }
    }, [theme, fontSize]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCode(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
            </html>
            `);
            localStorage.setItem('html', html);
            localStorage.setItem('css', css);
            localStorage.setItem('js', js);
        }, 500);
        return () => clearTimeout(timer);

    }, [html, css, js]);

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
    }

    return (
        <div className='p-2 z-0'>
            <div className='shadow-md'>
                <nav className='flex justify-between items-center p-3'>
                    <p className='text-2xl text-primary'>Web Builder</p>
                    <button className="btn " onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <svg className='w-6 h-6 fill-current' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"></path>
                        </svg>
                    </button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className=" absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Setting</h3>
                            <div className="py-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Theme</span>
                                    </label>
                                    <select className="select select-bordered" value={theme} onChange={(e) => setTheme(e.target.value)}>
                                        <option className={`${theme === "dracula" ? "bg-base-200" : ""}`} value="dracula">Dracula</option>
                                        <option className={`${theme === "monokai" ? "bg-base-200" : ""}`} value="monokai">Monokai</option>
                                        <option className={`${theme === "solarized_light" ? "bg-base-200" : ""}`} value="solarized_light">Solarized Light</option>
                                        <option className={`${theme === "xcode" ? "bg-base-200" : ""}`} value="xcode">Xcode</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Font Size</span>
                                    </label>
                                    <select className="select select-bordered" value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
                                        <option className={`${fontSize === "14" ? "bg-base-200" : ""}`} value="14">14</option>
                                        <option className={`${fontSize === "16" ? "bg-base-200" : ""}`} value="16">16</option>
                                        <option className={`${fontSize === "18" ? "bg-base-200" : ""}`} value="18">18</option>
                                        <option className={`${fontSize === "20" ? "bg-base-200" : ""}`} value="20">20</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </nav>
                <div className='flex  justify-around items-center my-2 p-3'>
                    <div className={` ${currentLanguage === "html" ? "text-secondary" : ""} cursor-pointer `} onClick={() => changeLanguage("html")}>
                        html
                    </div>
                    <div className={` ${currentLanguage === "css" ? "text-secondary " : ""} cursor-pointer`} onClick={() => changeLanguage("css")}>
                        CSS
                    </div>
                    <div className={` ${currentLanguage === "js" ? "text-secondary " : ""} cursor-pointer `} onClick={() => changeLanguage("js")}>
                        JavaScript
                    </div>
                </div>
            </div>

            <WebBuilderEditor
                theme={theme}
                fontSize={fontSize}
                html={html}
                setHtml={setHtml}
                css={css}
                setCss={setCss}
                js={js}
                setJs={setJs}
                currentLanguage={currentLanguage}
            />
            <Divider />
            <p className='text-2xl font-bold'>Preview</p>
            <div className='w-full min-h-screen p-2 border border-base-300'>
                <iframe srcDoc={code} width="100%" height="100%" ></iframe>
            </div>
        </div>
    )
}

export default page