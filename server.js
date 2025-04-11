// server.js
const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/scan', (req, res) => {
  const py = spawn('python3', [path.join(__dirname, 'ids_cli.py')]);
  let output = '';

  py.stdout.on('data', data => output += data);
  py.stderr.on('data', data => console.error('IDS ERR:', data.toString()));

  py.on('close', code => {
    if (code !== 0) {
      return res.status(500).json({ error: `IDS CLI exited ${code}` });
    }
    try {
      res.json(JSON.parse(output));
    } catch (e) {
      res.status(500).json({ error: 'Invalid JSON', raw: output });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
