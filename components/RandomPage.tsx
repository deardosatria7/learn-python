import {useRouter} from "next/router";

interface RandomPageButtonProps {
  pages: string[]; // Define the prop to accept the list of pages
}

export function RandomPageButton({pages}: RandomPageButtonProps) {
  const router = useRouter();

  const currentPath = router.pathname;

  const getRandomPage = () => {
    let randomPath;
    do {
      const randomIndex = Math.floor(Math.random() * pages.length);
      randomPath = pages[randomIndex];
    } while (randomPath === currentPath);
    router.push(randomPath);
  };

  return <button onClick={getRandomPage}>Go to Random Page</button>;
}
