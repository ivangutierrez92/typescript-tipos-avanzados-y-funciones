// Nico => [N, i, c, o] => string => string[]
// [N, i, c, o] => Nico => string[] => string

export function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join("");
  } else {
    return input.split("");
  }
}

const rtaArray = parseStr("Nico");
const rtaString = parseStr(["N", "i", "c", "o"]);

console.log("rtaArray", rtaArray);
console.log("rtaString", rtaString);
