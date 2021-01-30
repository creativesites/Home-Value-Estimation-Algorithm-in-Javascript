const IrisDataset = require("ml-dataset-iris");
//import { DecisionTreeClassifier as DTClassifier } from "ml-cart";
const { RandomForestClassifier  } = require("ml-random-forest");



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

const trainingSet = IrisDataset.getNumbers();
const predictions = IrisDataset.getClasses().map((elem) =>
  IrisDataset.getDistinctClasses().indexOf(elem)
);

const options = {
  seed: 3,
  maxFeatures: 0.8,
  replacement: true,
  nEstimators: 25
};

const classifier = new RandomForestClassifier(options);
classifier.train(trainingSet, predictions);
const result = classifier.predict(trainingSet);
const oobResult = classifier.predictOOB();
const confusionMatrix = classifier.getConfusionMatrix();
console.log(`Accuracy: ${getAccuracy(result, predictions)}`);