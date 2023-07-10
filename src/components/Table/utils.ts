import { Row, RowWithId } from './Table';

const ID_LENGTH = 21;
const generateId = (length = ID_LENGTH) => {
  const randomValues = crypto.getRandomValues(new Uint8Array(length));
  return randomValues.reduce((id, randomElement) => {
    const remainder = randomElement % (63 + 1);
    const isLowercase = remainder < 36;
    if (isLowercase) {
      return `${id}${remainder.toString(36)}`;
    }
    const isUppercase = remainder < 62;
    if (isUppercase) {
      return `${id}${(remainder - 26).toString(36).toUpperCase()}`;
    }
    const isNotLetter = remainder > 62;
    if (isNotLetter) {
      return `${id}-`;
    }
    return `${id}_`;
  }, '');
};

export default function assignId(rows: Row[]): RowWithId[] {
  return rows.map((row) => {
    if (row && typeof row === 'object') {
      const rowId = generateId();
      const cells = Object.entries(row).reduce((acc, [key, value]) => {
        const cellId = generateId();
        return { ...acc, [key]: { id: rowId + cellId, value } };
      }, {});
      return { cells, id: rowId };
    }
    return row;
  });
}
