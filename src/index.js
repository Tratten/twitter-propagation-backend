import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disabled-line no-console
