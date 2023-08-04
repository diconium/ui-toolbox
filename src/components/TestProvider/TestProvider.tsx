import React, { PropsWithChildren, useRef, useEffect, ReactElement } from 'react';

interface Props extends PropsWithChildren {
  reference: string;
  selector?: string;
  enableInProduction?: boolean;
}

const Wrapper = React.forwardRef(
  (props: PropsWithChildren, ref: React.ForwardedRef<HTMLDivElement>) => (
    <div ref={ref}>{props?.children}</div>
  )
);

function useTestId(shouldUseProvider: boolean, selector: string, reference: string) {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldUseProvider) {
      const parentNode = parentRef.current;
      const children = parentNode?.children;
      if (parentNode && children?.length === 1) {
        const childNode = children[0];
        (childNode as HTMLElement).dataset[selector] = reference;
      }
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

return <Wrapper ref={parentRef}>{children}</Wrapper>;
}

export default TestProvider;
