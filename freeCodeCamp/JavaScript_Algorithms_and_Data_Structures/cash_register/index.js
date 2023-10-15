function checkCashRegister(price, cash, cid) {
    const cidCopy = JSON.parse(JSON.stringify(cid));
    const revCid = cidCopy.reverse();
  
    const currencyVal = {
      "ONE HUNDRED": 100,
      "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.1,
      "NICKEL": 0.05,
      "PENNY": 0.01
    }
  
    const cidSum = cid.reduce((acc, val) => {
      if (!isNaN(acc + val[1])) {
        return acc + val[1];
      }
    }, 0);
  
    function convertDollarToCent(val) {
      if (!Array.isArray(val) && typeof val === "object") {
        const currencyValCopy = { ...val };
  
        for (let dollar in currencyValCopy) {
          currencyValCopy[dollar] *= 100;
        }
        return currencyValCopy;
      }
      if (Array.isArray(val)) {
        const currencyValCopy = [...val];
  
        currencyValCopy.forEach(dollar => {
          return dollar[1] *= 100;
        });
        return currencyValCopy;
      }
      else {
        return val * 100;
      }
    }
    const centPrice = convertDollarToCent(price);
    const centCash = convertDollarToCent(cash);
    const centUnit = convertDollarToCent(currencyVal);
    const centRevCid = convertDollarToCent(revCid);
    const centCidSum = convertDollarToCent(cidSum);
    let change = centCash - centPrice;
  
    let changeObj = {}
  
    function calculateChange() {
      for (let unit in centUnit) {
        centRevCid.forEach(amount => {
          if (amount[1] >= centUnit[unit] && amount[0] === unit) {
            while (change - centUnit[unit] >= 0 && amount[1]) {
  
              if (Object.keys(changeObj).length === 0 && changeObj.constructor === Object) {
                changeObj[unit] = centUnit[unit];
              } else {
                if (changeObj.hasOwnProperty(unit)) {
                  changeObj[unit] += centUnit[unit];
                }
                if (!changeObj.hasOwnProperty(unit)) {
                  changeObj[unit] = centUnit[unit];
                }
              }
  
              change -= centUnit[unit];
              amount[1] -= centUnit[unit];
            }
          }
        });
      }
  
      let changeArr = Object.entries(changeObj);
  
      changeArr.forEach(cent => {
        return cent[1] /= 100;
      });
  
      return changeArr;
    }
  
    let sumChangeArr = calculateChange()
      .reduce((acc, val) => {
        if (!isNaN(acc + val[1])) {
          return acc + val[1] * 100;
        }
      }, 0);
  
    if (change < 0 || centCidSum - change < 0 || change > sumChangeArr) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (centCidSum === sumChangeArr) {
      return { status: "CLOSED", change: cid };
    } else {
      return { status: "OPEN", change: calculateChange() };
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));