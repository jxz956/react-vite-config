export function StringToObject(data) {
  // Convert formatted date string back to a Date object
  const dateObject = new Date(data);
  return dateObject;
}


// // Test cases
// const testString = "August 18, 2025";
// const result = StringToObject(testString);

// console.log("Input:", testString);
// console.log("Output:", result);
// console.log("Is valid Date:", result instanceof Date && !isNaN(result.getTime()));
