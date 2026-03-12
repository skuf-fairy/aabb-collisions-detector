import {squaredDistance} from '../collisions.utils';

// https://stackoverflow.com/questions/401847/circle-rectangle-collision-detection-intersection
export function isRectIntersectsCircle(
  rectX: number,
  rectY: number,
  rectWidth: number,
  rectHeight: number,
  circleX: number,
  circleY: number,
  circleRadius: number,
): boolean {
  const circleDistanceX = Math.abs(circleX - (rectX + rectWidth / 2));
  const circleDistanceY = Math.abs(circleY - (rectY + rectHeight / 2));

  if (circleDistanceX > rectWidth / 2 + circleRadius) return false;

  if (circleDistanceY > rectHeight / 2 + circleRadius) return false;

  if (circleDistanceX <= rectWidth / 2) return true;

  if (circleDistanceY <= rectHeight / 2) return true;

  const squaredCornerDistance = squaredDistance(circleDistanceX, rectWidth / 2, circleDistanceY, rectHeight / 2);

  return squaredCornerDistance <= Math.pow(circleRadius, 2);
}
