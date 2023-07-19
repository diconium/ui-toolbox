import React, { PropsWithChildren, useRef, useEffect } from 'react';

interface Props extends PropsWithChildren {
  reference: string;
  selector?: string;
  enableInProduction?: boolean;
}

const Wrapper = React.forwardRef(
  (props: PropsWithChildren, ref: React.ForwardedRef<HTMLTemplateElement>) => (
    <template ref={ref}>{props?.children}</template>
  )
);

function assignDataAttribute(node: ChildNode, selector: string, reference: string) {
  const updatedNode = node.cloneNode(true) as HTMLElement;
  updatedNode.dataset[selector] = reference;
  return updatedNode;
}

function useTestId(shouldUseProvider: boolean, selector: string, reference: string) {
  const parentRef = useRef<HTMLTemplateElement>(null);

  useEffect(() => {
    if (shouldUseProvider) {
      const parentNode = parentRef.current;
      const children = parentNode?.children;
      if (parentNode && children?.length === 1) {
        const childNode = children[0];
        const childWithAttribute = assignDataAttribute(childNode, selector, reference);
        parentNode.replaceWith(childWithAttribute);
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
}: Props) {
  const shouldUseProvider = process.env.NODE_ENV === 'test' || enableInProduction;
  const parentRef = useTestId(shouldUseProvider, selector, reference);
  if (!shouldUseProvider) {
    return children;
  }
  return <Wrapper ref={parentRef}>{children}</Wrapper>;
}

export default TestProvider;
