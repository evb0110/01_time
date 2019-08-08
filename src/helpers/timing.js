const moment = require('moment');

const date = moment('2019-08-08 20:40:00');

export default function dateStamp(date) {
  const now = moment();
  const time = moment(date);
  const days = now.diff(time, 'days');
  const hours = now.diff(time, 'hours');
  if (hours > 24) return `${days} дней назад`;
  const minutes = now.diff(time, 'minutes');
  if (minutes > 60) return '5 часов назад';
  return '12 минут назад';
}

