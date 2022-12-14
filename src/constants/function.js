export default function numberWithCommas(x) {
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join('.');
}

export function Datediff(string) {
  var date1 = new Date(string);
  var date2 = new Date();
  var date = new Date(date2 - date1);
  var time = '';
  var year = date.getFullYear() - 1970;
  var month = date.getMonth();
  var day = date.getUTCDate() - 1;
  var hour = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var second = date.getUTCSeconds();
  if (year > 0) {
    time += year + ' năm trước';
    return time;
  } else if (month > 0) {
    time += month + ' tháng trước';
    return time;
  } else if (day >= 7 && day < 30) {
    time += day / 7 + ' tuần trước';
    return time;
  } else if (day > 0 && day < 7) {
    time += day + ' ngày trước';
    return time;
  } else if (hour > 0) {
    time += hour + ' giờ trước';
    return time;
  } else if (minutes > 0) {
    time += minutes + ' phút trước';
    return time;
  } else time += second + ' giây trước';
  return time;
}

export const getDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  let hour = today.getHours() + 1;

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  if (hour > 12) hour = hour - 12 + ':00 PM | ';
  else hour = hour + ':00 AM | ';

  const formattedToday = hour + '' + dd + '/' + mm + '/' + yyyy;
  return formattedToday;
};
