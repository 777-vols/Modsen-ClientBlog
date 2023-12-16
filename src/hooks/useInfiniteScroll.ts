import { useEffect, useState } from 'react';

export const useInfinityScroll = (components: JSX.Element[]) => {
  const [visibleComponents, setVisibleComponents] = useState(components.slice(0, 2));

  const handleScroll = () => {
    const footerHeight = document.getElementById('footer')?.clientHeight;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - footerHeight!
    ) {
      const nextComponent = components[visibleComponents.length];
      setVisibleComponents([...visibleComponents, nextComponent]);
    }
  };

  useEffect(() => {
    if (visibleComponents.length !== components.length) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return () => {};
  }, [visibleComponents]);

  return visibleComponents;
};
