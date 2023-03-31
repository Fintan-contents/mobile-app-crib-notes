export const diffInYears = (dateLeft: Date, dateRight: Date) => {
  let diff = dateLeft.getFullYear() - dateRight.getFullYear();
  if (dateRight.getMonth() > dateLeft.getMonth()) {
    diff--;
  } else if (dateRight.getMonth() === dateLeft.getMonth()) {
    if (dateRight.getDate() > dateLeft.getDate()) {
      diff--;
    } else if (dateRight.getDate() === dateLeft.getDate()) {
      if (dateRight.getHours() > dateLeft.getHours()) {
        diff--;
      } else if (dateRight.getHours() === dateLeft.getHours()) {
        if (dateRight.getMinutes() > dateLeft.getMinutes()) {
          diff--;
        }
      }
    }
  }
  return diff;
};
