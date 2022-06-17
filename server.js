import http  from 'http';
import {launchSocketserver} from './utility/socketio.js';

//import NotificationsUpdates from './notificationUpdates';

const server = http.createServer((req, res) => {
  if (req.method == 'GET'){
    res.end('OKAY');
    console.log(req.url)
  }
});



launchSocketserver(server);
server.listen(3000)
