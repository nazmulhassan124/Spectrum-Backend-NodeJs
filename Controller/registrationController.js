const express = require('express');
const router = express.Router();
const connection = require('../db-config');

router.get('/getAll', (req, res) => {


     connection.query('SELECT * from stu_registration', function(err, rows, fields) {
        if (!err) {
         //   res.send(JSON.stringify(rows));
          res.send(rows)
        } else {
            console.log('Error while performing Query.');
            res.json({
                status:400,
                message:err
              })
        }
    });
    
});


router.post('/save',(req,res)=>{

   let stu_no =0;
   console.log("reeeee-----", req.body )

   const stu_id = req.body.stu_id;
   const stu_name = req.body.stu_name;
   const stu_phone = req.body.stu_phone;
   const stu_address = req.body.stu_address;


    const sql3 ="SELECT MAX(stu_no) AS max_no FROM stu_registration;"
    connection.query(sql3, (err, rows, fields)=>{
        if (!err) {
            //   res.send(JSON.stringify(rows));
            // res.send(rows)
            console.log("Max row", rows[0].max_no)
             stu_no= Number(rows[0].max_no) ;

             connection.query("insert into stu_registration values (?,?,?,?,?)",[stu_no +1,stu_id, stu_name, stu_phone , stu_address], function (err, result) {
                
                if(err){
                    res.json({
                      status:400,
                      message:err
                    })
                  }
            
                  else{
                    res.json({
                      status:200,
                      message:result
                    })
                  }
              });
          
           } else {
               console.log('Error while performing Query.');

           }

    })
    
})


router.put('/update',(req,res)=>{
    console.log("reeeee-----", req.body )
    const stu_no = req.body.stu_no;
    const stu_id = req.body.stu_id;
    const stu_name = req.body.stu_name;
    const stu_phone = req.body.stu_phone;
    const stu_address = req.body.stu_address;
    let records = [stu_id,stu_name,stu_phone,stu_address,stu_no];

    let sql="UPDATE stu_registration SET stu_id=?,stu_name=?,stu_phone=?,stu_address=? WHERE stu_no=?"

    connection.query(sql,records,(err,result)=>{

        if(err){
          res.json({
            status:400,
            message:err
          })
        }
  
        else{
          res.json({
            status:200,
            message:result
          })
        }
  
      })
})


router.delete('/delete/:id',(req,res)=>{
    console.log("stu_no-----", req.params.id )
    const stu_no = Number( req.params.id);
    let sql = "DELETE FROM stu_registration WHERE stu_no = ?"; 
    let records = [stu_no];
    connection.query(sql,records,(err,result)=>{

        if(err){
          res.json({
            status:400,
            message:err
          })
        }
  
        else{
          res.json({
            status:200,
            message:result
          })
        }
  
      })
    
})

module.exports = router;