export default (isoDate) => {
  const date = new Date(isoDate);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
};
