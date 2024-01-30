import React, { PropsWithChildren, useEffect } from 'react';

export interface Props extends PropsWithChildren {
  onSubmit: () => void;
}

function Form({ children, onSubmit }: Props) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      className="flex flex-col space-y-2"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
