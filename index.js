const speedTest = require('speedtest-net');
 
speedTest.visual({maxTime: 5000, pingCount: 50}, (err, data) => {
  console.dir(data);
});
