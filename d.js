const {RandomForestRegression} = require('ml-random-forest');
const jsonfile = require('jsonfile')

let dataset
let td = [[2,2,4,8,2499]]
 
const file = `./condoTrainingData/Lorne Park.json`
jsonfile.readFile(file)
.then((obj)=>{
    dataset = obj
})

.catch(error => console.error(error))
function getAccuracy(
  predictions,
  target
) {
  const nSamples = predictions.length;
  let nCorrect = 0;
  predictions.forEach((val, idx) => {
      if (val == target[idx]) {
          nCorrect++;
      }
  });
  return nCorrect / nSamples;
}

 setTimeout(() => {
    const trainingSet = new Array(dataset.length);
    const predictions = new Array(dataset.length);
     
    for (let i = 0; i < dataset.length; ++i) {
      trainingSet[i] = dataset[i].slice(0, 5);
      predictions[i] = dataset[i][5];
    }
     
    const options = {
      seed: 3,
      maxFeatures: 2,
      replacement: false,
      nEstimators: 200
    };
     
    const regression = new RandomForestRegression(options);
    regression.train(trainingSet, predictions);
    const serialized = regression;
    const file = `./model.json`
    jsonfile.writeFile(file, serialized)
    .then(res => {
        console.log('Write complete')
    })
    .catch(error => console.error(error))
    const result = regression.predict(td);
    console.log(parseInt(result))
    console.log(`Accuracy: ${getAccuracy(result, predictions)}`)
 }, 2000);       
