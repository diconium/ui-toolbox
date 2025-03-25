import React from 'react';

export default {
  title: 'Colors',
};

export function Primary() {
  return (
    <div className="grid grid-cols-4 gap-1 text-white">
      <div className="bg-toolbox-primary p-4">primary</div>
      <div className="bg-toolbox-primary-dominant p-4">primary-dominant</div>
      <div className="bg-toolbox-primary-900 p-4">primary-900</div>
      <div className="bg-toolbox-primary-800 p-4">primary-800</div>
      <div className="bg-toolbox-primary-700 p-4">primary-700</div>
      <div className="bg-toolbox-primary-600 p-4">primary-600</div>
      <div className="bg-toolbox-primary-500 p-4">primary-500</div>
      <div className="bg-toolbox-primary-400 p-4">primary-400</div>
      <div className="bg-toolbox-primary-accent p-4">primary-accent</div>
      <div className="bg-toolbox-primary-300 p-4">primary-300</div>
      <div className="bg-toolbox-primary-200 p-4">primary-200</div>
      <div className="bg-toolbox-primary-100 p-4">primary-100</div>
      <div className="bg-toolbox-primary-50 p-4">primary-50</div>
      <div className="bg-toolbox-primary-gradient p-4">primary-gradient</div>
    </div>
  );
}

export function Secondary() {
  return (
    <div className="grid grid-cols-4 gap-1 text-white">
      <div className="bg-toolbox-secondary p-4">secondary</div>
      <div className="bg-toolbox-secondary-dominant p-4">secondary-dominant</div>
      <div className="bg-toolbox-secondary-900 p-4">secondary-900</div>
      <div className="bg-toolbox-secondary-800 p-4">secondary-800</div>
      <div className="bg-toolbox-secondary-700 p-4">secondary-700</div>
      <div className="bg-toolbox-secondary-600 p-4">secondary-600</div>
      <div className="bg-toolbox-secondary-500 p-4">secondary-500</div>
      <div className="bg-toolbox-secondary-400 p-4">secondary-400</div>
      <div className="bg-toolbox-secondary-accent p-4">secondary-accent</div>
      <div className="bg-toolbox-secondary-300 p-4">secondary-300</div>
      <div className="bg-toolbox-secondary-200 p-4">secondary-200</div>
      <div className="bg-toolbox-secondary-100 p-4">secondary-100</div>
      <div className="bg-toolbox-secondary-50 p-4">secondary-50</div>
      <div className="bg-toolbox-secondary-gradient p-4">secondary-gradient</div>
    </div>
  );
}

export function Neutrals() {
  return (
    <div className="grid grid-cols-4 gap-1 text-white">
      <div className="bg-toolbox-neutral p-4">neutral</div>
      <div className="bg-toolbox-neutral-dominant p-4">neutral-dominant</div>
      <div className="bg-toolbox-neutral-900 p-4">neutral-900</div>
      <div className="bg-toolbox-neutral-800 p-4">neutral-800</div>
      <div className="bg-toolbox-neutral-700 p-4">neutral-700</div>
      <div className="bg-toolbox-neutral-600 p-4">neutral-600</div>
      <div className="bg-toolbox-neutral-500 p-4">neutral-500</div>
      <div className="bg-toolbox-neutral-400 p-4">neutral-400</div>
      <div className="bg-toolbox-neutral-accent p-4">neutral-accent</div>
      <div className="bg-toolbox-neutral-300 p-4">neutral-300</div>
      <div className="bg-toolbox-neutral-200 p-4">neutral-200</div>
      <div className="bg-toolbox-neutral-100 p-4">neutral-100</div>
      <div className="bg-toolbox-neutral-50 p-4">neutral-50</div>
      <div className="bg-toolbox-neutral-gradient p-4">neutral-gradient</div>
    </div>
  );
}

export function Feedback() {
  return (
    <div className="grid grid-cols-2 gap-1 text-white">
      <div className="bg-toolbox-feedback-red p-4">feedback-red</div>
      <div className="bg-toolbox-feedback-red-50 p-4">feedback-red-50</div>
      <div className="bg-toolbox-feedback-orange p-4">feedback-orange</div>
      <div className="bg-toolbox-feedback-orange-50 p-4">feedback-orange-50</div>
      <div className="bg-toolbox-feedback-green p-4">feedback-green</div>
      <div className="bg-toolbox-feedback-green-50 p-4">feedback-green-50</div>
    </div>
  );
}

export function Additional() {
  return (
    <div className="grid grid-cols-2 gap-1 text-white">
      <div className="bg-toolbox-black p-4">black</div>
      <div className="bg-toolbox-white p-4 text-black">white</div>
      <div className="bg-toolbox-grey p-4 text-black">grey</div>
    </div>
  );
}
