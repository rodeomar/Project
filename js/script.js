function neighborhood(clean) {
  const cleanArray = clean.toString().split("");
  const doubledCleanArray = [];
  if (cleanArray.length <= 16 && cleanArray.length > 14) {
    for (let i = 0; i < cleanArray.length; i++) {
      if (i % 2 !== 0) {
        let wordDouble = cleanArray[i] * 2
        if (wordDouble > 9) {
          const wordedDouble = wordDouble.toString().split("");
          let word = 0;
          wordedDouble.forEach(function(number) {
            word += parseInt(number)
          })



