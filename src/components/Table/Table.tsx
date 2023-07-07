import classNames from 'classnames';
import React from 'react';
import Icon from '../Icon/Icon';
import Cell, { Content } from './Cell';
import Header from './Header';
import assignId from './utils';

export interface Row {
  [key: string]: string;
}
export interface RowWithId {
  id: string;
  cells: { [key: string]: Content };
}

export interface Config {
  key: string;
  render: string;
  options?: {
    [key: string]: string | boolean;
  };
}

interface Props extends React.ComponentProps<'table'> {
  rows: Row[];
  config: Config[];
}

function Table({ rows = [], config = [], className }: Props) {
  const rowsWithId = assignId(rows);
  const template = classNames(
    'bg-toolbox-white text-toolbox-neutral-900 w-full text-left text-sm min-w-max border rounded-2xl',
    className?.includes('border-none') || 'px-6 py-2',
    className
  );
  const getConfig = (column: string) => config.find(({ key }) => key === column);
  const columns = config.map(({ key }) => key);
  const hideTableHeader = config.every(({ options }) => options?.hideHeader);
  return (
    <div className={template}>
      <table className="w-full table-auto">
        {!hideTableHeader && (
          <thead>
            <tr>
              {columns.map((column) => (
                <Header
                  key={column}
                  header={column}
                  config={getConfig(column)}
                />
              ))}
            </tr>
            <tr className="border border-neutral-100" />
          </thead>
        )}
        <tbody>
          {rowsWithId?.length ? (
            rowsWithId?.map(({ id, cells }) => (
              <tr key={id}>
                {columns.map((column) => (
                  <Cell
                    key={cells[column]?.id}
                    content={cells[column]}
                    config={getConfig(column)}
                  />
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="pt-5 pb-4 text-center text-toolbox-neutral-200"
                colSpan={config.length}
              >
                <Icon
                  icon="table-layout"
                  className="block pb-1"
                />
                No available data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
