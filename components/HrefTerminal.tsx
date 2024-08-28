import React from "react";

interface OpenOrFocusTabProps {
  linkText: string;
}

const OpenOrFocusTab: React.FC<OpenOrFocusTabProps> = ({linkText}) => {
  const url = "https://belajar-python.vercel.app/uji_kode";

  const openOrFocusTab = (url: string) => {
    const tabName = "Uji coba kode"; // Unique name for the tab
    const existingTab = window.open(url, tabName); // Try to find the existing tab

    if (existingTab) {
      // If a tab is found, focus on it
      existingTab.location.href = url; // Update the URL
      existingTab.focus();
    } else {
      // If no tab is found, open a new one
      window.open(url, tabName);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openOrFocusTab(url);
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      className="text-blue-700 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </a>
  );
};

export default OpenOrFocusTab;
