const date = new Date();

export const getCurrentDate = () => {
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  if (parseInt(month) < 10) {
    month = '0' + month;
  }

  if (parseInt(day) < 10) {
    day = '0' + day;
  }

  return `${year}-${month}-${day}`;
}