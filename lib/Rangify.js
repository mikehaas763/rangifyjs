'use strict';

/**
 * Facade to the library. Will determine if a string or array was passed to decide which path of parsing
 * should be followed through the library.
 * @param rangifyee
 * @returns {Array}
 */
module.exports = function rangify(rangifyee) {
  if (typeof rangifyee === 'string') {
    return stringRepresentationToArrayRepresentation(rangifyee);
  }
}

/**
 * Will convert a comma separated list of numbers and dash ranges to it's array expanded equivalent.
 * @param {string} rangifyee
 * @returns {Array}
 */
function stringRepresentationToArrayRepresentation(rangifyee) {
  var elements = parseToElements(rangifyee);
  var elementsWithRangesParsed = parseRangesToElements(elements);

  return elementsWithRangesParsed;
}

function parseToElements(rangifyee) {
  var elements = rangifyee.split(',');
  return elements;
}

function parseRangesToElements(elements) {
  var elementsWithRangesParsed = [];

  elements.forEach(function (element) {
    var startAndEnd = element.split('-');

    if (startAndEnd.length === 1) {
      elementsWithRangesParsed.push(+startAndEnd[0]);
    } else if (startAndEnd.length === 2) {
      for (var i = +startAndEnd[0]; i <= +startAndEnd[1]; i++) {
        elementsWithRangesParsed.push(i);
      }
    } else {
      throw new Error('Invalid range: ' + element);
    }
  });

  return elementsWithRangesParsed;
}