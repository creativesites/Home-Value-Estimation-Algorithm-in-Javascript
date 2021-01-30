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
  async function makeCondoObject(){
    mn.map((k)=>{
        const file = `./mississauga/archived/res/${k}.json`
        jsonfile.readFile(file)
        .then((m)=>{
            m.map((f)=>{
                let g = f.soldPrice;
                let l = f.details.numBedrooms;
                let m = f.details.numBathrooms;
                let n = f.details.numRooms;
                let aa = f.details.numParkingSpaces;
                let bb = f.address.neighborhood
                let cc = f.details.swimmingPool
                let k = f.lot.depth
                let o = f.lot.width
                let p = (parseInt(k) * parseInt(o))
                let arr = [bb, cc, parseInt(aa), parseInt(l), parseInt(m),parseInt(n), parseInt(aa), parseInt(p), parseInt(g)];
                dataset.push(arr)
                console.log(dataset)
                
            })
        })
        .catch(error => console.error(error))
    })
  }
makeCondoObject()
  async function saveFile(){
    //await getMissisaugaData().then(async ()=>{   
    //})
    const file = `./mississaugaArchivedRes.json`
        const obj = dataset
        
        jsonfile.writeFile(file, obj)
        .then(res => {
            console.log('Write complete')
        })
        .catch(error => console.error(error))
    
    
}


setTimeout(() => {
    saveFile()
}, 90000); 