function mergeObjects(...objects) {
    return objects.reduce((merged, currentObject) => {
      for (let key in currentObject) {
        if (!merged.hasOwnProperty(key)) {
          merged[key] = currentObject[key];
        }
      }
      return merged;
    }, {});
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const obj3 = { c: 5, d: 6 };
  
  const merged = mergeObjects(obj1, obj2, obj3);
  console.log(merged);  // Output: { a: 1, b: 2, c: 4, d: 6 }
  