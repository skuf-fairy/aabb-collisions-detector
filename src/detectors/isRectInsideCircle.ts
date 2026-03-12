export function isRectInsideCircle(
  rectX: number,
  rectY: number,
  rectWidth: number,
  rectHeight: number,
  circleX: number,
  circleY: number,
  circleRadius: number,
): boolean {
  const rectCenterX = rectX + rectWidth / 2;
  const rectCenterY = rectY + rectHeight / 2;

  const dx = rectCenterX - circleX;
  const dy = rectCenterY - circleY;
  const distanceSquared = dx * dx + dy * dy;

  return distanceSquared <= Math.pow(circleRadius - Math.max(rectWidth, rectHeight) / 2, 2);
}
