export const dateStringToDate = (dateString: string): Date => {
  // 18/09/2020 -> new Date(2020, 8, 18)
  const [day, month, year] = dateString
    .split("/")
    .map(str => parseInt(str, 10));
  return new Date(year, month, day);
};
