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

  function binarySearchJSON3(jsonObjects, targetValue) {
    let results = [];
  
    for (let i = 0; i < jsonObjects.length; i++) {
      const jsonObject = jsonObjects[i];
      const values = Object.values(jsonObject);
  
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
  
        if (typeof value === "string" && value.includes(targetValue)) {
          results.push(jsonObject);
          break;
        }
      }
    }
  
    return results;
  }
  function binarySearchJSON4(jsonObjects, targetValue) {
    let results = [];
  
    let low = 0;
    let high = jsonObjects.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let jsonObject = jsonObjects[mid];
      let values = Object.values(jsonObject);
  
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
  
        if (typeof value === "string" && value.includes(targetValue)) {
          results.push(jsonObject);
          break;
        }
      }
  
      let lastValue = values[values.length - 1];
  
      if (lastValue.localeCompare(targetValue) < 0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return results;
  }
  function binarySearchJSON5(jsonObjects, targetValue) {
    let results = [];
    
    let low = 0;
    let high = jsonObjects.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let jsonObject = jsonObjects[mid];
      let values = Object.values(jsonObject);
  
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
  
        if (typeof value === "string" && value.includes(targetValue)) {
          results.push(value);
        }
      }
  
      let lastValue = values[values.length - 1];
  
      if (lastValue.localeCompare(targetValue) < 0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return results;
  }
  