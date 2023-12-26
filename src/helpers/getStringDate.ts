import { allMonthsNames } from '@/constants';

export const getStringDate = (createdDate: Date) => {
  return `${String(allMonthsNames[createdDate.getMonth()]).padStart(2, '0')} ${String(
    createdDate.getDate(),
  ).padStart(2, '0')} ${createdDate.getFullYear()}`;
};
