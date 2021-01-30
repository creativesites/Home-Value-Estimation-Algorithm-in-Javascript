const axios = require('axios')
const jsonfile = require('jsonfile')
var options = { 
    method: 'GET',
    headers: { 'repliers-api-key': 'FHm4VSqMMQEHpN5JRQYQGB2qQ3skdk' },
};

let mississaugaNeighbourhoods = [
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
  
/* axios.get(`https://api.repliers.io/listings/?area=Peel&city=Mississauga&neighborhood=East%20Credit&streetName=Princelea&resultsPerPage=100&type=sale&status=U&lastStatus=Sld`, options)
.then((res)=>{
    let d = res.data
    let e = d.count
    let f = d.listings
    let g = f[0]
    //console.log(JSON.stringify(g))
    console.log(g)
    console.log(e)
})
.catch((err)=>{
    console.log(err)
}) */
let dataset = []
async function getMissisaugaData(){
    
    mn.map(async (n)=>{
        await axios.get(`https://api.repliers.io/listings/archived/?area=Peel&city=Mississauga&neighborhood=${n}&class=condo&resultsPerPage=100&type=sale&status=U&lastStatus=Sld`, options)
        .then((res)=>{
            let d = res.data
            let e1 = d.count
            let e = d.listings
            //let g = f[0]
            //console.log(JSON.stringify(g))
            console.log(n)
            console.log(e1)
            
            const file = `./mississauga/archived/condo/${n}.json`
            jsonfile.writeFile(file, e)
            .then(res => {
                console.log('Write complete')
            })
            .catch(error => console.error(error))
            
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    
    
}

async function saveFile(){
    //await getMissisaugaData().then(async ()=>{   
    //})
    const file = `./mississaugaCondos.json`
        const obj = dataset
        
        jsonfile.writeFile(file, obj)
        .then(res => {
            console.log('Write complete')
        })
        .catch(error => console.error(error))
    
    
}
getMissisaugaData()
/* setTimeout(() => {
    saveFile()
}, 20000); */