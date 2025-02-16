let data = [1, 2, 3];
let peta = [4, 5, 6, 7, 8];
let sata = [9, 10];
let meta = [];
let i = 0;
while (i < data.length) {
  meta[i] = data[i];
  i++;
}
while (i >= data.length && i < peta.length + data.length) {
  meta[i] = peta[i - data.length];
  i++;
}
while (
  i >= peta.length + data.length &&
  i < peta.length + data.length + sata.length
) {
  meta[i] = sata[i - (peta.length + data.length)];
  i++;
}

console.log(meta);
