import { useState } from "react";
import Dialog from "./Dialog";

const AboutDialog = () => {
    const [showMainDialog, setShowMainDialog] = useState(false);

    const handleMainDialog = () => {
        setShowMainDialog(!showMainDialog);
    };

    return (
        <>
            {showMainDialog ? (
                <Dialog />
            ) : (
                <div className="bg-slate-900 max-w-[400px] text-slate-50 rounded-xl z-20 absolute flex flex-col items-center p-4 px-6 gap-4">
                    <div className="flex flex-col w-full items-center gap-2">
                        <p className="w-full text-md font-semibold">About</p>
                        <p className="w-full text-sm font-medium">kaagad is a tiny project inspired by <a target="_blank" className="decoration-none hover:underline underline-offset-4" href="https://typehere.app">typhere</a>. built by <a target="_blank" className="decoration-none hover:underline underline-offset-4" href="https://github.com/volvotkar">priyanshu</a> using <a target="_blank" className="decoration-none hover:underline underline-offset-4" href="https://react.dev">react</a>, <a target="_blank" className="decoration-none hover:underline underline-offset-4" href="https://vitejs.dev">vite</a>, and <a target="_blank" className="decoration-none hover:underline underline-offset-4" href="https://tailwindcss.com">tailwindcss</a></p>
                        <p className="w-full text-sm font-medium">i love minimal note-taking apps and wanted to create a minimalistic textarea that <span className="italic">just</span> holds on to my stuff.</p>
                        <p className="w-full text-sm font-medium">p.s. i have a similar app but for markdown notes - <a target="_blank" className="decoration-none hover:underline underline-offset-4" href="https://lotusmd.netlify.app">lotus</a>. try it out too!</p>
                        <div className="flex w-full justify-end">
                            <p onClick={handleMainDialog} className="cursor-pointer px-2 py-1 text-center bg-slate-700 rounded-md text-slate-300 text-sm font-medium">back</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutDialog;
