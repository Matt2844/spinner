// Spinner 2


// process.stdout.write('hello from spinner1.js... \rheyyy\n');

/*
 The old code from spinner 1

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 300)

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // backslash to escape special character
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);
*/

// The new refactored code for spinner 2

const arrSpin = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]

let timeDelay = 0;

for (let char of arrSpin) {
  setTimeout(() => {
    process.stdout.write(char + '\r');
  }, timeDelay += 200)
};









