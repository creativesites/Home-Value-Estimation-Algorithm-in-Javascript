const brain = require('brain.js');

const net = new brain.recurrent.LSTMTimeStep({
  inputSize: 8,
  hiddenLayers: [10],
  outputSize: 1,
});

// Same test as previous, but combined on a single set
const trainingData = [
  [
    [1,1,1,5,1,699,510000],[2,3,2,6,2,1399,540000],[2,4,2,7,2,1599,640000],[1,3,2,7,1,1399,520000],[1,2,2,5,1,1199,467500],[2,2,2,7,2,1199,460000],[1,3,1,6,1,999,415000],[2,2,1,5,2,1199,443000],[2,3,2,6,2,1599,601500],[2,4,2,9,2,1399,520000],[1,3,2,7,1,1599,565500]
  ],
];

net.train(trainingData, { log: true, errorThresh: 0.09 });

/* const closeToFiveAndOne = net.run([
  [1, 5],
  [2, 4],
  [3, 3],
  [4, 2],
]);

console.log(closeToFiveAndOne); */

// now we're cookin' with gas!
const forecast = net.forecast(
  [
    [1,3,2,6,1,1399]
  ]
  
);

console.log('next 3 predictions', forecast);