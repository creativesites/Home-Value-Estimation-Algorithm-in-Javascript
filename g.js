const jsonfile = require('jsonfile')
const axios = require('axios')
var options = { 
    method: 'GET',
    headers: { 'repliers-api-key': 'FHm4VSqMMQEHpN5JRQYQGB2qQ3skdk' },
};
const file = `./areas.json`
        jsonfile.readFile(file)
        .then((obj)=>{
            let a = obj.boards[0].classes[0].areas
            setInterval(() => {
                a.map((e)=>{
                    let areaName = e.name
                    let cities = e.cities
                    cities.map(async (f)=>{
                        let cityName = f.name
                        let neighborhoods = f.neighborhoods
                        let nCount = neighborhoods.count
                        if(nCount == 0){
                            await axios.get(`https://api.repliers.io/listings?area=${areaName}&city=${cityName}&class=condo&resultsPerPage=100&type=sale&status=U&lastStatus=Sld`, options)
                            .then((res)=>{
                                let d = res.data
                                let e1 = d.count
                                let e2 = d.listings
                                //let g = f[0]
                                //console.log(JSON.stringify(g))
                                console.log(cityName)
                                console.log(e1)
                                if(e1 != 0){
                                    const file = `./condoAreas/recent/condo/${cityName}.json`
                                    jsonfile.writeFile(file, e2)
                                    .then(res => {
                                        console.log('Write complete')
                                    })
                                    .catch(error => console.error(error))
                                }
                                
                                
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
                        }
                        else{
                            neighborhoods.map(async (g)=>{
                                let neighborhoodName = g.name
                                await axios.get(`https://api.repliers.io/listings?area=${areaName}&city=${cityName}&neighborhood=${neighborhoodName}&class=condo&resultsPerPage=100&type=sale&status=U&lastStatus=Sld`, options)
                                .then((res)=>{
                                    let d1 = res.data
                                    let e11 = d.count
                                    let e21 = d.listings
                                    //let g = f[0]
                                    //console.log(JSON.stringify(g))
                                    console.log(neighborhoodName)
                                    console.log(e11)
                                    if(e1 != 0){
                                        const file = `./condoAreas/recent/condo/${neighborhoodName}.json`
                                        jsonfile.writeFile(file, e21)
                                        .then(res => {
                                            console.log('Write complete')
                                        })
                                        .catch(error => console.error(error))
                                    }
                                    
                                    
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            })
                        }
                        
                    })
                })
            }, 240000);
            
        })
        .catch(error => console.error(error))
        