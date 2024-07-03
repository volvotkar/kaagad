import { useState } from "react";
import PrivacyDialog from "./PrivacyDialog";
import AboutDialog from "./AboutDialog";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const Dialog = () => {
    const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
    const [showAboutDialog, setShowAboutDialog] = useState(false);

    const handlePrivacyDialog = () => {
         setShowPrivacyDialog(!showPrivacyDialog);
    };

    const handleAboutDialog = () => {
         setShowAboutDialog(!showAboutDialog);
    };

    return (
    <>
    { showPrivacyDialog ?(<PrivacyDialog />) :
        showAboutDialog ? (<AboutDialog />) :
        (<div className="bg-slate-900 max-w-[400px] text-slate-50 rounded-xl z-10 absolute flex flex-col items-center p-4 px-6 gap-4">
       <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <p className="text-xl font-semibold">कागद</p>
            <p className="text-sm font-medium"> [kaa-<span className="italic">gad</span>]</p>
        </div>
        <div className="flex w-full items-center justify-between">
            <p className="text-sm font-medium ">paper <span className="italic">(orig. konkani)</span></p>
            <p className="italic overline text-sm font-medium">noun</p>
        </div>
       </div>
         
       <div className="flex flex-col w-full items-center gap-4">
            <p className="w-full text-sm font-medium">a lightweight note taking app for those who love less and seek more.</p>
            <div className="w-full flex justify-between gap-3 text-sm text-center">
                <div className="bg-slate-700 w-full text-slate-300 rounded-md px-2 py-1 cursor-pointer" onClick={handlePrivacyDialog}>privacy</div>
                <div className="bg-slate-700 w-full text-slate-300 rounded-md px-2 py-1 cursor-pointer" onClick={handleAboutDialog}>about</div>
                <a className="bg-slate-700 w-full flex items-center justify-center gap-1 text-slate-300 rounded-md px-2 py-1 cursor-pointer" href="https://github.com/volvotkar/kaagad/" target="_blank">github <ArrowUpRightIcon className="w-4"/></a>
            </div>
        </div>
        <div className="flex gap-2 w-full">
        <div className="w-full flex text-xs justify-center text-center items-center text-slate-300 bg-slate-700 rounded-md px-2 ">
            <p>hit {window.innerWidth < 768 ? "toggle info" : "cmd/ctrl + k"} to return</p>
        </div>
        <svg width="36" height="36" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" width="64" height="64" rx="10" fill="#F8FAFC"/>
        <path d="M44.6553 43.736H44.2713L40.9593 40.904C42.0793 39.592 43.0233 38.168 43.7913 36.632C44.5913 35.096 44.9913 33.8 44.9913 32.744C44.9913 31.912 44.7513 31.288 44.2713 30.872C43.8233 30.424 43.2953 30.2 42.6873 30.2C41.9833 30.2 41.1993 30.424 40.3353 30.872C39.5033 31.288 38.6553 31.8 37.7913 32.408C36.9593 33.016 36.1753 33.608 35.4393 34.184L35.4873 47.48H35.0073L31.1673 44.888L31.2153 37.256C30.1913 38.024 29.3273 38.632 28.6233 39.08C27.9193 39.528 27.2473 39.864 26.6073 40.088C25.9993 40.28 25.2793 40.376 24.4473 40.376C22.8153 40.376 21.3433 39.944 20.0313 39.08C18.7513 38.216 17.7273 37.128 16.9593 35.816C16.2233 34.472 15.8553 33.144 15.8553 31.832C15.8553 30.456 16.2233 29.272 16.9593 28.28C17.6953 27.288 18.6393 26.52 19.7913 25.976C20.9753 25.432 22.1913 25.16 23.4393 25.16C25.0713 25.16 26.5433 25.592 27.8553 26.456C29.1993 27.288 30.3513 28.296 31.3113 29.48L31.4073 20.84H13.9833L12.3513 17.72V17.24H50.0313L51.6633 20.36V20.84H35.3433L35.3913 29.336C36.3833 28.632 37.3753 28.008 38.3673 27.464C39.3913 26.888 40.3033 26.6 41.1033 26.6C41.6793 26.6 42.3513 26.792 43.1193 27.176C43.9193 27.528 44.6873 28.072 45.4233 28.808C46.1913 29.544 46.8153 30.456 47.2953 31.544C47.8073 32.632 48.0633 33.896 48.0633 35.336C48.0633 36.808 47.7593 38.2 47.1513 39.512C46.5753 40.824 45.7433 42.232 44.6553 43.736ZM31.2633 32.456V32.12C30.4313 31.224 29.4393 30.456 28.2873 29.816C27.1353 29.176 25.9353 28.856 24.6873 28.856C23.3113 28.856 22.0633 29.272 20.9433 30.104C19.8553 30.936 19.3113 32.136 19.3113 33.704C19.3113 34.92 19.6313 35.832 20.2713 36.44C20.9113 37.016 21.6633 37.304 22.5273 37.304C23.3593 37.304 24.2713 37.064 25.2633 36.584C26.2553 36.072 27.2633 35.448 28.2873 34.712C29.3113 33.944 30.3033 33.192 31.2633 32.456Z" fill="#0F172A"/>
        <circle cx="54" cy="44" r="5" fill="#7EBAFF"/>
        </svg>
        </div>
    </div>) }
    </>
  )
}

export default Dialog