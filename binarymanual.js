var searchField = "Miko"
const ogdata = require('./escription.json')
const jsontoarraywithidnoparseint = (data) => {
  var arrr= [];
  var listing = Object.keys(data)
  listing.map((x) => arrr.push(data[x]))
  for (let i = 0; i < arrr.length; i++){
      arrr[i]["id"]=listing[i]
  }
  return arrr
}
function binarySearch(keys, target) {
  let left = 0;
  let right = keys.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (keys[mid] === target) {
      return mid; // Key found, return the index
    } else if (keys[mid] < target) {
      left = mid + 1; // Search the right half
    } else {
      right = mid - 1; // Search the left half
    }
  }

  return -1; // Key not found
}
const keyer = (data, tgt) => {
  var dict= {};
  var listing = Object.keys(data)
  //listing.map((x) => dict[data[x][tgt]]=data[x]);
  listing.map((x) => {
    if (dict.hasOwnProperty(data[x][tgt])) dict[data[x][tgt]].push(x);
    else {dict[data[x][tgt]]=[]; dict[data[x][tgt]].push(x);}
  })
  //listing.map((x)=> console.log(data[x]))
  return dict;
}
const binarykey = (data, tgt) => {
  var fin = {}
  var namdata = keyer(data, "nam")
  var namres = binarySearch(Object.keys(namdata).sort(), tgt)
  //console.log(namdata[Object.keys(namdata).sort()[namres]])
  namdata[Object.keys(namdata).sort()[namres]].map((x)=> fin[x]=data[x]);
  return jsontoarraywithidnoparseint(fin)
}
console.log(binarykey(ogdata,"Dee"))

var details = jsontoarraywithidnoparseint(ogdata);
const filteredPats = details.filter(
    pat => {
      return (
        pat
        .nam
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        pat
        .age
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        pat
        .dat
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
);
//console.log(filteredPats)

/*

function binarySearch(jsonArray, searchString) {
  let results = [];

  let start = 0;
  let end = jsonArray.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let object = jsonArray[mid];

    // Check if the string is present in the object
    if (JSON.stringify(object).includes(searchString)) {
      results.push(object);
    }

    // If the search string is less than the object, search the left half
    if (searchString < JSON.stringify(object)) {
      end = mid - 1;
    }
    // If the search string is greater than the object, search the right half
    else {
      start = mid + 1;
    }
  }

  return results;
}
function binarySearchJSON(jsonObjects, targetValue) {
  let results = [];
  
  let low = 0;
  let high = jsonObjects.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let jsonObject = jsonObjects[mid];
    let entries = Object.entries(jsonObject);

    for (let j = 0; j < entries.length; j++) {
      const [key, value] = entries[j];

      if (typeof value === "string" && value.includes(targetValue)) {
        results.push(jsonObject);
      }
    }

    let lastEntry = entries[entries.length - 1];

    if (lastEntry[1].localeCompare(targetValue) < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return results;
}

const result = binarySearch(details, "Franz");
console.log(result);
*/