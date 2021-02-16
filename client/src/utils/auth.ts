// import CryptoJS from "crypto-js";
export const authAction = {
  get: () => localStorage.getItem("Authorization"),
  set: (state: any) => {
    localStorage.setItem("Authorization", "Bearer " + state);
  },
  remove: () => {
    localStorage.removeItem("Authorization");
  },
};
// /**
//  *加密
//  */
// export const encrypt = (word: string) => {
//   const key = CryptoJS.enc.Utf8.parse("efgabcd12abcdefg");
//   const srcs = CryptoJS.enc.Utf8.parse(word);
//   const encrypted = CryptoJS.AES.encrypt(srcs, key, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7,
//   });
//   return encrypted.toString();
// };
// /**
//  *解密
//  */
// export const decrypt = (word: string) => {
//   const key = CryptoJS.enc.Utf8.parse("efgabcd12abcdefg");
//   const decrypt = CryptoJS.AES.decrypt(word, key, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7,
//   });
//   return CryptoJS.enc.Utf8.stringify(decrypt).toString();
// };
