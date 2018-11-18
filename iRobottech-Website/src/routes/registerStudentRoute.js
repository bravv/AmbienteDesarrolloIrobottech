const express = require('express');
const router = express.Router();




const mysqlConnection = require('../connectionDataBase/databaseConnection');
// GET all Students Acc
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM STUDENT', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get('/yaya', (req, res) => {  
  res.send(most);
})


// INSERT An Student
router.post('/', (req, res) => {
  const { idNumber, firstName, secondName, lastName1, lastName2, birth_date, phone, address, guardianName, guardianID, emergencyPhone, email } = req.body;
  console.log(idNumber, firstName, secondName, lastName1, lastName2, birth_date, phone, address, guardianName, guardianID, emergencyPhone, email);
  const queryString = 'CALL `INSERT_REGISTER_STUDENT` (idNumber, firstName, secondName, lastName1, lastName2, birth_date, phone, address, guardianName, guardianID, emergencyPhone, email);';

  mysqlConnection.query(queryString, (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Student Registered' });
    } else {
      console.log(err);
    }
  });

});


module.exports = router;
