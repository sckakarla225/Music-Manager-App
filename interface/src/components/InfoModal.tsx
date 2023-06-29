import React from 'react';
import { MdClose } from 'react-icons/md';

import logo from '../assets/logo.png';

interface InfoModalProps {
  isOpen: boolean,
  onCloseFunc: Function,
};

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onCloseFunc }) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-8 lg:py-32 lg:px-64'
            onClick={() => onCloseFunc(false)}
          >
            <div className='h-full w-full overflow-scroll lg:h-auto lg:w-auto lg:overflow-hidden p-8 lg:pt-8 bg-zinc-500 rounded-lg shadow-lg flex flex-col items-center'>
              <div
                className='flex flex-row justify-between items-center mb-2'
                style={{ width: "100%" }}
              >
                <div className='ml-6 flex flex-row'>
                  <img 
                    src={logo} 
                    height={30} 
                    width={30}
                    className="mr-5" 
                  />
                  <h1 className="text-white font-semibold text-xl">Welcome to autotunes!</h1>
                </div>
                <MdClose
                  className='ml-10 text-2xl cursor-pointer font-bold'
                  onClick={() => onCloseFunc(false)}
                />
              </div>
              <div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default InfoModal;