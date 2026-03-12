import {describe, expect, it} from 'vitest';
import {isPointIntersectsCircle} from '../detectors/isPointIntersectsCircle';

describe('isPointIntersectsCircle', () => {
  it('A point inside a circle', () => {
    const circle = {x: 100, y: 100, radius: 50};
    const point = {x: 105, y: 105};

    expect(isPointIntersectsCircle(point.x, point.y, circle.x, circle.y, circle.radius)).toEqual(true);
  });

  it('Point outside the circle', () => {
    const circle = {x: 100, y: 100, radius: 50};
    const point = {x: 20, y: 20};

    expect(isPointIntersectsCircle(point.x, point.y, circle.x, circle.y, circle.radius)).toEqual(false);
  });
});
