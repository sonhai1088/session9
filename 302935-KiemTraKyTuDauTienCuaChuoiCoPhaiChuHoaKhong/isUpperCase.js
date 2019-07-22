function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log("String's first charater is uppercase");
    } else {
        console.log("String's first charater is not uppercase")
    }
}
