const keys = (Object && Object.keys) ||
  ((obj) => {
    let keys = [];

    for( var key in obj ) {
      keys.push(key);
    }

    return key;
  });

export default keys;
