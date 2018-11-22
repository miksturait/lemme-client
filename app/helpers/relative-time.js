import { helper } from '@ember/component/helper';
import { formatDistance } from 'date-fns';

export function relativeTime([date]/*, hash*/) {
  return formatDistance(date, new Date());
}

export default helper(relativeTime);
