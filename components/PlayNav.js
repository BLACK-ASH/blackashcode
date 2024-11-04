import piston from '@/axios/piston'
import { version } from 'ace-builds/src-noconflict/ace'
import React, { useEffect, useState } from 'react'

const PlayNav = ({ language, setLanguage, version, setVersion, theme, setTheme, fontSize, setFontSize }) => {
  const [languageData, setLanguageData] = useState([])
  useEffect(() => {
    const getData = () => {
      piston.get("/runtimes").then((res) => {
        setLanguageData(res.data)
      })
    }
    getData()
  }, [])

  return (
    <nav className='flex items-center mb-2 justify-between p-3 shadow rounded-md'>
      <p className='text-2xl text-primary'>Playground</p>
      <div className='dropdown'>
        <div tabIndex={0} role="button" className="select items-center select-bordered">{language}</div>
        <ul tabIndex={0} className="dropdown-content h-36 overflow-auto bg-base-100 rounded-box z-[20] w-52 p-2 shadow">
          {languageData?.map((item, index) => (
            <div className={`text-sm p-2 bg-base-100 rounded-md ${language === item.language && version === item.version ? "bg-base-200" : ""}`} key={index}>
              <button onClick={() => {
                setLanguage(item.language)
                setVersion(item.version)
              }}>
                <span className='font-bold'>{item.language} </span>
                <span>v{item.version}</span>
                {item.runtime && <p className='text-start'>{item.runtime}</p>}

              </button>
            </div>
          ))}
        </ul>
      </div>
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
  )
}

export default PlayNav