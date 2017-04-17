    console.log('10....................');
    process.on('SIGUSR2', function () {
        console.log('got a SIGUSR2 signal')
     });