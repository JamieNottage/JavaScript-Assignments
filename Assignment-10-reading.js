var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

for (let record of library) {
    console.log(
        `Author: ${record.author}, title: ${record.title}, reading status: ${record.readingStatus}`
    );
}
