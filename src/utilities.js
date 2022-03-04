const cleanData = (data) => {
  let keys = Object.keys(data);
  
  return keys.reduce((acc, key) => {
    let yearNums = key.split('');
    let decade = yearNums[2];
    
    if (decade === '8') {
      acc.decade80.push(data[key]);
    } else if (decade === '9') {
      acc.decade90.push(data[key]);
    }else if (decade === '0') {
      acc.decade00.push(data[key]);
    }else if (decade === '1' || decade === '2') {
      acc.decade10.push(data[key]);
    }

    return acc;
  }, {decade80: [], decade90: [], decade00: [], decade10: []});
}

export { cleanData };