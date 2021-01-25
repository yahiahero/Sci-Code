export const getCurrentDate = () => {
  let dateObj = new Date();
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  let day = dateObj.getDate();
  year = year.toString();
  month = month.toString();
  day = day.toString();
  if (day.length === 1) day = "0" + day;
  if (month.length === 1) month = "0" + month;
  return { year, month, day };
};

export const getDate = (input) => {
  let dateObj = input;

  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1;
  let day = dateObj.getDate();
  year = year.toString();
  month = month.toString();
  day = day.toString();
  if (day.length === 1) day = "0" + day;
  if (month.length === 1) month = "0" + month;
  return { year, month, day };
};
