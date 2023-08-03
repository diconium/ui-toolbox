import React from 'react';
import State from './State';
import StateContainer from './StateContainer';

export default {
  title: 'Toolbox/State',
  component: State,
};

export function Default() {
  return (
    <div className="flex space-x-4">
      <State color="bg-toolbox-feedback-green" />
      <State color="bg-toolbox-feedback-orange" />
      <State color="bg-toolbox-feedback-red" />
    </div>
  );
}

export function DifferentSizes() {
  return (
    <div className="flex space-x-4">
      <State
        size="lg"
        color="bg-toolbox-feedback-green"
      />
      <State
        size="m"
        color="bg-toolbox-feedback-orange"
      />
    </div>
  );
}

export function WithLabel() {
  return (
    <div className="flex flex-col space-y-4">
      <State
        label="Online"
        color="bg-toolbox-feedback-green"
      />
      <State
        label="Not at desk"
        color="bg-toolbox-feedback-orange"
      />
      <State
        label="Offline"
        color="bg-toolbox-feedback-red"
      />
    </div>
  );
}

export function AttachStateToAnyOtherComponent() {
  return (
    <StateContainer
      color="bg-toolbox-feedback-orange"
      size="lg"
    >
      <div className="w-16 h-16 bg-toolbox-primary" />
    </StateContainer>
  );
}
