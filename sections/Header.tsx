import {useEffect, useState} from "react";

const Header = ({children}: any) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="p-4 bg-neutral-600">
        <div className="flex justify-between">
          <div>{children}</div>
          <div>
            <ul className="flex justify-center gap-2">
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
