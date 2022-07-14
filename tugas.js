// // nomor 1

// const cekNum = (num) => {
//   try {
//     if (!num) {
//       // cek input kosong
//       throw new Error("input is empty");
//     } else if (typeof num != "number") {
//       // cek angka atau bukan
//       throw new Error("input is not Number");
//     } else if (num > 10) {
//       // cek apakah lebih dari 10
//       throw new Error("Input is too high");
//     } else if (num < 6) {
//       // cek apakah kurang dari 6
//       throw new Error("Input is too low");
//     } else {
//       console.log(num);
//     }
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("Done");
//   }
// };
// cekNum(7);

// nomor 2

// const cekNum = (num) => {
//   try {
//     if (!num) {
//       // cek input kosong
//       throw new Error("input is empty");
//     } else if (typeof num != "number") {
//       // cek angka atau bukan
//       throw new Error("input is not Number");
//     } else if (num > 10) {
//       // cek apkah lebih dari 10
//       throw new Error("Input is too high");
//     } else if (num < 6) {
//       // cek apakah kurang dari 6
//       throw new Error("Input is too low");
//     } else {
//       for (let i = 1; i <= num; i++) {
//         console.log(i);
//       }
//     }
//   } catch (error) {
//     if (error.message == "Input is too high") {
//       for (let i = 1; i <= num; i++) {
//         if (i < num) {
//           console.log(`${i} ${error.message}`);
//         } else {
//           console.log(num.toString());
//         }
//       }
//     }
//     if (error.message == "Input is too low") {
//       for (let i = 1; i <= num; i++) {
//         if (i < num) {
//           console.log(`${i} ${error.message}`);
//         } else {
//           console.log(num.toString());
//         }
//       }
//     }
//   } finally {
//     console.log("Done");
//   }
// };
// cekNum(5);

// nomor 3
// random id

const randomID = (idlength) => {
  return new Promise((resolve, reject) => {
    console.log("-----GET UR RANDOM ID-----");
    setTimeout(() => {
      if (typeof idlength == "number") {
        if (idlength > 0) {
          const abj =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let text = "";
          for (var i = 1; i <= idlength; i++) {
            text = text + abj.charAt(Math.floor(Math.random() * abj.length));
          }
          resolve(text);
        } else {
          reject(new Error("Parameter idlength harus lebih dari 0"));
        }
      } else {
        reject(new Error("parameter idlength harus bertype data number"));
      }
    }, 5000);
  });
};
randomID(3)
  .then((newstr) => {
    console.log(newstr);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("Kode selesai");
  });
