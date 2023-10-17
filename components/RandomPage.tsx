import {useRouter} from "next/router";

interface RandomPageButtonProps {
  pages: string[]; // Define the prop to accept the list of pages
  children?: React.ReactNode;
}

export function RandomPageButton({pages, children}: RandomPageButtonProps) {
  //use router
  const router = useRouter();

  //get current path
  const currentPath = router.pathname;

  //generate random page
  const getRandomPage = () => {
    let randomPath;
    do {
      const randomIndex = Math.floor(Math.random() * pages.length);
      randomPath = pages[randomIndex];
    } while (randomPath === currentPath);
    router.push(randomPath);
  };

  return <button onClick={getRandomPage}>{children}</button>;
}
