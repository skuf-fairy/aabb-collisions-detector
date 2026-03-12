export function isCircleInsideCircle(
  innerCircleX: number,
  innerCircleY: number,
  innerCircleR: number,
  outerCircleX: number,
  outerCircleY: number,
  outerCircleR: number,
): boolean {
  const dx = innerCircleX - outerCircleX;
  const dy = innerCircleY - outerCircleY;
  const distanceSquared = dx * dx + dy * dy;

  return distanceSquared <= Math.pow(outerCircleR - innerCircleR, 2);
}
