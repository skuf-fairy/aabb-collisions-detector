import {isPointIntersectsCircle} from './isPointIntersectsCircle';

export function isCircleIntersectsLine(
  circleX: number,
  circleY: number,
  circleRadius: number,
  lineP1X: number,
  lineP1Y: number,
  lineP2X: number,
  lineP2Y: number,
): boolean {
  // check to see if start or end points lie within circle
  if (isPointIntersectsCircle(lineP1X, lineP1Y, circleX, circleY, circleRadius)) {
    return true;
  }
  if (isPointIntersectsCircle(lineP2X, lineP2Y, circleX, circleY, circleRadius)) {
    return true;
  }

  const x1 = lineP1X,
    y1 = lineP1Y,
    x2 = lineP2X,
    y2 = lineP2Y,
    cx = circleX,
    cy = circleY;

  // vector d
  const dx = x2 - x1;
  const dy = y2 - y1;

  // vector lc
  const lcx = cx - x1;
  const lcy = cy - y1;

  // project lc onto d, resulting in vector p
  const dLen2 = dx * dx + dy * dy; //len2 of d
  let px = dx;
  let py = dy;

  if (dLen2 > 0) {
    const dp = (lcx * dx + lcy * dy) / dLen2;
    px *= dp;
    py *= dp;
  }

  const nearest = {
    x: x1 + px,
    y: y1 + py,
  };

  //len2 of p
  const pLen2 = px * px + py * py;

  //check collision
  return (
    isPointIntersectsCircle(nearest.x, nearest.y, circleX, circleY, circleRadius) &&
    pLen2 <= dLen2 &&
    px * dx + py * dy >= 0
  );
}
