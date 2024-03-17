const createBetJson = ( [ com1, com2, com3, com4, com5, com6 ], [ cf1, cf2, cf3 ], [ resType1, resType2, resType3 ], sum, [ min_lost_1, min_lost_2, min_lost_3 ], [ typeBetEven_1, typeBetEven_2, typeBetEven_3 ], typeBet, totalSum ) => {    
    
    return `{
        "comands": [
            { 
                "comands_name": [ ["${com1}", "${com2}"] , "${typeBetEven_1}"], 
                "cf": "${cf1}", 
                "date": "",
                "res": { "${min_lost_1}": "${resType1}" }
            },
            { 
                "comands_name": [ ["${com3}", "${com4}"] , "${typeBetEven_2}"],
                "cf": "${cf2}",
                "date": "",
                "res": { "${min_lost_2}": "${resType2}"}
            },
            { 
                "comands_name": [ ["${com5}", "${com6}"] , "${typeBetEven_3}" ],
                "cf": "${cf3}",
                "date": "",
                "res": { "${min_lost_3}": "${resType3}" } 
            }
        ],
        "totalSum": "${totalSum}", 
    
        "type": "${typeBet}",
        "sum": "${sum}"
      }`
  
}

export const stringToJson = (arr) => {
    const arrBets = [] 

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].dataBet;
        const id = arr[i].id
        arrBets.push(  { id: id, dataBet: JSON.parse(element) } ) 

    }
    return arrBets
  
}

export const joinHelperForm = ( valuesForm ) => {

  const comands = []
  const cf = []
  const resType = []
  const min_lost_arr = []
  const typeBetEventArr = []
  let sum
  let typeBet


  for (let key in valuesForm ) {
    const element = valuesForm[key];
    
    if ( key.includes("sum") ) {
      sum = element
    }

    if ( key.includes("comand") ) {
      comands.push( element )
    }

    if ( key.includes("cf") ) {
      cf.push( element )
    }

    if ( key.includes("Mas/Menos") ) {
      resType.push( element )
    }

    if (key.includes("res")) {
        min_lost_arr.push( element )
    }

    if (key.includes("typeBetEvent") ) {
        typeBetEventArr.push( element )
    }

    if (key.includes("triples_or_no")) {
        typeBet = element
    }

  }

  const totalSum = totalSumBet( cf, sum )

  return { dataBet: createBetJson( comands, cf, resType, sum, min_lost_arr, typeBetEventArr, typeBet, totalSum ), sum: Number.parseFloat(sum) }

}

export const splitToDigits = (number) => {
  
  function fn_help(num) {

    const res = []
    let length = 0
    while (num) {
      res.push(num % 10);
      num = Math.floor(num/10);
      length++
    }
    res.reverse()

    if (length === 3) {
      return `${res[0]},${res[1]}${res[2]}}`
    }
    if (length === 4) {
      return `${res[0]}.${res[1]}${res[2]}${res[3]}`
    }
    if (length === 5) {
      return `${res[0]}${res[1]}.${res[2]}${res[3]}${res[4]}`
    }
    if (length === 6) {
      return `${res[0]}${res[1]}${res[2]}.${res[3]}${res[4]}${res[5]}`
    }


  }
  const cel = Math.trunc( number )

  let dr = (number - cel) > 0 ? (number - cel) : '00'
  const cel_res = fn_help( Math.trunc(number) )

  if ( String(dr).length === 3 ) {
    dr += '0'
  } else if (String(dr).length > 3){
    const newDr = String(dr).slice(2,4)
    dr = newDr
  }

  return `${cel_res},${dr}`;
}

export const totalSumBet = ( cf_arr, sum ) => {
  let cf = 1;

  cf_arr.reduce( (acc, el) => cf = acc * (+el) , cf )

  const rounded = number => +number.toFixed(2) 

  const res = rounded( cf * ( Number.parseFloat(sum) ) )
  const totalSum = Math.trunc( res )

  let dr = String( rounded( res - totalSum ) ).split(".")[1]

  if (!dr) {
    dr = "00"
  } else if (dr.length !== 2) {
    dr += "0"
  }


  return `${totalSum}.${dr}`

}