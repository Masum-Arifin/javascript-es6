const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine = 'This is my first line \n' +
'this is my second line \n' +
'this is my third line text here\n';

const multiLineNew = `this is multi lne
 this is second line
 this is third line`;

 const friends = ['abul', 'babul', 'kabul', 'nurul'];
 const count = 5;
 const old = '<h3 class="friend-name"> Friend-5</h3>'

 const old2 = ' <h3 class="friend-name">Friend-'+ count + '</h3>';
 const new1 = `<h3 class="friend-name"> Friend-${friends.length}</h3>`;

 const first = 'Mamun';
const last = 'khondokar';
const fullOld =first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}.Has money ${friends.length * 500}. he lives in Dhaka `;

 console.log(fullNew);