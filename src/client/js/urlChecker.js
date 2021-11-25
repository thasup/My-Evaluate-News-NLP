function checkForURL(url) {
    console.log("::: Running checkForURL :::", url);

    let expression = "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?";
    let regex = new RegExp(expression);

    if (regex.test(url)) {
        return true;
    } else {
        console.log("::: Invalid URL :::");
        return false;
    }
};

export { checkForURL }