import React from 'react';

export interface Props {
  link: string;
  alt: string;
  state?: string;
}

function State({ state }: { state: string }) {
  return <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full ${state}`} />;
}

function Avatar({ link, alt, state }: Props) {
  return (
    <div className="w-16 h-16 relative">
      <img
        className="w-16 h-16 object-cover rounded-full border-2 border-toolbox-white"
        src={link}
        alt={alt}
      />
      {state && <State state={state} />}
    </div>
  );
}

export default Avatar;
