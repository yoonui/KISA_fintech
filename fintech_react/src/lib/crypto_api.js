const { createHash, createCipheriv } = require('crypto');

const makeHashValue = () => {
    const hash = createHash("sha256");
    const input ="test.js";
    console.log(hash.update(input).digest("base64"));
}

const makeAES = (planeText) => {
    const key = "wSXAOXoEXadXoMYAz/rrXXAzmSEramYO"
    const iv = "Ea1jnawDX/Ajuauu";

    const AESChipher = createCipheriv('aes-256-cbc', key, iv);
    let encrytedData = AESChipher.update(planeText, "utf-8", "base64");
    encrytedData += AESChipher.final("base64");
    
    return encrytedData;
}

export default {
    makeAES,
    makeHashValue,
};