// Filter Unique array Memebers

function unique(arr){
    let uniqueArray=  Array.from(new Set(arr));
    return uniqueArray;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O