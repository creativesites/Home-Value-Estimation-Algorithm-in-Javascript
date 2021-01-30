const jsonfile = require('jsonfile')


  let mn = [
    'Airport Corporate',  'Applewood',
    'Central Erin Mills', 'Churchill Meadows',
    'City Centre',        'Clarkson',
    'Cooksville',         'Creditview',
    'Dixie',              'East Credit',
    'Erin Mills',         'Erindale',
    'Fairview',           'Hurontario',
    'Lakeview',           'Lisgar',
    'Lorne Park',         'Malton',
    'Meadowvale',         'Meadowvale Village',
    'Mineola',            'Mississauga Valleys',
    'Northeast',          'Port Credit',
    'Rathwood',           'Sheridan',
    'Sheridan Park',      'Southdown',
    'Streetsville'
  ]
  let dataset = []
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  async function makeCondoObject(){
    
     mn.map(async (k)=>{
        const file = `./mississauga/condo/${k}.json`
        let dataset1 = []
        await sleep(3000)
        jsonfile.readFile(file)
        .then(async (m)=>{
          
             m.map(async (f)=>{
              
              let g = f.soldPrice;
              let l = f.details.numBedrooms;
              let m = f.details.numBathrooms;
              let n = f.details.numRooms;
              let aa = f.details.numParkingSpaces;
              let bb = f.address.neighborhood
              //let cc = f.details.swimmingPool
              let y;
              let x = f.details.sqft;
              if(x.length === 7){y = x.slice(4)}if(x.length === 9){y = x.slice(5)}
              if(y !== null && y !== undefined) {
                  // do something
                  let arr = [ parseInt(aa), parseInt(l), parseInt(m),parseInt(n), parseInt(y), parseInt(g)];
                  dataset1.push(arr)
                  console.log(dataset1)
              }
              
          })
          
            
        })
        .catch(error => console.error(error))
        setTimeout(async() => {
          const file = `./condoTrainingData/${k}.json`
          const obj = dataset1
          
          await jsonfile.writeFile(file, obj)
          .then(res => {
              console.log('Write complete')
          })
          .catch(error => console.error(error))
        }, 1000);
          
        
    })
  
  }
makeCondoObject()
  async function saveFile(){
    //await getMissisaugaData().then(async ()=>{   
    //})
      const file = `./mississaugaCondos1.json`
        const obj = dataset
        
        jsonfile.writeFile(file, obj)
        .then(res => {
            console.log('Write complete')
        })
        .catch(error => console.error(error))
    
    
}

const doSomething = async () => {
  for (const item of mn) {
    await sleep(1000)
    console.log('🦄')    
  }
}
 