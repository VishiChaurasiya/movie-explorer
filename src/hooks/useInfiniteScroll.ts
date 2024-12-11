import { useEffect, useState } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();

    // eslint-disable-next-line
  }, [isFetching]);

  return [isFetching, setIsFetching] as const;
};
