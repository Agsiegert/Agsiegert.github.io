import twoDigitNumber from 'utils/twoDigitNumber';

// format inspired by https://date-fns.org/v1.29.0/docs/format
// date-fns/format is not used, since it increases the payload by around 9 kb.
function formatDate(date, format) {
  if (!date) { return null; }

  const DD = twoDigitNumber(date.getDate()); // getDate returns 1 to 31.
  const MM = twoDigitNumber(date.getMonth() + 1); // getMonth return 0 to 11.
  const MMMM = MONTH_MAPPING[date.getMonth()]; // getMonth return 0 to 11.
  const YYYY = `${date.getFullYear()}`; // getFullYear returns values like 1999 or 2017.

  switch (format) {
    case 'MM/DD/YYYY': return `${MM}/${DD}/${YYYY}`;
    case 'MM/DD': return `${MM}/${DD}`;
    case 'MMMM YYYY': return `${MMMM} ${YYYY}`;
    case 'YYYY-MM': return `${YYYY}-${MM}`;
    case 'YYYY-MM-DD': return `${YYYY}-${MM}-${DD}`;
  }

  throw `formatDate with format "${format}" is not supported!`;
}

const MONTH_MAPPING = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default formatDate;
