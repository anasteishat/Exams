//Get month number 
'use strict';


const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const month = (s) => {
  const hit = months.indexOf(s); 
  return hit +1 || -1; 
};

console.log(month('fub'));

require('../Tests/month.js')(Month);
