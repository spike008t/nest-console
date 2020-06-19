const vorpal = require('vorpal')();

vorpal
    .command('foo', 'Outputs "bar".')
    .action(async function (args) {
        this.log('bar');
    });

vorpal
    .delimiter('myapp$')
    .show();
