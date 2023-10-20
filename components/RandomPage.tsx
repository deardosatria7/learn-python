import {useState} from "react";
import {useRouter} from "next/router";

interface RandomPageButtonProps {
  pages: string[];
  children?: React.ReactNode;
}

export function RandomPageButton({pages, children}: RandomPageButtonProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  const [visitedPages, setVisitedPages] = useState<string[]>([]);

  const getRandomPage = () => {
    const availablePages = pages.filter((page) => !visitedPages.includes(page));

    if (availablePages.length === 0) {
      alert("You have visited all available pages.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * availablePages.length);
    const randomPath = availablePages[randomIndex];

    setVisitedPages((prevVisitedPages) => [...prevVisitedPages, randomPath]);
    router.push(randomPath);
  };

  return <button onClick={getRandomPage}>{children}</button>;
}
