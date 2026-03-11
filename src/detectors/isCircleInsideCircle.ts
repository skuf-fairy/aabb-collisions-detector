import {CollisionsCircle} from '../collisions.types';

export function isCircleInsideCircle(innerCircle: CollisionsCircle, outerCircle: CollisionsCircle): boolean {
  const dx = innerCircle.x - outerCircle.x;
  const dy = innerCircle.y - outerCircle.y;
  const distanceSquared = dx * dx + dy * dy;

  return distanceSquared <= Math.pow(outerCircle.radius - innerCircle.radius, 2);
}
