
const memberInfo = new URLSearchParams(window.location.search);

// CHECK THAT DATA IS GRABBED
// console.log(memberInfo);
// CHECK WHAT DATA IS GRABBED
// console.log(memberInfo.get);

// CHECK SPECIFIC ITEMS
// console.log(memberInfo.get('first'));
// console.log(memberInfo.get('last'));
// console.log(memberInfo.get('title'));
// console.log(memberInfo.get('email'));
// console.log(memberInfo.get('phone'));
// console.log(memberInfo.get('organization'));
// console.log(memberInfo.get('membership-select'));
// console.log(memberInfo.get('description'));
// console.log(memberInfo.get('timestamp'));

const first = memberInfo.get('first');
const last = memberInfo.get('last');
const title = memberInfo.get('title');
const email = memberInfo.get('email');
const phone = memberInfo.get('phone');
const org = memberInfo.get('organization');
const tier = memberInfo.get('membership-select');
const desc = memberInfo.get('description');
const time = memberInfo.get('timestamp');

// ???
document.querySelector('#checkout').innerHTML = `
First Name: ${first}<br>
Last Name: ${last}<br>
<!-- Title: ${title}<br> -->
email: ${email}<br>
Phone Number: ${phone}<br>
Organization: ${org}<br>
<!-- Membership Rank: ${tier}<br> -->
<!-- Description: ${desc}<br> -->
<br>
Submission Date: ${time}
`;
