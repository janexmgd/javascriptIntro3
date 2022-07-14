// nomor 1 versi 2

const cekNum = (num) => {
  try {
    if (!num) {
      // cek input kosong
      throw new Error("input is empty");
    } else if (typeof num != "number") {
      // cek angka atau bukan
      throw new Error("input is not Number");
    } else if (num > 10) {
      // cek apakah lebih dari 10
      throw new Error("Input is too high");
    } else if (num < 6) {
      // cek apakah kurang dari 6
      throw new Error("Input is too low");
    } else {
      console.log(num);
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Done");
  }
};
cekNum(10);
