function binarySearchJSON(jsonObjects, key, targetValue) {
    // Convert the JSON objects to an array and sort them based on the key
    const sortedObjects = jsonObjects.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  
    // Perform binary search
    let low = 0;
    let high = sortedObjects.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let midValue = sortedObjects[mid][key];
  
      if (midValue === targetValue) {
        return sortedObjects[mid];
      }
  
      if (midValue < targetValue) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    // Target value not found
    return null;
  }
  
  function binarySearchJSON2(jsonObjects, targetValue) {
    // Perform binary search
    let low = 0;
    let high = jsonObjects.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let jsonObject = jsonObjects[mid];
      let values = Object.values(jsonObject);
  
      if (values.includes(targetValue)) {
        return jsonObject;
      }
  
      if (values[0] < targetValue) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    // Target value not found
    return null;
  }