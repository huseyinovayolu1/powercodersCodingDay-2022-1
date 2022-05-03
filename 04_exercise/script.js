
let books = [
    {
       bookName: "The Great Gatsby",
       authorName: "F. Scott Fitzgerald",
       isInStock: true,
       priceOfBookInCHF: 5,
    }, 
    {
        bookName: "A Passage to India",
       authorName: "E.M. Forster",
       isInStock: false,
       priceOfBookInCHF: 9,
    },
    {
        bookName: "Invisible Man",
       authorName: "Ralph Ellison",
       isInStock: true,
       priceOfBookInCHF: 3,
    }
];



document.getElementById(displayArray).innerHTML = books;