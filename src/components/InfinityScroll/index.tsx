import React, { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react';

import useObserve from '@/hooks/useObserve';

import { IProps } from './types';

const InfinityScroll = ({ wrapper, children }: IProps) => {
  const [renderedComponentsCounter, setRenderedComponentsCounter] = useState(1);
  const listWrapperRef = useRef<HTMLElement>(null);

  const [lastElementRef, isLastElementVisible] = useObserve();

  const renderNextElement = useCallback(() => {
    if (listWrapperRef.current !== null) {
      const isAllListRendered = renderedComponentsCounter > Children.count(children) - 1;

      if (isLastElementVisible && !isAllListRendered) {
        setRenderedComponentsCounter(renderedComponentsCounter + 1);
      }
    }
  }, [isLastElementVisible, listWrapperRef]);

  useEffect(() => {
    if (isLastElementVisible) {
      renderNextElement();
    }
  }, [isLastElementVisible, renderNextElement]);

  const childrenToRender = Children.map(children, (component, index) => {
    if (index + 1 <= renderedComponentsCounter) {
      return component;
    }
    return null;
  });

  const wrappedList = cloneElement(wrapper, {
    ref: listWrapperRef,
    children: childrenToRender,
  });

  return (
    <>
      {wrappedList}
      <div ref={lastElementRef} />
    </>
  );
};

export default InfinityScroll;
