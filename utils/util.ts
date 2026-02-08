export function encrypt(s: string) {
  let msg = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      msg += String.fromCharCode(((char.charCodeAt(0) - 97 + 5) % 26) + 97);
    }
  }
  return msg;
}

export function decrypt(s: string) {
  let word = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      word += String.fromCharCode(
        ((char.charCodeAt(0) - 97 - 5 + 26) % 26) + 97,
      );
    }
  }
  return word;
}
