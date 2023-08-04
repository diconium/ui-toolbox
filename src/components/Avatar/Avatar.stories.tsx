import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Toolbox/Avatar',
  component: Avatar,
};

export function Default() {
  return (
    <div className="flex space-x-2">
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="Mike"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=47110"
        alt="Nora"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=08122"
        alt="Bamia"
      />
    </div>
  );
}

export function DifferentBorderColors() {
  return (
    <div className="flex space-x-2">
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="Mike"
        border="border-toolbox-feedback-red"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=47110"
        alt="Nora"
        border="border-toolbox-feedback-orange"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=08122"
        alt="Bamia"
        border="border-toolbox-feedback-green"
      />
    </div>
  );
}

export function DifferentSizes() {
  return (
    <div className="flex space-x-2">
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="Mike"
        size="s"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=47110"
        alt="Nora"
        size="m"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=08122"
        alt="Bamia"
        size="lg"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=044589"
        alt="Emma"
        size="xl"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=044597"
        alt="Anna"
        size="2xl"
      />
    </div>
  );
}

export function WithState() {
  return (
    <div className="flex space-x-2">
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="Mike"
        state="bg-toolbox-feedback-green"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=47110"
        alt="Nora"
        state="bg-toolbox-feedback-orange"
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=08122"
        alt="Bamia"
        state="bg-toolbox-feedback-red"
      />
    </div>
  );
}

export function WithBadges() {
  return (
    <div className="flex space-x-4">
      <Avatar
        link="https://i.pravatar.cc/150?u=08188"
        alt="Mike"
        badge={1}
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=47110"
        alt="Nora"
        badge={25}
      />
      <Avatar
        link="https://i.pravatar.cc/150?u=08122"
        alt="Bamia"
        badge={999}
      />
    </div>
  );
}
