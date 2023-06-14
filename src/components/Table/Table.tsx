import React from 'react';
import classNames from 'classnames';
import TableRow from './TableRow';

interface Row {
  [key: string]: string | number;
}
export interface Props extends React.ComponentPropsWithoutRef<'table'> {
  hideHeader?: boolean;
  hideBorder?: boolean;
  columnBold?: boolean;
  rows: Row[];
}

function Table({ hideHeader, hideBorder, rows, columnBold }: Props) {
  const border = classNames(
    'bg-toolbox-white w-full text-left text-sm min-w-max',
    hideBorder || 'px-6 py-2 border rounded-2xl'
  );
  return (
    <div className={border}>
      <table className="w-full table-auto">
        {hideHeader ? null : (
          <thead>
            <TableRow header cells={Object.keys(rows[0])} />
            <tr className="border border-neutral-100" />
          </thead>
        )}
        <tbody>
          {rows?.map((row) => (
            <TableRow
              key={JSON.stringify(row)}
              cells={Object.values(row)}
              columnBold={columnBold}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
