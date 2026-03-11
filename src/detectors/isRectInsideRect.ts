import {CollisionsRectangle} from '../collisions.types';

export function isRectInsideRect(inner: CollisionsRectangle, outer: CollisionsRectangle): boolean {
  return (
    inner.x >= outer.x &&
    inner.y >= outer.y &&
    inner.x + inner.width <= outer.x + outer.width &&
    inner.y + inner.height <= outer.y + outer.height
  );
}
