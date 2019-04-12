import app from './www/rest';

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
