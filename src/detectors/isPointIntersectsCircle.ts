export function isPointIntersectsCircle(
  pointX: number,
  pointY: number,
  circleX: number,
  circleY: number,
  circleRadius: number,
): boolean {
  if (circleRadius === 0) return false;

  const dx = circleX - pointX;
  const dy = circleY - pointY;

  return dx * dx + dy * dy <= circleRadius * circleRadius;
}
