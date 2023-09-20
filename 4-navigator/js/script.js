const addressLat = 10;
const addressLong = 8;

const positionLat = 3;
const positionLong = 2;

const pathLat = (addressLat - positionLat) ** 2;
const pathLong = (addressLong - positionLong) ** 2;

const distance =  Math.sqrt(pathLat + pathLong).toFixed(2);

console.log(`Текущее положение:
X=${positionLat} Y=${positionLong}
Пункт назначения находится в точке:
X=${addressLat} Y=${addressLong}
Расстояние между точками: ${distance}`);

