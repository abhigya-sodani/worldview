import util from '../../util/util';
import { each as lodashEach, get } from 'lodash';
import update from 'immutability-helper';

export function serializeDate(date) {
  return (
    date.toISOString().split('T')[0] +
    '-' +
    'T' +
    date
      .toISOString()
      .split('T')[1]
      .slice(0, -5) +
    'Z'
  );
}
export function getActiveTime(state) {
  const { compare, date } = state;
  const activeStr = compare.isCompareA ? 'selected' : 'selectedB';
  return date[activeStr];
}
export function tryCatchDate(str, initialState) {
  try {
    return util.parseDateUTC(str);
  } catch (error) {
    console.warn('Invalid date: ' + str);
    return initialState;
  }
}
/**
 * Checks the date provided against the active layers.
 *
 * @method getLayersActiveAtDate
 * @param  {Array} layers
 * @param  {object} date Date of data to be displayed on the map.
 * @return {array}       An array of visible layers within the date.
 */
export function getLayersActiveAtDate(layers, date) {
  var arra = [];
  lodashEach(layers, function(layer) {
    if (layer.visible && layer.startDate && new Date(layer.startDate > date)) {
      arra.push(layer);
    }
  });
  return arra;
}
export function mapLocationToDateState(
  parameters,
  stateFromLocation,
  state,
  config
) {
  const appNow = get(state, 'date.appNow');
  // legacy time permalink
  if (parameters.time && !parameters.t && appNow) {
    const date = tryCatchDate(parameters.time, appNow);
    if (date && date !== appNow) {
      stateFromLocation = update(stateFromLocation, {
        date: {
          selected: { $set: date }
        }
      });
    }
  }
  return stateFromLocation;
}