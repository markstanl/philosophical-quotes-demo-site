"use strict";
import pkg from 'sqlite3';
const { Database, OPEN_READONLY } = pkg;
// Open the database
var db = new Database('./quotes.db', OPEN_READONLY, function (err) {
    if (err) {
        console.error(err.message);
    }
    else {
        console.log('Connected to the SQLite database.');
    }
});
var quotesArray = [];
// Query the database
db.serialize(function () {
    db.all("SELECT * FROM quotes", function (err, rows) {
        if (err) {
            console.error(err.message);
        }
        else {
            quotesArray = rows;
            printQuoteArray(quotesArray);
            printAuthorsArray(quotesArray);
            printIDArray(quotesArray);
        }
    });
});
// Close the database
db.close(function (err) {
    if (err) {
        console.error(err.message);
    }
});
var printQuoteArray = function (array) {
    var quoteArrayString = '["None"';
    var authors = [];
    array.forEach(function (quote) {
        quoteArrayString += "".concat(quote.quote, ", \n");
    });
    quoteArrayString = quoteArrayString.slice(0, -2);
    quoteArrayString += "]";
    console.log(quoteArrayString);
};
var printAuthorsArray = function (array) {
    var authorsArrayString = "[";
    var authors = [];
    array.forEach(function (quote) {
        if (!authors.includes(quote.author)) {
            authors.push(quote.author);
        }
    });
    authors.forEach(function (author) {
        authorsArrayString += "\"".concat(author, "\", ");
    });
    authorsArrayString = authorsArrayString.slice(0, -2);
    authorsArrayString += "]";
    console.log(authorsArrayString);
};
var printIDArray = function (array) {
    var idArrayString = "[";
    var ids = [];
    array.forEach(function (quote) {
        if (!ids.includes(quote.id)) {
            ids.push(quote.id);
        }
    });
    ids.forEach(function (id) {
        idArrayString += "\"".concat(id, "\", ");
    });
    idArrayString = idArrayString.slice(0, -2);
    idArrayString += "]";
    console.log(idArrayString);
};
