const data = require('./escription.json')

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = [];
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) {
        result.push(mid); // Store the index of the matching entry
        // Search for other matching entries to the left
        let left = mid - 1;
        while (left >= 0 && arr[left] === target) {
          result.push(left);
          left--;
        }
        // Search for other matching entries to the right
        let right = mid + 1;
        while (right < arr.length && arr[right] === target) {
          result.push(right);
          right++;
        }
        break; // Stop the search since we found all matching entries
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return result;
  }
function binarySearchJSON(json, target) {
    let keys = Object.keys(json);
    let low = 0;
    let high = keys.length - 1;
    let result = [];
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      if (keys[mid] === target) {
        result.push(keys[mid]); // Store the matching key
        // Search for other matching keys to the left
        let left = mid - 1;
        while (left >= 0 && keys[left] === target) {
          result.push(keys[left]);
          left--;
        }
        // Search for other matching keys to the right
        let right = mid + 1;
        while (right < keys.length && keys[right] === target) {
          result.push(keys[right]);
          right++;
        }
        break; // Stop the search since we found all matching keys
      } else if (keys[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return result;
  }
  //using default binary search
  const arr = [1, 2, 3, 4, 4, 4, 5, 6, 7];
  const target1 = 4;

  const matchingIndices = binarySearch(arr, target1);
  console.log(matchingIndices); // [3, 4, 5]


  //using json binary search reading keys
  const json = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key4: "value5",
  };
  const target2 = "key4";
  
  const matchingKeys = binarySearchJSON(json, target2);
  console.log(matchingKeys); // ["key4"]

  