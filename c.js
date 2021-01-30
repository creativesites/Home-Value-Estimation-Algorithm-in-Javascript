const jsonfile = require('jsonfile')

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

  async function readMData(){
      mississaugaNeighbourhoods.map((n)=>{
        const file = `./mississauga/${n}.json`
        jsonfile.readFile(file)
        .then((obj)=>{
            
        })
        .catch(error => console.error(error))
        })
  }
