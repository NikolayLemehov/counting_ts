export const formatDate = (stringDate: Date, separation = '-'): string => {
  const date = new Date(stringDate);
  let dd: number | string = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm: number | string = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yyyy: number | string = date.getFullYear();
  if (yyyy < 10) yyyy = '0' + yyyy;

  return (`${yyyy}${separation}${mm}${separation}${dd}`);
}
