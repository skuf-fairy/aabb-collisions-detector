import {CollisionsRectangle} from './collisions.types';

export function isRectIntersectsRect(rectA: CollisionsRectangle, rectB: CollisionsRectangle): boolean {
  return (
    rectA.x < rectB.x + rectB.width &&
    rectA.x + rectA.width > rectB.x &&
    rectA.y < rectB.y + rectB.height &&
    rectA.y + rectA.height > rectB.y
  );
}
