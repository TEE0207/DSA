let n = -1234

const intergerN = function (n) {

  let nCopy = n 
   
  let rev = 0

  n = Math.abs(n)

  while (n > 0) {

    let rem = n % 10

    rev = (10 * rev) + rem

    n = Math.floor(n / 10)

  }

  return (nCopy < 0 ) ? - rev : rev
}

let result = intergerN(n)

console.log(result)