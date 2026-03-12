import {squaredDistance as getSquaredDistance} from '../collisions.utils';

export function isCircleIntersectsCircle(
  circleA_x: number,
  circleA_y: number,
  circleA_radius: number,
  circleB_x: number,
  circleB_y: number,
  circleB_radius: number,
): boolean {
  const squaredDistance = getSquaredDistance(circleA_x, circleA_y, circleB_x, circleB_y);

  return squaredDistance <= Math.pow(circleA_radius + circleB_radius, 2);
}
