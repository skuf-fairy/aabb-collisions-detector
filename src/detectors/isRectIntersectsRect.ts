export function isRectIntersectsRect(
  rectAx: number,
  rectAy: number,
  rectAWidth: number,
  rectAHeight: number,
  rectBx: number,
  rectBy: number,
  rectBWidth: number,
  rectBHeight: number,
): boolean {
  return (
    rectAx < rectBx + rectBWidth &&
    rectAx + rectAWidth > rectBx &&
    rectAy < rectBy + rectBHeight &&
    rectAy + rectAHeight > rectBy
  );
}
