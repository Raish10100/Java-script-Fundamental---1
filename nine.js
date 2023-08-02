function findFirstString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            console.log("Found the First String:", arr[i]);
            return;
        }
    }

    console.log("No string found in the array.");
}

 