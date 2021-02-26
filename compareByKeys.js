function compareByKeys(elem1, elem2, keys) {
    for(let i = 0; i < keys.length; i++) {
        const key = keys[i],
            val1 = elem1[key],
            val2 = elem2[key];
    
        if(val1 < val2) {
            return -1;
        }
    
        if(val2 < val1) {
            return 1;
        }
    }

    // they're equal according to all keys!
    return 0;
}