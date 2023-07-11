import React from 'react';
import ListItem from '../ListItem';
import State from '../State';
import Table from './Table';
import Icon from '../Icon';

export default {
  title: 'Toolbox/Table',
  component: Table,
};

export function Default() {
  return (
    <div className="w-[450px]">
      <Table
        rows={[
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
        ]}
        config={[
          { key: 'HW', render: 'default' },
          { key: 'ECU', render: 'default' },
          { key: 'SW', render: 'default' },
          { key: 'Rev.', render: 'default' },
        ]}
      />
    </div>
  );
}
export function Empty() {
  return (
    <div className="w-[450px]">
      <Table
        rows={[]}
        config={[
          { key: 'HW', render: 'default' },
          { key: 'ECU', render: 'default' },
          { key: 'SW', render: 'default' },
          { key: 'Rev.', render: 'default' },
        ]}
        empty={
          <>
            <Icon
              icon="table-layout"
              className="block pb-1"
            />
            <p>No available data</p>
          </>
        }
      />
    </div>
  );
}
export function WithoutHeader() {
  return (
    <div className="w-[450px]">
      <Table
        rows={[
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
        ]}
        config={[
          { key: 'HW', render: 'default', options: { hideHeader: true } },
          { key: 'ECU', render: 'default', options: { hideHeader: true } },
          { key: 'SW', render: 'default', options: { hideHeader: true } },
          { key: 'Rev.', render: 'default', options: { hideHeader: true } },
        ]}
      />
    </div>
  );
}

export function FirstColumnBold() {
  return (
    <div className="w-[450px]">
      <Table
        rows={[
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
          { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
        ]}
        config={[
          { key: 'ECU', render: 'default', options: { className: 'font-bold' } },
          { key: 'HW', render: 'default' },
          { key: 'SW', render: 'default' },
          { key: 'Rev.', render: 'default' },
        ]}
      />
    </div>
  );
}

export function Expandable() {
  return (
    <div className="w-[450px]">
      <ListItem
        title="Text Label"
        lower={
          <span className="pr-4">
            <State />
          </span>
        }
      >
        <Table
          rows={[
            { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
            { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
            { ECU: 'Label', HW: 'Label', SW: 'Label', 'Rev.': 'Label' },
          ]}
          config={[
            { key: 'ECU', render: 'default' },
            { key: 'HW', render: 'default' },
            { key: 'SW', render: 'default' },
            { key: 'Rev.', render: 'default' },
          ]}
          className="border-none"
        />
      </ListItem>
    </div>
  );
}

export function IconCells() {
  return (
    <div className="w-[450px]">
      <Table
        rows={[
          { ECU: 'Label', HW: 'Label', SW: 'Label', Icon: 'arrow-left' },
          { ECU: 'Label', HW: 'Label', SW: 'Label', Icon: 'arrow-right' },
          { ECU: 'Label', HW: 'Label', SW: 'Label', Icon: 'arrow-up' },
        ]}
        config={[
          { key: 'ECU', render: 'default' },
          { key: 'HW', render: 'default' },
          { key: 'SW', render: 'default' },
          { key: 'Icon', render: 'icon', options: { size: 'sm' } },
        ]}
      />
    </div>
  );
}
