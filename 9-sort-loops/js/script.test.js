const sort = require('./script');


describe('Test sort', () => {
    test('Test unsorted array', () => {
        expect(sort([1, 40, -5, 10, 0])).toEqual([-5, 0, 1, 10, 40]);
    });

    test('Test sorted array #1', () => {
        expect(sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Test sorted array #2', () => {
        expect(sort([-2, -1, 0, 1, 2])).toEqual([-2, -1, 0, 1, 2]);
    });

    test('Test sorted array #3', () => {
        expect(sort([3, 3, 3, 2, 2, 2, 1, 1, 1])).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3]);
    })

    test('Test empty array', () => {
        expect(sort([])).toEqual([]);
    });
});