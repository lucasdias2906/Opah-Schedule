import http from 'http';
import './env';
import Server from './repository/restapi/configs/webserver/serverConfig';

const server: http.Server = new Server().createHTTP();

const port: string | number = process.env.PORT || 3005
server.listen(port,
    () => console.log(`Server is running on port ${port}`))
