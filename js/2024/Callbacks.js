function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 1000);
}

function handleData(data) {
    console.log("Data received:", data);
}

fetchData(handleData);
