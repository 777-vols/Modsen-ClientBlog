import { LegacyRef, useEffect, useRef, useState } from 'react';

const useObserve = (): [LegacyRef<HTMLDivElement>, boolean] => {
  const [isLastElementVisible, setIsLastElementVisible] = useState(false);
  const lastElementRef = useRef<HTMLDivElement>(null);

  const callback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;

    setIsLastElementVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const refVariable = lastElementRef.current;
    const observer = new IntersectionObserver(callback);

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => {
      if (refVariable) {
        observer.unobserve(refVariable);
      }
    };
  }, [lastElementRef]);

  return [lastElementRef, isLastElementVisible];
};

export default useObserve;
