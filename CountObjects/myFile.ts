function countOccurrences(data: { [key: string]: any }[]): { [key: string]: number } {
    const counts: { [key: string]: number } = {};

    for (const item of data) {
        const key = item.language;
        counts[key] = counts[key] ? counts[key] + 1 : 1;
    }

    return counts;
}

function convertToObjects(data: { [key: string]: any }[]): { language: string, count: number }[] {
    const counts = countOccurrences(data);
    const result: { language: string, count: number }[] = [];

    for (const key in counts) {
        if (counts.hasOwnProperty(key)) {
            result.push({ language: key, count: counts[key] });
        }
    }

    return result;
}

// Example usage
const data = [
    { language: 'JavaScript' },
    { language: 'JavaScript' },
    { language: 'TypeScript' },
    { language: 'C++' }
];

const result = convertToObjects(data);
console.log(result);
