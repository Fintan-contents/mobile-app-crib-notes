export const diffInDays = (dateLeft: Date, dateRight: Date) => {
  const diff = dateLeft.getTime() - dateRight.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};
