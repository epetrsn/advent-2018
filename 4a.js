const { DateTime } = require('luxon');
const parse = require('./lib/parse');
/**
 * [1518-01-22 00:58]
 * [y-MM-dd HH:mm]
 */

const DATE_FORMAT = 'y-MM-dd HH:mm';
const LOG_PATTERN = /\[([\d :-]+)\] (.+)/;

const GUARD_CHANGE_PATTERN = /^Guard #(\d+) begins shift$/;
const GUARD_WAKE_PATTERN = /^wakes up$/;
const GUARD_SLEEP_PATTERN = /^falls asleep$/;

// const EVENT_TYPE = {
//   GUARD_CHANGE: 'guard::change',
//   SLEEP: 'guard::sleep',
//   WAKE: 'guard::wake',
// };

const events = parse('4').map((logStr) => {
  const [ , dateString, message ] = LOG_PATTERN.exec(logStr);
  const datetime = DateTime.fromFormat(dateString, DATE_FORMAT);
  return {
    datetime,
    message,
  };
}).sort((a, b) => {
  return a.datetime < b.datetime ? 1 : -1;
});



console.log(events.map(({ datetime }) => {
  return datetime.toISO();
}));

const shifts = [];

events.forEach((event) => {
  const action = ;
});
