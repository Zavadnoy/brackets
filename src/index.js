module.exports = function check(str, bracketsConfig) {
  // your solution
  let oc = '';
  let cc = '';
  let pc = {};
  strRes = '';
  for (let i = 0; i < bracketsConfig.length; i++) {
    oc = oc + bracketsConfig[i][0];
    cc = cc + bracketsConfig[i][1];
    pc[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (let i = 0; i < str.length; i++) {
    if (oc.includes(str[i]) ) {
      if (str[i] == pc[str[i]] && strRes[strRes.length-1] == str[i]){
        strRes = strRes.slice(0,strRes.length-1);
        continue;
      } else {
        strRes = strRes + str[i];
        continue;
      }
    };

    if (cc.includes(str[i]) ) {
      if (pc[str[i]]==strRes[strRes.length-1]){
        strRes = strRes.slice(0,strRes.length-1);
      } else {
        return false;
      };
    };
  }
  return !Boolean(strRes.length);
}