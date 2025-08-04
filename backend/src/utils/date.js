function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);

    const day = String(date.getDate()).padStart(2, '0');       // '09'
    const month = String(date.getMonth() + 1).padStart(2, '0'); // '08'
    const year = date.getFullYear();                            // '2025'

    return `${day}-${month}-${year}`;  // '09-08-2025'
}

module.exports = formatDate