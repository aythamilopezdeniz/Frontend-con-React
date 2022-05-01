const messages = [
    "Ana",
    "Nicolay",
    "Diego",
    "Laura",
    "Rita"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.export = { randomMsg };