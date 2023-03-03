import renderThemeChanger from "@/components/themeChanger";

const Header = ({children}: any) => {
  return (
    <>
      <nav className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 justify-center">{children}</div>
          <ul className="flex justify-center gap-2">
            <li>{renderThemeChanger()}</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
