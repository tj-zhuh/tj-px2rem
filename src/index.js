
import px2rem from './lib.js';

var parse = function (cssText, remUnit) {
  let p2r = new px2rem({ remUnit });
  let result = p2r.generateRem(cssText);
  return result;
}

module.exports = parse;