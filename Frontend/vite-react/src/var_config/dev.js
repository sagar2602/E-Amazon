// module.exports = {

//     BASE_URL  : process.env.BASE_URL
// }


const dev = {

    BASE_URL  : import.meta.env.VITE_BASE_URL_DEV,  //because using vite
    TEST : import.meta.env.VITE_TEST
}
export default dev;
