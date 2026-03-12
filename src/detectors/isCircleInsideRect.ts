export function isCircleInsideRect(
  circleX: number,
  circleY: number,
  circleRadius: number,
  rectX: number,
  rectY: number,
  rectWidth: number,
  rectHeight: number,
): boolean {
  const circleLeft = circleX - circleRadius;
  const circleRight = circleX + circleRadius;
  const circleTop = circleY - circleRadius;
  const circleBottom = circleY + circleRadius;

  const rectLeft = rectX;
  const rectRight = rectX + rectWidth;
  const rectTop = rectY;
  const rectBottom = rectY + rectHeight;

  return circleLeft >= rectLeft && circleRight <= rectRight && circleTop >= rectTop && circleBottom <= rectBottom;
}
