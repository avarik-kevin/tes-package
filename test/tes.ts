// const {sub, sum} = require("../index.js")

// console.log(sum(1, 2))
// console.log(sub(1, 2))
// console.log(sum(3, 4))
// console.log("develop")

import { getJoke} from "../src/lc"

(async () => {
    console.log(await getJoke("duck"))
})()