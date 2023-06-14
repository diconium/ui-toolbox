import React from 'react';
import classNames from 'classnames';

export interface Props {
  progress?: number;
  min?: number;
  max?: number;
  animate?: boolean;
}

const MAX = 100;
const MIN = 0;

const normalize = (progress: number, min: number, max: number) => {
  if (progress < min) {
    return min;
  }
  if (progress > max) {
    return max;
  }
  return Math.round(progress);
};

function ProgressBar({
  progress = 0,
  min = MIN,
  max = MAX,
  animate = false,
}: Props) {
  const template = classNames([
    'bg-toolbox-primary h-1 rounded-2xl',
    { 'motion-safe:animate-pulse': animate },
  ]);
  return (
    <div className="w-full h-1 bg-toolbox-neutral-50 rounded-2xl">
      <div
        className={template}
        style={{
          width: `${normalize(progress, min, max)}%`,
        }}
      />
    </div>
  );
}

export default ProgressBar;
