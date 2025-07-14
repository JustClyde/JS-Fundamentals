function add(a, b) {
  console.log(a + b);
}

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('NaN');
} else {
  // Convert arguments to numbers
  const a = Number(args[0]);
  const b = Number(args[1]);

  if (isNaN(a) || isNaN(b)) {
    console.log('NaN');
  } else {
    add(a, b);
  }
}
