export function isRectInsideRect(
  innerRectX: number,
  innerRectY: number,
  innerRectWidth: number,
  innerRectHeight: number,
  outerRectX: number,
  outerRectY: number,
  outerRectWidth: number,
  outerRectHeight: number,
): boolean {
  return (
    innerRectX >= outerRectX &&
    innerRectY >= outerRectY &&
    innerRectX + innerRectWidth <= outerRectX + outerRectWidth &&
    innerRectY + innerRectHeight <= outerRectY + outerRectHeight
  );
}
