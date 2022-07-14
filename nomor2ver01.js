// nomor 2 versi 1

const cekNum = (num) => {
  try {
    if (!num) {
      // cek input kosong
      throw new Error("input is empty");
    } else if (typeof num != "number") {
      // cek angka atau bukan
      throw new Error("input is not Number");
    } else if (num > 10) {
      // cek apkah lebih dari 10
      throw new Error("Input is too high");
    } else if (num < 6) {
      // cek apakah kurang dari 6
      throw new Error("Input is too low");
    } else {
      for (let i = 1; i <= num; i++) {
        console.log(i);
      }
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
cekNum(10);
