const cleanData = (data) => {
  let keys = Object.keys(data);
  
  return keys.reduce((acc, key) => {
    let yearNums = key.split('');
    let decade = yearNums[2];
    
    if (decade === '8') {
      acc['1980s'].push({ [key]: data[key] });
    } else if (decade === '9') {
      acc['1990s'].push({ [key]: data[key] });
    }else if (decade === '0') {
      acc['2000s'].push({ [key]: data[key] });
    }else if (decade === '1' || decade === '2') {
      acc['2010s'].push({ [key]: data[key] });
    }

    return acc;
  }, {'1980s': [], '1990s': [], '2000s': [], '2010s': []});
}

export { cleanData };