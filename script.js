const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
 .then((res) => res.json());

 // Step 1
apiPromise.then(data => console.log(data));

// Step 2
apiPromise.then(data => console.log(data.count));

// Step 3
const countPromise = apiPromise.then((res) => console.log(res.count));

// Step 4
const top4Promise = apiPromise.then(data => console.log(data.results.slice(0, 4)));

// Step 5 
const namesPromise = apiPromise.then(data => {
    let names = data.results.map(i => i.name)
    console.log(names)
    return names});


// Step 6
const capsNamesPromise = namesPromise.then(names => {
    let capNames = []
    for (i = 0; i < names.length; i++) {
        capNames[i] = names[i].toUpperCase();
    }
    console.log(capNames);
});

// Step 7
let badPromise = fetch("https://grandcircusco.github.io/demo-apis/wrong.json")
.then(res => res.json())
.catch((error) => {
    console.log(error)
    console.log("FAILED")});


// Async countPromise
async function apiPromise2() {
    const promise = await fetch("https://grandcircusco.github.io/demo-apis/donuts.json");
    const response = await promise.json();
    return response;
}

async function countPromise2() {
    const promise = await apiPromise2();
    const count = await promise.count;
    console.log(count);
}

countPromise2();

// Async top4Promise
async function top4Promise2() {
    const promise = await apiPromise2();
    const top4 = await promise.results.slice(0, 4);
    console.log(top4);
}

top4Promise2();

// Async namesPromise
async function namesPromise2() {
    const promise = await apiPromise2();
    const names = await promise.results.map(i => i.name)
    console.log(names);
    return names;
}

namesPromise2();

// Async capNamesPromise
async function capNamesPromise2() {
    const promise = await namesPromise2();
    const capNames = [];
    for (i = 0; i < promise.length; i++) {
        capNames[i] = promise[i].toUpperCase();
    }
    console.log(capNames);
}

capNamesPromise2();