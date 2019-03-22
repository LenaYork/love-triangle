/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  if  (preferences.length < 2) return 0;
  let triangles = 0;
 
for (let i = 0; i < preferences.length; i++) {
        let spenochee1 = i+1;
        let spenochee2 = preferences[i];
        let spenochee3 = preferences[spenochee2-1];  
        if ((spenochee1 !== spenochee2) && (spenochee2 !== spenochee3) && (spenochee1 !== spenochee3)) {
             if (spenochee1===preferences[spenochee3-1]) {
               triangles++;
             } 
        }
  }
     
     
  return triangles > 0 ? triangles/3 : 0;
};
     

                       
