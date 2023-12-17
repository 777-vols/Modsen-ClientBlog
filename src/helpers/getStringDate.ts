const allMonthsNames: string[] = [
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

export const getStringDate = (createdDate: Date) => {
  return `${String(allMonthsNames[createdDate.getMonth()]).padStart(2, '0')} ${String(
    createdDate.getDate(),
  ).padStart(2, '0')} ${createdDate.getFullYear()}`;
};
