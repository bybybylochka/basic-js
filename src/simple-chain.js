const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  constructor() {
    this.chain = []
  },
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(this.chain===undefined){
      this.chain = [];
    }
    if (value === undefined) {
      value = '';
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position<1||position>this.chain.length||!Number.isInteger(position)){
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finalChain = this.chain.join('~~');
    this.chain = [];
    return finalChain;
  }
};

module.exports = {
  chainMaker
};
