import {describe, expect, it} from 'vitest';
import {isRectIntersectsRect} from '../isRectIntersectsRect';
import {CollisionsRectangle} from '../collisions.types';

describe('isRectIntersectsRect', () => {
  it('Два прямоугольника пересекаются', () => {
    const squareA: CollisionsRectangle = {x: 100, y: 100, width: 100, height: 50};
    const squareB: CollisionsRectangle = {x: 50, y: 50, width: 150, height: 150};

    expect(isRectIntersectsRect(squareA, squareB)).toEqual(true);
    expect(isRectIntersectsRect(squareB, squareA)).toEqual(true);
  });

  it('Два прямоугольника не пересекаются', () => {
    const squareA: CollisionsRectangle = {x: 100, y: 100, width: 100, height: 50};
    const squareB: CollisionsRectangle = {x: 50, y: 250, width: 50, height: 100};

    expect(isRectIntersectsRect(squareA, squareB)).toEqual(false);
    expect(isRectIntersectsRect(squareB, squareA)).toEqual(false);
  });
});
