const express = require("express");
const app = express();

// list of names
const names = ['Kofi', 'Jackie', 'Manny', 'Sharon', 'Rick', 'Darlene']


// route to get names
app.get('/api/names', (req, res) => {
    res.json(names);
})

// port
const PORT = process.env.PORT || 3000;
// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
