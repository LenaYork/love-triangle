/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let triangles = 0;
  for (let i = 0; i < preferences.length; i++) {
        let spenochee1 = i+1;
        let spenochee2 = preferences[i];
        let spenochee3 = preferences[spenochee2-1];  
        if ((spenochee1 !== spenochee2) && (spenochee2 !== spenochee3) && (spenochee1 !== spenochee3)) {
             if (spenochee1===preferences[sp3-1]) {
               triangles++;
             } 
        }
  }//return triangle > 0 ? triangle/3 : 0;
  
   if (triangles > 0) {
    let resut = triangles / 3;
   } else result = 0;
  return result;
};
