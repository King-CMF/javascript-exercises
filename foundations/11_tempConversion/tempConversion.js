const convertToCelsius = function(temp1) {
  let temp = (temp1 - 32) / 1.8;
  let final = "";
  temp = String(temp);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == ".") {
      let first = i + 1;
      let second = i + 2;

      for (let x = 0; x <= first; x++) {
        final = final + temp[x];
      }

      if (Number(temp[second]) >= 5) {
        let last = Number(final[final.length - 1]);
        last = last + 1;
        final = final.slice(0, final.length - 1) + last;
      }

      return Number(final);
    }
  }

  return Number(temp);
};

const convertToFahrenheit = function(temp1) {
  let temp = (temp1 * 1.8) + 32;
  let final = "";
  temp = String(temp);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == ".") {
      let first = i + 1;
      let second = i + 2;

      for (let x = 0; x <= first; x++) {
        final = final + temp[x];
      }

      if (Number(temp[second]) >= 5) {
        let last = Number(final[final.length - 1]);
        last = last + 1;
        final = final.slice(0, final.length - 1) + last;
      }

      return Number(final);
    }
  }

  return Number(temp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
