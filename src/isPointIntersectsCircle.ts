import {CollisionsCircle, Point2d} from './collisions.types';

export function isPointIntersectsCircle(point: Point2d, circle: CollisionsCircle) {
  if (circle.radius === 0) return false;
  const dx = circle.x - point.x;
  const dy = circle.y - point.y;
  return dx * dx + dy * dy <= circle.radius * circle.radius;
}
