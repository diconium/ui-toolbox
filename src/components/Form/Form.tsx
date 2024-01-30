import React, { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  onSubmit: () => void;
  className?: string;
}

function Form({ children, onSubmit, className }: Props) {
  const classes = className || 'flex flex-col space-y-2';
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      className={classes}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
