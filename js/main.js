function sumTriangularNumbers(n) {
    let arr = [];
     let current = 1;
   for(let i = 2; i <= n + 1; ++i){
     arr.push(current);
     current += i;
   }
    return arr.reduce((sum, current) => sum += current, 0);
  }