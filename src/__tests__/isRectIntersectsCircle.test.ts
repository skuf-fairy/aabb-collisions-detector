import {describe, expect, it} from 'vitest';
import {isRectIntersectsCircle} from '../detectors/isRectIntersectsCircle';

describe('isRectIntersectsRect', () => {
  it('The rectangle intersects with the circle', () => {
    const square = {x: 100, y: 100, width: 100, height: 50};
    const circle = {x: 75, y: 75, radius: 100};

    expect(
      isRectIntersectsCircle(square.x, square.y, square.width, square.height, circle.x, circle.y, circle.radius),
    ).toEqual(true);
  });

  it('The rectangle does not intersect with the circle', () => {
    const square = {x: 100, y: 100, width: 100, height: 50};
    const circle = {x: 45, y: 45, radius: 20};

    expect(
      isRectIntersectsCircle(square.x, square.y, square.width, square.height, circle.x, circle.y, circle.radius),
    ).toEqual(false);
  });
});
