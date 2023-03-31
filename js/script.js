function neighborhood(clean) {
  const cleanArray = clean.toString().split("");
  const doubledCleanArray = [];
  if (cleanArray.length <= 16 && cleanArray.length > 14) {
    for (let i = 0; i < cleanArray.length; i++) {



