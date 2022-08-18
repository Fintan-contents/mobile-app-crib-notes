export const format2Iso8601 = (d: Date): string => {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}Z`;
};
