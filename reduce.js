//functional programming practice

//reduce

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}

const sortedReviews = reviews.reduce(groupByOption2, {})

function groupByOption1 (acc, review) {
  if (acc[review] >=1) acc[review]++
  else acc[review] = 1
  return {...acc}
}

function groupByOption2 (acc, num) {
  const count = acc[num] || 0;
  return {...acc, [num]: count + 1}
}

console.log(sortedReviews)

// 
// TIP: checkout computed properties discussed here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
