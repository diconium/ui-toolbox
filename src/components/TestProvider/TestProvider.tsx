import React, { useRef, useEffect, ReactElement, PropsWithRef } from 'react';

interface Props extends PropsWithRef<HTMLTemplateElement> {
  reference: string;
  selector?: string;
  enableInProduction?: boolean;
}

const Wrapper = React.forwardRef(
  (props: PropsWithRef, ref: React.ForwardedRef<HTMLTemplateElement>) => (
    <template ref={ref} />
  ),
);

function useTestId(shouldUseProvider: boolean, selector: string, reference: string) {
  const parentRef = useRef<HTMLTemplateElement>(null);

  useEffect(() => {
    if (shouldUseProvider) {
      const parentNode = parentRef.current;
      const sibling = parentNode?.nextElementSibling as HTMLElement;
      sibling.dataset[selector] = reference;
    }
  }, [parentRef.current]);

  return parentRef;
}

function TestProvider({
  children,
  selector = 'test',
  reference,
  enableInProduction = false,
}: Props): ReactElement {
  const shouldUseProvider = process.env.NEXT_PUBLIC_NODE_ENV === 'test' || enableInProduction;
  const parentRef = useTestId(shouldUseProvider, selector, reference);
  if (!shouldUseProvider) {
    return children as unknown as ReactElement;
  }

  return (
    <>
      <Wrapper ref={parentRef} />
      {children}
    </>
  );
}

export default TestProvider;
