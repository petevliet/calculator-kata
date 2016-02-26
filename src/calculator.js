import Immutable from 'immutable';
import {List} from 'immutable';

export function add(str) {
  if (!str) return 0;

  const stringList = Immutable.fromJS(str.split(/[,]|[\n]/));
  const intList = stringList.map(numStr => parseInt(numStr));

  return intList.reduce( (prev, cur) => prev + cur);
};
