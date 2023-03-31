// npm i express express-validator
// npm i nodemon --save-dev
// 메시지 추가!
/*
http://localhost:8080/signup, raw, json
{    
    "name":"leehojun",
    "age":10,
    "nickname": "paullab"
}
*/

const express = require("express");
const expressValidator = require("express-validator");
const valibody = expressValidator.body; // body검사
const valicheck = expressValidator.check; // body와 param 모두 검사
const valiparam = expressValidator.param; // param 검사
const valiresult = expressValidator.validationResult;

const app = express();
app.use(express.json());

app.post(
  "/signup",
  valibody("name")
    .isLength({ min: 3, max: 20 })
    .withMessage("3자 이상 20자 이하!"),
  (req, res, next) => {
    const err = valiresult(req);
    if (err.isEmpty()) {
      console.log(req.body);
      // 아래 문법 대신 sendStatus를 사용해도 됩니다.
      res.status(201).send("hello world!!"); // 201 Created
    } else {
      console.log(req.body);
      // 아래 문법 대신 sendStatus를 사용해도 됩니다.
      // res.status(400).send('error!!');    // 400 Bad Request
      // res.status(400).json({ error : err });
      res.status(400).json({ error: err.array() });
    }
  }
);

app.listen(8080);
