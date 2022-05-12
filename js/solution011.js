//count by X
function countBy(x, n) {
    let z = [];
    for(let i = x; z.length < n; i += x){
      z.push(i)
    }
    return z
  }

  countBy(1,10)