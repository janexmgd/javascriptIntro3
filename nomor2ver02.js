// nomor 2 versi 2

const cekNum = (num) => {
  try {
    // cek input kosong?
    if (num) {
      // cek apakah tipe data number
      if (typeof num == "number") {
        // cek apakah angka 6-10
        if (num <= 10 && num >= 6) {
          for (let i = 1; i <= num; i++) {
            console.log(i);
          }
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
    if (error.message == "Input is too high") {
      for (let i = 1; i <= num; i++) {
        if (i < num) {
          console.log(`${i} ${error.message}`);
        } else {
          console.log(num.toString());
        }
      }
      return;
    }
    if (error.message == "Input is too low") {
      for (let i = 1; i <= num; i++) {
        if (i < num) {
          console.log(`${i} ${error.message}`);
        } else {
          console.log(num.toString());
        }
      }
      return;
    }
    console.log(error.message);
  } finally {
    console.log("Done");
  }
};

cekNum(11);
