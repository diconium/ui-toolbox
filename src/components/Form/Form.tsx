import React, { PropsWithChildren, useEffect } from 'react';

export interface Props extends PropsWithChildren {
  onSubmit: () => void;
}

function Form({ children, onSubmit }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        onSubmit();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onSubmit]);
  
  return (
    <form
      className="flex flex-col space-y-2"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
}

export default Form;
