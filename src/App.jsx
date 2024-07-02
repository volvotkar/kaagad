// import { useEffect, useState } from 'react';
// import './App.css';
// import Dialog from './components/Dialog';

// function App() {
//   const [showDialog, setShowDialog] = useState(false);

//   const handleKeyDown = (e) => {
//     if (e.key === 'Escape') {
//       setShowDialog(false); // Close dialog when Escape key is pressed
//     } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
//       e.preventDefault(); // Prevent default browser behavior for Ctrl/Cmd + K
//       setShowDialog(!showDialog); // Toggle showDialog state
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   });

//   const initialText = "Type here :) \n\nHit Cmd/Ctrl + K anytime to explore the app. \n";

//   return (
//     <div className='flex flex-col h-full w-full font-mono text-lg font-medium items-center justify-center'>
//       {showDialog ? <Dialog /> : <></>}
//       <textarea className='w-full h-full p-8 resize-none focus:outline-none' placeholder={initialText}></textarea>
//       <div className='px-8 text-sm w-full h-8 bg-slate-900 text-slate-50 flex items-center justify-between'>
//         <p className='text-xl font-semibold'>कागद</p>
//         <a className='decoration-none hover:underline underline-offset-4' href="https://github.com/volvotkar/" target='_blank' rel="noopener noreferrer"><p>volvotkar.</p></a>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from 'react';
import './App.css';
import Dialog from './components/Dialog';

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the viewport width is less than 768px (adjust as needed for your design)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check on component mount
    checkIsMobile();

    // Listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean-up function for listener
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault(); 
      setShowDialog(false); 
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault(); 
      setShowDialog(!showDialog); 
    }
  };
  useEffect(() => {
     window.addEventListener('keydown', handleKeyDown);
  });

  const handleMobileDialogClick = () => {
    setShowDialog(!showDialog); 
  };

  const initialText = "Type here :) \n\nHit Cmd/Ctrl + K anytime to explore the app. \n";

  return (
    <div className='flex flex-col h-full w-full font-mono text-lg font-medium items-center justify-center'>
      {showDialog ? <Dialog /> : <></>}
      <textarea className='w-full h-full p-8 resize-none focus:outline-none' placeholder={initialText}></textarea>
      <div className='px-8 text-sm w-full h-8 bg-slate-900 text-slate-50 flex items-center justify-between'>
        <p className='text-xl font-semibold'>कागद</p>
        {isMobile && (
          <div
            className='cursor-pointer'
            onClick={handleMobileDialogClick}
          >
            toggle info
          </div>
        )}
        <a className='decoration-none hover:underline underline-offset-4' href="https://github.com/volvotkar/" target='_blank' rel="noopener noreferrer"><p>volvotkar.</p></a>
      </div>
    </div>
  );
}

export default App;
