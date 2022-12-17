# Loading CSVs

Although could use Pappaparse, looks like best bet is [d3.cvs](https://github.com/d3/d3-dsv): can cleanly load multiple csv files.

To pull in one file:

```
d3.csv("/data/cities.csv").then(function(data) {
  console.log(data[0]);
});

=> {city: "seattle", state: "WA", population: "652405", land area: "83.9"}
```

To pull in multiple files :

```

d3.csv("file1.csv", function(data1) {
  d3.csv("file2.csv", function(data2) {
     d3.csv("file3.csv", function(data3) {
        // do something with the data
        console.log("CSV1", data1);
        console.log("CSV2", data2);
        console.log("CSV3", data3);
     });
  });
});

```

To turn strings into numbers:

```

d3.csv("/data/cities.csv", function(d) {
  return {
    city : d.city,
    state : d.state,
    population : +d.population,
    land_area : +d["land area"]
  };
}).then(function(data) {
  console.log(data[0]);
});

=> {city: "seattle", state: "WA", population: 652405, land_area: 83.9}
```
NOTE: using dot notation only works if headers don't include spaces