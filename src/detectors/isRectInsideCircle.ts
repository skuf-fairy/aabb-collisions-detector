import {CollisionsCircle, CollisionsRectangle} from '../collisions.types';

export function isRectInsideCircle(rect: CollisionsRectangle, circle: CollisionsCircle): boolean {
  const rectCenterX = rect.x + rect.width / 2;
  const rectCenterY = rect.y + rect.height / 2;

  const dx = rectCenterX - circle.x;
  const dy = rectCenterY - circle.y;
  const distanceSquared = dx * dx + dy * dy;

  return distanceSquared <= Math.pow(circle.radius - Math.max(rect.width, rect.height) / 2, 2);
}
