// ### Count the occurrence of keys and convert the result into array of objects where each object belongs to one key and it's occurrence (count).

// #### Example
```js
[
    { language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }
] 
```

// #### SHOULD BE CONVERTED TO =
```js
[
{ language: 'JavaScript', count: 2 },
{ language: 'C++', count: 1 },
{ language: 'TypeScript', count: 1 }
]
```
//Answer
function countOccurrences(data) {
    const counts = {};

    for (const item of data) {
        const key = item.language;
        counts[key] = counts[key] ? counts[key] + 1 : 1;
    }

    return counts;
}

function convertToObjects(data) {
    const counts = countOccurrences(data);
    const result = [];

    for (const key in counts) {
        if (counts.hasOwnProperty(key)) {
            result.push({ language: key, count: counts[key] });
        }
    }

    return result;
}


const data = [
    { language: 'JavaScript' },
    { language: 'JavaScript' },
    { language: 'TypeScript' },
    { language: 'C++' }
];

const result = convertToObjects(data);
console.log(result);



