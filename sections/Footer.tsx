import {useEffect, useState} from "react";

const Footer = ({children}: any) => {
  return (
    <>
      <div>
        <footer className="fixed md:sticky bottom-0">
          <div className="bg-neutral-200 pr-[768px] md:bg-transparent rounded-t-lg px-2 py-3">
            {children}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
