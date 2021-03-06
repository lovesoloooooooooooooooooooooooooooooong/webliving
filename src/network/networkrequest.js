import axios from 'axios'


export function networkrequest(config) {
    const instance = axios.create({
        // baseURL: 'https://39.105.3.42:8001/',
        // baseURL: 'http://127.0.0.1:8000/',

        baseURL: 'http://192.168.0.104:9000/',
        //上面这个url是拿来进行本地服务器测试用的
        timeout: 3000
    })

    return instance(config)
}


// export function baserequest(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'https://39.105.3.42:8001/',
//             timeout: 3000
//         })
//     })
//
//     instance(config).then(res => {
//         console.log(res)
//         resolve(res)
//     }).catch(err =>{
//         console.log(err)
//         reject(err)
//     })
//
// }
