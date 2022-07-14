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
