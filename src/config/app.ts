import express from 'express';

export default (port: number) => {
  const app = express();

  app.get('/', function(req, res) {
    res.send('test');
  });

  app.get('/test', function(req, res) {
    res.send('coucou');
  });

  return app.listen(port);
};
