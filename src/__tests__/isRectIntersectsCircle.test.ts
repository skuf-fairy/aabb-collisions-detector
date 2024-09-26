import {describe, expect, it} from 'vitest';
import {isRectIntersectsCircle} from '../isRectIntersectsCircle';
import {CollisionsRectangle, CollisionsCircle} from '../collisions.types';

describe('isRectIntersectsRect', () => {
  it('Прямоугольник пересекается с окружностью', () => {
    const square: CollisionsRectangle = {x: 100, y: 100, width: 100, height: 50};
    const circle: CollisionsCircle = {x: 75, y: 75, radius: 100};

    expect(isRectIntersectsCircle(square, circle)).toEqual(true);
    expect(isRectIntersectsCircle(square, circle)).toEqual(true);
  });

  it('Прямоугольник не пересекается с окружностью', () => {
    const square: CollisionsRectangle = {x: 100, y: 100, width: 100, height: 50};
    const circle: CollisionsCircle = {x: 45, y: 45, radius: 20};

    expect(isRectIntersectsCircle(square, circle)).toEqual(false);
    expect(isRectIntersectsCircle(square, circle)).toEqual(false);
  });
});
