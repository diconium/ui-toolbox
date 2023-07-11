import React from 'react';
import Badge from './Badge';
import BadgeContainer from './BadgeContainer';

export default {
  title: 'Toolbox/Badge',
  component: Badge,
};

export function Default() {
  return <Badge />;
}

export function DifferentSizes() {
  return (
    <div className="flex space-x-4">
      <Badge size="s" />
      <Badge size="m" />
      <Badge size="lg" />
      <Badge size="xl" />
    </div>
  );
}

export function WithLabel() {
  return (
    <div className="flex space-x-4 mb-4">
      <Badge badge={9} />
      <Badge badge={25} />
      <Badge badge={99} />
      <Badge badge={999} />
    </div>
  );
}

export function AddBadgeToOtherComponents() {
  return (
    <BadgeContainer badge={999}>
      <div className="w-16 h-16 bg-toolbox-primary-500" />
    </BadgeContainer>
  );
}
