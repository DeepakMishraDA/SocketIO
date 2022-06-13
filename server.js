import http  from 'http';
import {launchSocketserver} from './utility/socketio.js';

//import NotificationsUpdates from './notificationUpdates';

const server = http.createServer();

launchSocketserver(server);
 server.listen(3000)
