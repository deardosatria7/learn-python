const Header = ({children}: any) => {
  return (
    <>
      <nav className="p-4">
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
