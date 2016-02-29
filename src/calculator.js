import Immutable from 'immutable';
import {List} from 'immutable';

export function add(str) {
  if (!str) return 0;
  let stringList, intList;
  if (str.match(/^[//].+/)) {
      const splitString = Immutable.fromJS(str.split(''));
      const delimeter = splitString.get(2);
      const slicedJoinedString = splitString.slice(4).join('');
      stringList = Immutable.fromJS(slicedJoinedString.split(delimeter));
      intList = stringList.map(numStr => parseInt(numStr));
  } else {
      stringList = Immutable.fromJS(str.split(/[,]|[\n]/));
      intList = stringList.map(numStr => parseInt(numStr));
  }

  return intList.reduce( (prev, cur) => prev + cur);
};
