// nomor 2 versi 2

const cekNum = (num) => {
  try {
    // cek input kosong?
    if (num) {
      // cek apakah tipe data number
      if (typeof num == "number") {
        // perulangan
        for (let i = 1; i <= num; i++) {
          if (i <= 10 && i >= 6) {
            console.log(i.toString());
          } else if (i > 10) {
            console.log(`${i} Input is too high`);
          } else if (i < 6) {
            console.log(`${i} Input is too low`);
          }
        }
      } else {
        throw new Error("input is not Number");
      }
    } else {
      throw new Error("input is empty");
    }
  } catch (err) {
    console.log(err.message);
  }
};

cekNum(12);
