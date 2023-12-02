/**
 * @description 格式化日期
 * @param {Date} date
 * @returns string 'yyyy-mm-dd hh:mm:ss'
 */
export const formatDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const hour = String(dateObj.getHours()).padStart(2, "0");
  const min = String(dateObj.getMinutes()).padStart(2, "0");
  const sec = String(dateObj.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
};
