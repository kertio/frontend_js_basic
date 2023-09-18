const addressLat = 10;
const addressLong = 8;

const positionLat = 3;
const positionLong = 2;

const pathLat = addressLat - positionLat;
const pathLong = addressLong - positionLong;

console.log(`Текущее положение:
${positionLat}:${positionLong}
Пункт назначения находится на расстоянии:
${pathLat}:${pathLong}`);

