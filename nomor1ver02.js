// nomor 1 versi 2

const cekNum = (num) => {
  try {
    // cek input kosong?
    if (num) {
      // cek apakah tipe data number
      if (typeof num == "number") {
        // cek apakah angka 6-10
        if (num <= 10 && num >= 6) {
          console.log(num);
        } else if (num > 10) {
          throw new Error("Input is too high");
        } else if (num < 6) {
          throw new Error("Input is too low");
        }
      } else {
        throw new Error("input is not Number");
      }
    } else {
      throw new Error("input is empty");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Done");
  }
};

cekNum(10);
