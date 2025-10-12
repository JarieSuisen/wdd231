function timestamp() {
    // DATES SECTION

    const timestamp = document.querySelector('#timestamp');

    // console.log(`today is: ${today}`);

    // console.log(today.getDate());

    const thisDay = today.getDate();
    const thisMonth = today.toLocaleString('default', { month: 'long' });
    const thisYear = today.getFullYear();

    // thisMonth.toLocaleString('default', { month: 'long' })

    // console.log(thisDay);
    // console.log(thisMonth);
    // console.log(thisYear);

    const thisDate = `${thisMonth} ${thisDay}, ${thisYear}`;

    timestamp.value = thisDate;
    // console.log(`Timestamp: ${timestamp.value}`);

};

export { timestamp };