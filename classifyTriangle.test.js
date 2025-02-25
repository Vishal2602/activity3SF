const classifyTriangle = require('./classifyTriangle');

describe('Triangle Classification Tests', () => {
  // Boundary Value Tests (BVT)
  describe('Boundary Value Tests', () => {
    // Tests for minimum valid value (1)
    test('BVT: should classify triangle with minimum valid values', () => {
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
    });

    test('BVT: should return error for value below minimum (0)', () => {
      expect(classifyTriangle(0, 1, 1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(1, 0, 1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(1, 1, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // Tests for maximum valid value (200)
    test('BVT: should classify triangle with maximum valid value', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
    });

    test('BVT: should return error for value above maximum (201)', () => {
      expect(classifyTriangle(201, 200, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200, 201, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(200, 200, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    test('BVT: should classify triangle with values near minimum (2)', () => {
      expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
    });

    test('BVT: should classify triangle with values near maximum (199)', () => {
      expect(classifyTriangle(199, 199, 199)).toBe('Equilateral');
    });

    test('BVT: should classify triangle with mixed boundary values', () => {
      expect(classifyTriangle(1, 2, 2)).toBe('Isosceles');
      expect(classifyTriangle(199, 199, 198)).toBe('Isosceles');
    });
  });

  // Equivalence Class Tests (ECP)
  describe('Equivalence Class Tests', () => {
    // Valid Equilateral Triangles
    test('ECP: should classify valid equilateral triangle', () => {
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
    });

    // Valid Isosceles Triangles
    test('ECP: should classify valid isosceles triangle', () => {
      expect(classifyTriangle(50, 50, 30)).toBe('Isosceles');
      expect(classifyTriangle(30, 50, 50)).toBe('Isosceles');
      expect(classifyTriangle(50, 30, 50)).toBe('Isosceles');
    });

    // Valid Scalene Triangles
    test('ECP: should classify valid scalene triangle', () => {
      expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
      expect(classifyTriangle(5, 12, 13)).toBe('Scalene');
    });

    // Invalid Triangles (sum of two sides ≤ third side)
    test('ECP: should identify invalid triangles', () => {
      expect(classifyTriangle(2, 3, 5)).toBe('Not a Triangle');
      expect(classifyTriangle(5, 2, 3)).toBe('Not a Triangle');
      expect(classifyTriangle(3, 5, 2)).toBe('Not a Triangle');
    });

    // Mid-range valid triangles
    test('ECP: should classify mid-range valid triangles', () => {
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
      expect(classifyTriangle(100, 100, 50)).toBe('Isosceles');
      expect(classifyTriangle(60, 80, 100)).toBe('Scalene');
    });

    // Tests for triangle inequality theorem
    test('ECP: should verify triangle inequality theorem', () => {
      expect(classifyTriangle(10, 20, 30)).toBe('Not a Triangle');
      expect(classifyTriangle(100, 50, 40)).toBe('Not a Triangle');
    });

    // Tests with valid but close to invalid combinations
    test('ECP: should classify triangles with sides close to invalid combinations', () => {
      expect(classifyTriangle(10, 6, 5)).toBe('Scalene');
      expect(classifyTriangle(15, 8, 8)).toBe('Isosceles');
    });
  });

  // Additional Edge Cases
  describe('Edge Cases', () => {
    test('ECP: should handle valid triangles with minimal difference in sides', () => {
      expect(classifyTriangle(100, 99, 98)).toBe('Scalene');
      expect(classifyTriangle(50, 50, 49)).toBe('Isosceles');
    });

    test('BVT: should handle boundary cases with valid triangle conditions', () => {
      expect(classifyTriangle(2, 3, 4)).toBe('Scalene');
      expect(classifyTriangle(198, 199, 200)).toBe('Scalene');
    });
  });
});
