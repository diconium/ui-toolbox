import React from 'react';

interface TableRowProps extends React.ComponentPropsWithoutRef<'tr'> {
  cells: (string | number)[];
  header?: boolean;
  columnBold?: boolean;
}
function TableRow({ cells, header, columnBold }: TableRowProps) {
  return (
    <tr>
      {cells.map((content, index) => (header ? (
        <th key={content} scope="col" className="p-2">
          {content}
        </th>
      ) : (
        <td
          key={content}
          className={
              columnBold && !index ? 'px-2 py-2 font-bold' : 'px-2 py-2'
            }
        >
          {content}
        </td>
      )))}
    </tr>
  );
}

export default TableRow;
