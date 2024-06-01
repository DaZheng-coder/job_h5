export const validator = {
  aac147: (idCard) => {
    // 15位或18位身份证号码的正则表达式
    const regex = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/;

    // 18位身份证校验码计算
    function getId18Code(sId) {
      const w = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      const a = "10X98765432";
      let id17 = sId.substring(0, 17);
      let sum = 0;
      for (let i = 0; i < 17; i++) {
        sum += id17.charAt(i) * w[i];
      }
      let id18 = id17 + a.charAt(sum % 11);
      return id18;
    }

    // 如果为18位，则进行校验码验证
    if (idCard.length === 18) {
      const id18Code = getId18Code(idCard.substring(0, 17));
      if (id18Code !== idCard) {
        return false;
      }
    }

    return regex.test(idCard);
  },
  ccc037: (phoneNumber) => {
    const regex = /^1[3-9]\d{9}$/;
    return regex.test(phoneNumber);
  },
};
