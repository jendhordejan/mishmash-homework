/*### Assignment 2: transform

1.  You must create a module named `transform` that exports a function named `groupAdultsByAgeRange`. The test imports it like this:
    ```js
    const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange;
    ```
    _Note: This is a named export_
1.  The exported `groupAdultsByAgeRange` should be a function.
1.  The function will be called with an array of objects as its argument. The objects represent people, with a property `name` and a property `age`. Your function should group each person **over the age of 18** into age ranges. Here are a few examples:

    ```js
    // Example 1
    groupAdultsByAgeRange([
      { name: "Henry", age: 9 },
      { name: "John", age: 20 }
    ]);
    // Should result in:
    const result = { "20 and younger": [{ name: "John", age: 20 }] };

    // Example 2
    groupAdultsByAgeRange([
      { name: "Anna", age: 31 },
      { name: "John", age: 32 },
      { name: "Hank", age: 60 }
    ]);
    // Should result in:
    const result2 = {
      "31-40": [
        { name: "Anna", age: 31 },
        { name: "John", age: 32 }
      ],
      "51 and older": [{ name: "Hank", age: 60 }]
    };
    ```

1.  Notice that the groups are only added to the resulting object if they are not empty. Make sure your function does the same.
1.  You should use a combination of `filter` and `reduce`. If your solution uses `for`-loops instead of `reduce` for creating the **final object**, you will receive partial points. The use of `for`-loops is allowed, but try to construct the returned "grouping" object using `reduce`.
1.  These are the groups that your code needs to return. Use the text as the name of the property:
    - `20 and younger`
    - `21-30`
    - `31-40`
    - `41-50`
    - `51 and older`
*/
function groupAdultsByAgeRange(persons) {

  const groupByAgeCategory = {}
  const adultPeopleOnly = persons.filter(person=>(person.age>17)) //filter out person under 18yo
  if (adultPeopleOnly.length>0) {
    
    
    const initialAccumulator = {
      ["20 and younger"]: [],
      ["21-30"]: [],
      ["31-40"]: [],
      ["41-50"]: [],
      ["51 and older"]: []
    }

  return adultPeopleOnly.reduce((groupByAgeCategory, currentPerson) => {
      
      //'20 and younger'
      if (currentPerson.age<=20 && currentPerson.age>17) {
          groupByAgeCategory["20 and younger"].push(currentPerson)
          return groupByAgeCategory
      }
      //`21-30`
      if (currentPerson.age>20 && currentPerson.age<=30) {
        groupByAgeCategory["21-30"].push(currentPerson)
        return groupByAgeCategory
      }
      //`31-40`
      if (currentPerson.age>30 && currentPerson.age<=40) {
        groupByAgeCategory["31-40"].push(currentPerson)
        return groupByAgeCategory
      }
      //'41-50'
      if (currentPerson.age>40 && currentPerson.age<=50) {
        groupByAgeCategory["41-50"].push(currentPerson)
        return groupByAgeCategory
      }
      //'51 and older'
      if (currentPerson.age>50) {
        groupByAgeCategory["51 and older"].push(currentPerson)
        return groupByAgeCategory
      }


      for (const property in groupByAgeCategory){
        //console.log(`${property}: ${groupByAgeCategory[property]}--${groupByAgeCategory[property].length}`)
          if (!groupByAgeCategory[property].length>0){
            delete groupByAgeCategory[property];
          }
      }
      return groupByAgeCategory
    }, initialAccumulator)
  


   
  }


 
  
  return groupByAgeCategory
  
}

module.exports = {groupAdultsByAgeRange}

