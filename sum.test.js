
const {Square,Perimetr, main} = require('./1')

test('площадь ок', () => {
    expect(Square(4,4)).toBe(8)
});

test('периметр ок', () => {
    expect(Perimetr(4,3)).toBe(12)
});
