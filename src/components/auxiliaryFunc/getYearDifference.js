import { differenceInYears } from 'date-fns';

export const getYearDifference = (date) => {
  const currentDate = new Date();
  const parsedDate = new Date(date);

  const difference = differenceInYears(currentDate, parsedDate);

  return `${difference} years`;
};
