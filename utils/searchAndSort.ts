// utils/searchAndSort.ts

import { Property } from "@/typings";


// quickSort
export const quickSort = (properties: Property[], criteria: keyof Property): Property[] => {
    if (properties.length <= 1){
        return properties;
    };

    const pivot = properties[properties.length - 1];
    const left: Property[] = [];
    const right: Property[] = [];

    for (const property of properties.slice(0, properties.length - 1)) {
        if(property[criteria] <= pivot[criteria]) {
            left.push(property);
        } else {
            right.push(property)
        }
    }

    return [...quickSort(left, criteria), pivot, ...quickSort(right, criteria)]
}

// binarySearch
export const binarySearch = (properties: Property[], key: keyof Property, value: any): Property[] => {
    let low = 0;
    let high = properties.length - 1;
    const result: Property[] = [];

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = properties[mid][key];

        if (midValue === value) {
            result.push(properties[mid]);
            // Search both sides of the mid point for other matches
            let left = mid - 1;
            let right = mid + 1;

            while (left >= low && properties[left][key] === value) {
                result.push(properties[left])
                left--;
            }
            while (right <= high && properties[right][key] === value) {
                result.push(properties[right])
                right++;
            }
        }else if (midValue < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}