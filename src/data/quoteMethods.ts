const sqlite3 = require('sqlite3').verbose();

// Open the database
let db = new sqlite3.Database('./quotes.db', sqlite3.OPEN_READONLY, (err: { message: any; }) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

let quotesArray = [];

// Query the database
db.serialize(() => {
  db.all(`SELECT * FROM quotes`, (err: { message: any; }, rows: any[]) => {
    if (err) {
      console.error(err.message);
    }
    quotesArray = rows;
    //printQuoteArray(quotesArray);
    //printAuthorsArray(quotesArray);
    printIDArray(quotesArray);
  });
});

// Close the database
db.close((err: { message: any; }) => {
  if (err) {
    console.error(err.message);
  }
});

const printQuoteArray = (array: any[]) => {
  let quoteArrayString: string = "[";
  let authors: string[] = [];

  array.forEach((quote: { quote: string; }) => {
    quoteArrayString += `"${quote.quote}", `;
  });
  quoteArrayString = quoteArrayString.slice(0, -2);
  quoteArrayString += "]";
  console.log(quoteArrayString);
}

const printAuthorsArray = (array: any[]) => {
  let authorsArrayString: string = "[";
  let authors: string[] = [];

  array.forEach((quote: { author: string; }) => {
    if(!authors.includes(quote.author)){
      authors.push(quote.author);
    }
  })
  authors.forEach((author: string) => {
    authorsArrayString += `"${author}", `;
  });
  authorsArrayString = authorsArrayString.slice(0, -2);
  authorsArrayString += "]";
  console.log(authorsArrayString);
}

const printIDArray = (array: any[]) => {
    let idArrayString: string = "[";
    let ids: number[] = [];

    array.forEach((quote: { id: number; }) => {
        if(!ids.includes(quote.id)){
        ids.push(quote.id);
        }
    })
    ids.forEach((id: number) => {
        idArrayString += `"${id}", `;
    });
    idArrayString = idArrayString.slice(0, -2);
    idArrayString += "]";
    console.log(idArrayString);
}

