const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  str = String(str);
  let addition = options.addition !== undefined ? String(options.addition) : "";

  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let separator = options.separator !== undefined ? options.separator : "+";
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : "|";

  let additionPart = addition + additionSeparator;
  additionPart = additionPart.repeat(additionRepeatTimes - 1) + addition;

  let repeatedStr = str + additionPart + separator;
  repeatedStr = repeatedStr.repeat(repeatTimes - 1) + str + additionPart;

  return repeatedStr;
}

module.exports = {
  repeater
};
