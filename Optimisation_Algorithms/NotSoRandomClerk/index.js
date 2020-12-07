const folderPath = process.env.folderPath;
// fs is a module for handling file operations.
const fs = require('fs');

// Use Resource Type Names as configured in Rembrandt
const inputResourceTypes = ["Clerk"];

/* Iterates over all configured resource types, reads the respective file and parses it to objects.
 * The returned object could look like this:
 *   { "Parcel": [ ParcelObject1, ParcelObject2, ParcelObject3 ],
 *     "Driver": [ DriverObject1, DriverObject2 ] }
 * Where ParcelObjectX and DriverObjectX are objects themselves, following the structure as defined in Rembrandt.
 */
function readInputFiles() {
  const readInputs = {};
  inputResourceTypes.forEach(resourceType => {
    readInputs[resourceType] = JSON.parse(fs.readFileSync(`${folderPath}/${resourceType}.txt`));
  });
  return readInputs;
}

function writeResult(result) {
  fs.writeFileSync(folderPath + '/result.txt', JSON.stringify(result));
}

const inputResources = readInputFiles();

// Do some object transformation here if needed.

// Call the optimization method here and pass the required arguments. E.g.:
const optimizedResult = pickRandomInstance(inputResources["Clerk"]);

writeResult(optimizedResult);

function pickRandomInstance(resourceObjects) {
    let randomElement = [];
    randomNumber = Math.floor(Math.random() * 10); 
    if (randomNumber <= 4){
      randomElement.push(resourceObjects[0])
    }
    else if (randomNumber <= 7){
      randomElement.push(resourceObjects[1])
    }
    else {
      randomElement.push(resourceObjects[2])
    }
    return randomElement;
}