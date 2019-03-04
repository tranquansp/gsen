const _ = require('lodash');

const forOwn = _.forOwn;
const intersection = _.intersection;
const concat = _.concat;
const isPlainObject = _.isPlainObject;
const pull = _.pull;
const pick = _.pick;
const find = _.find;
const values = _.values;
const camelCase = _.camelCase;
const upperFirst = _.upperFirst;


const isArray = Array.isArray
const keys = Object.keys
const assign = Object.assign

function isString (value) {
  const type = typeof value
  return type === 'string'
}

function isObject (value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

function isFunction (value) {
  const type = typeof value
  return type === 'function'
}

module.exports = {
  forOwn,
  intersection,
  concat,
  isPlainObject,
  pull,
  pick,
  camelCase,
  isArray,
  keys,
  assign,
  isString,
  isObject,
  isFunction,
  upperFirst,
  values,
  find
}
