import { useEffect, useState } from 'react';
import './App.css';
import Dialog from './components/Dialog';

function App() {
  const initialText = "Type here :) \n\nHit Cmd/Ctrl + K anytime to explore the app. \n";
  const [showDialog, setShowDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState(()=>{
    return localStorage.getItem('userText');
  });
  
  const handleTextChange = (e) => {
    setText(e.target.value);
    localStorage.setItem('userText', e.target.value);
  };

  useEffect(() => {
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


  return (
    <div className='h-screen flex flex-col'>
    <div className='px-6 flex flex-col h-full  w-full font-mono text-lg font-medium items-center justify-center'>
      {showDialog ? <Dialog /> : <></>}
      <textarea className='w-full h-full py-8 resize-none focus:outline-none' placeholder={initialText} value={text} onChange={handleTextChange}></textarea>
      
    </div>
    <div className='px-8 font-mono font-medium text-sm w-full h-8 bg-slate-900 text-slate-50 flex items-center justify-between'>
    <p className='text-xl font-semibold'>कागद</p>
    {isMobile ? (
      <div
        className='cursor-pointer'
        onClick={handleMobileDialogClick}
      >
        toggle info
      </div>
    ) :
    (<a
      href='https://priyanshuvolvotkar.in/'
      target='_blank'
      className='cursor-pointer'
    >
      volvotkar.
    </a>) 
    }
  </div>
  </div>
  );
}

export default App;
