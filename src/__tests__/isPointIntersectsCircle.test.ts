import {describe, expect, it} from 'vitest';
import {isPointIntersectsCircle} from '../isPointIntersectsCircle';
import {CollisionsCircle, Point2d} from '../collisions.types';

describe('isPointIntersectsCircle', () => {
  it('Точка внутри окружности', () => {
    const circle: CollisionsCircle = {x: 100, y: 100, radius: 50};
    const point: Point2d = {x: 105, y: 105};

    expect(isPointIntersectsCircle(point, circle)).toEqual(true);
    expect(isPointIntersectsCircle(point, circle)).toEqual(true);
  });

  it('Точка вне окружности', () => {
    const circle: CollisionsCircle = {x: 100, y: 100, radius: 50};
    const point: Point2d = {x: 20, y: 20};

    expect(isPointIntersectsCircle(point, circle)).toEqual(false);
    expect(isPointIntersectsCircle(point, circle)).toEqual(false);
  });
});
