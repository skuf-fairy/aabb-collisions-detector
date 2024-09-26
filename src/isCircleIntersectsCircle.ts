import {CollisionsCircle} from './collisions.types';
import {squaredDistance as getSquaredDistance} from './collisions.utils';

export function isCircleIntersectsCircle(circleA: CollisionsCircle, circleB: CollisionsCircle): boolean {
  const squaredDistance = getSquaredDistance(circleA.x, circleA.y, circleB.x, circleB.y);

  return squaredDistance <= Math.pow(circleA.radius + circleB.radius, 2);
}
