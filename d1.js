const {RandomForestRegression} = require('ml-random-forest');
const jsonfile = require('jsonfile')

let dataset
let td = [["Port Credit",2,2,2,6,2,1999]]
 
const file = `./model.json`
jsonfile.readFile(file)
.then((obj)=>{
    dataset = obj
})
.catch(error => console.error(error))


// later, in another process
setTimeout(() => {
    const classifier = RandomForestRegression.load(dataset);
    const result = classifier.predict(td);
    console.log(parseInt(result))   
}, 2000);
