"use strict";
var cluster = require('cluster'),
    os = require('os'),
    fs = require('fs');

module.exports = (id, callback) => {

    if (cluster.isMaster) {
        var dir = './tmp';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFile('./tmp/' + id + '.pid', process.pid, function (err) {
            if (err) {
                console.log('Error: unable to create %s.pid: %s', id, err);
                process.exit(1);
            } else {
                console.log('Starting cluster with pid: %s', process.pid);
                //ensure workers exit cleanly 
                process.on('SIGINT', function () {
                    console.log('Cluster shutting down...');
                    for (var id in cluster.workers) {
                        cluster.workers[id].kill();
                    }
                    // exit the master process
                    process.exit(0);
                });

                process.on("unhandledRejection", err => {
                    console.log(err);
                    process.exit(1);
                });

                // Count the machine's CPUs
                var numWorkers = os.cpus().length;

                console.log('Master cluster setting up %s workers...', numWorkers);

                for (var i = 0; i < numWorkers; i++) {
                    cluster.fork();
                }

                // for (var i = 0; i < numWorkers; i++) {
                //     setTimeout(function () {
                //         cluster.fork();
                //     }, i * 10000);

                // }

                cluster.on('online', function (worker) {
                    console.log('Worker %s is online', worker.process.pid);
                });

                cluster.on('exit', function (worker, code, signal) {
                    console.log('Worker %s died with code: %s, and signal: %s', worker.process.pid, code, signal);
                    console.log('Starting a new worker');
                    cluster.fork();
                });
            }
        });
    } else {
        callback();
    }
}