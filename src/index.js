import http from 'http';
import app from './app';

import db from './models';


const PORT = process.env.PORT || 3000;

app.set('port', PORT);

// This is done to make it possible to reuse the http-server.
// For example to run both http/https.
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // eslint-disabled-line no-console
});



// Some example code for database ops.
// db.User.findOne({
  //   where: {
  //     twitterId: 'John Doe'
  //   }
  // }).then((record) => {
  //   return record.update({
  //     twitterId: 'John Changed'
  //   })
  // })
  // db.User.create({
  //   twitterId: 'John Doe',
  //   location: 'Sweden'
  // });
