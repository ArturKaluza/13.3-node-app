process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
  let input = process.stdin.read();
    if (input !== null) {
    let instruction = input.toString().trim();
    switch (instruction) {
      case '/exit':
        process.stdout.write('Quiting app\n');
        process.exit();
        break;
      case 'version':
        console.log(process.version);
        break;
      case 'lang':
        console.log(process.env.LANG);
        break;
      default: 
      process.stderr.write('Wrong instruction\n');
    }
  }
});  
