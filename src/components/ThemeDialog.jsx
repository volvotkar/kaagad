import { useState } from "react";
import Dialog from "./Dialog";
import { useTheme } from "../context/ThemeContext";

const ThemeDialog = () => {
    const [showMainDialog, setShowMainDialog] = useState(false);
    const { themes, currentTheme, setCurrentTheme, theme } = useTheme();

    const handleMainDialog = () => {
        setShowMainDialog(!showMainDialog);
    };

    return (
        <>
            {showMainDialog ? (
                <Dialog />
            ) : (
                <div className={`${theme.dialogBg} max-w-[400px] ${theme.dialogTextColor} font-switzer rounded-xl z-20 absolute flex flex-col items-center p-4 px-6 gap-4`}>
                    <div className="flex flex-col w-full items-center gap-2">
                        <p className="w-full text-md font-semibold">Theme Settings</p>
                        <div className="w-full grid grid-cols-2 gap-2">
                            {Object.entries(themes).map(([key, themeOption]) => (
                                <div
                                    key={key}
                                    onClick={() => setCurrentTheme(key)}
                                    className={`cursor-pointer px-2 py-1 text-center ${
                                        currentTheme === key ? theme.buttonText + ' ' + theme.buttonBg + ' font-medium' : 'opacity-70 hover:opacity-100'
                                    } rounded-md text-sm`}
                                >
                                    {themeOption.name}
                                </div>
                            ))}
                        </div>
                        <div className="flex w-full justify-end">
                            <p onClick={handleMainDialog} className={`cursor-pointer px-2 py-1 text-center ${theme.buttonBg} rounded-md ${theme.buttonText} text-sm font-medium`}>back</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ThemeDialog; 