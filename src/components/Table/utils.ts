import { nanoid } from 'nanoid';
import { Row, RowWithId } from './Table';

export default function assignId(rows: Row[]): RowWithId[] {
  return rows.map((row) => {
    const rowId = nanoid();
    const cells = Object.entries(row).reduce((acc, [key, value]) => {
      const cellId = nanoid();
      return { ...acc, [key]: { id: rowId + cellId, value } };
    }, {});
    return { cells, id: rowId };
  });
}
