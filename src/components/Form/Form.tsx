import React, { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  onSubmit: () => void;
}

function Form({ children, onSubmit }: Props) {
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
