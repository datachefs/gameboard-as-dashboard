# Working with data in JavaScript

[Mike Bostock](https://towardsdatascience.com/javascript-for-data-analysis-2e8e7dbf63a7):
> We also need new libraries and abstractions that let us spend more time thinking with data and less wrestling with the intricacies of programming. Open-source efforts such as Apache Arrow, Arquero, tidy.js, Observable Plot (which I contribute to), and Vega-Lite are helping.


[Tidy](https://pbeshai.github.io/tidy/)
- tidy.js prioritizes making your data transformations readable, so future you and your teammates can get up and running quickly


https://uwdata.github.io/arquero/
- ￼Arquero is a JavaScript library for query processing and transformation of array-backed data tables. Following the relational algebra and inspired by the design of dplyr, Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations.


beers
  .groupby('style')
  .rollup({
    count: op.count()
  })

for both of these, frequency count: group by, then count￼

