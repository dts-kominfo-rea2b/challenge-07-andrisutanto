const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi === "marah") {
      (async () => {
        const totalTheaterIIX = countEmosi(await promiseTheaterIXX(), emosi);
        const totalTheaterVGC = countEmosi(await promiseTheaterVGC(), emosi);

        const total = totalTheaterIIX + totalTheaterVGC
        resolve(total);
      })();
    } else if (emosi === "tidak marah") {
      (async () => {
        const totalTheaterIIX = countEmosi(await promiseTheaterIXX(), emosi);
        const totalTheaterVGC = countEmosi(await promiseTheaterVGC(), emosi);

        const total = totalTheaterIIX + totalTheaterVGC
        resolve(total);
      })();
    } else {
      reject("Emosi Not Found");
    }
  });
}

const countEmosi = (data, emosi) => {
  let count = 0;

  if (emosi == "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        count++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak marah") {
        count++;
      }
    }
  }
  return count;
}
module.exports = {
  promiseOutput,
};
