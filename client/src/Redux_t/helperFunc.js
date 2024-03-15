const createBetJson = ( [ com1, com2, com3, com4, com5, com6 ], [ cf1, cf2, cf3 ], [ resType1, resType2, resType3 ], sum, [ min_lost_1, min_lost_2, min_lost_3 ], [ typeBetEven_1, typeBetEven_2, typeBetEven_3 ], typeBet ) => {    
    
    return `{
        "comands": [
            { 
                "comands_name": [ ["${com1}", "${com2}"] , "${typeBetEven_1}"], 
                "cf": "${cf1}", 
                "date": "",
                "res": { "${min_lost_1}": "${resType1}" }
            },
            { 
                "comands_name": [ ["${com3}", "${com4}"], "${typeBetEven_2}"],
                "cf": "${cf2}",
                "date": "",
                "res": { "${min_lost_2}": "${resType2}"}
            },
            { 
                "comands_name": [ ["${com5}", "${com6}"], "${typeBetEven_3}" ],
                "cf": "${cf3}",
                "date": "",
                "res": { "${min_lost_3}": "${resType3}" } 
            }
        ], 
    
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

export const joinHelperForm = ( formdata ) => {

  const comands = []
  const cf = []
  const resType = []
  const min_lost_arr = []
  const typeBetEventArr = []
  let sum
  let typeBet


  for (let key in formdata.contact.values ) {
    const element = formdata.contact.values[key];
    
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

  return { dataBet: createBetJson( comands, cf, resType , sum, min_lost_arr, typeBetEventArr, typeBet ) }

}



