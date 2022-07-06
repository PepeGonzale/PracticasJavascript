
function billboard(name, price = 30){
  let coste = 0
  let juntar = name.split(' ').join()
  for (let i = 0; i < name.length;i++){
    coste += 30
  }
  return coste
  console.log(coste)
} 
billboard("Pepe")