export const formatDate = (date?: Date) => {
  return date ? `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}` : '';
};
