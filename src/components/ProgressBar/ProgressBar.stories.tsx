import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Toolbox/ProgressBar',
  component: ProgressBar,
};

export function Default() {
  return <div className="flex flex-col space-y-4">
    <ProgressBar />
    <ProgressBar progress={67} />
    <ProgressBar progress={100} />
  </div>
}

export function WithEffect() {
  return <ProgressBar
    animate
    progress={67}
  />
}

export function DynamicMinAndMax() {
  return <div className="flex flex-col space-y-4">
    <ProgressBar
      min={20}
      progress={10}
    />
    <ProgressBar
      max={60}
      progress={67}
    />
  </div>
}
