// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getUser = async (userId: number) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/");
    const find = res.data.find((x : any) => x === userId);
    const username = find.name;
    return username;
  }
  catch (error) {
    return "INVALID USER ID";
  }
 
};

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;


// รัชชาพร บัวนุช 660610790
