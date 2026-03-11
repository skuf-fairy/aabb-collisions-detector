import {CollisionsCircle, CollisionsRectangle} from '../collisions.types';

export function isCircleInsideRect(circle: CollisionsCircle, rect: CollisionsRectangle): boolean {
  const circleLeft = circle.x - circle.radius;
  const circleRight = circle.x + circle.radius;
  const circleTop = circle.y - circle.radius;
  const circleBottom = circle.y + circle.radius;

  const rectLeft = rect.x;
  const rectRight = rect.x + rect.width;
  const rectTop = rect.y;
  const rectBottom = rect.y + rect.height;

  return circleLeft >= rectLeft && circleRight <= rectRight && circleTop >= rectTop && circleBottom <= rectBottom;
}
