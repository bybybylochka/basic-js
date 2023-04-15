const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {boolean} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function check(date){
  let year=date.getFullYear();
  let month=date.getMonth();
  let day=date.getDate();
  if(year < 1 || month < 0 || day < 1 || month > 11 || day > 31) return true;
  else return false;
}
function getSeason(date ) {
  if(typeof(date)==="undefined"){
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date)||check(date)){
    throw new Error('Invalid date!');
  }
  let month=date.getMonth();
  let spring=[2, 3, 4];
  let summer=[5, 6, 7];
  let autumn=[8,9,10];
  let winter=[11, 0, 1];
  if(spring.includes(month)) return 'spring';
  if(winter.includes(month)) return 'winter';
  if(summer.includes(month)) return 'summer';
  if(autumn.includes(month)) return 'autumn';
}

module.exports = {
  getSeason
};
