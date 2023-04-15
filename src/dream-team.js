const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  let names=[];
  if(!(members instanceof Array)) return false;
  members.forEach(member=> {
    if(typeof(member)==="string"){
      member=member.trimStart();
      names.push(member[0].toUpperCase());
    }
  })
  names.sort();
  return names.join('');
}

module.exports = {
  createDreamTeam
};
