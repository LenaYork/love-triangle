/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  if  (preferences.length < 2) return 0;
  let triangles = 0;
  
   preferences.forEach((preference, index, preferences) => {
    const spenochee1 = preferences[preference - 1];
    const spenochee2 = preferences[spenochee1 - 1];
  
 /* for (let i = 0; i < preferences.length; i++) {
        let spenochee1 = i+1;
        let spenochee2 = preferences[i];
        let spenochee3 = preferences[spenochee2-1];  
        if ((spenochee1 !== spenochee2) && (spenochee2 !== spenochee3) && (spenochee1 !== spenochee3)) {
             if (spenochee1===preferences[sp3-1]) {
               triangles++;
             } 
        }
  }
     
     
  return triangles > 0 ? triangles/3 : 0;
};*/
     
     
     if (spenochee2 === index + 1 && spenochee1 !== spenochee2) triangles++;
  });
  return (triangles / 3).toFixed(0);
};
                       
