/**
 * @description 格式化日期
 * @param {Date} date 2023-04-04 09:06:00 +08:00
 * @returns string 2023-04-04 09:06:00
 */
export const formatDate = (date) => {
  return date.split("+").shift();
};
