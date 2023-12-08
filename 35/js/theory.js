/*
  =================================
  Callback
 */

// const hasMoney = true;
//
// const startFunc = () => hasMoney ? green1() : red1();
//
// const green1 = () => {
//     setTimeout(() => {
//         console.log('🟢 Function 1');
//         green2();
//     }, 1000)
// };
//
// const green2 = () => {
//     setTimeout(() => {
//         console.log('🟢 Function 2');
//         green3();
//     }, 500)
// };
//
// const green3 = () => {
//     setTimeout(() => {
//         console.log('🟢 Function 3');
//     }, 1000)
// };
//
// const red1 = () => {
//     console.log('🔴 Function 1');
//     red2();
// };
//
// const red2 = () => {
//     console.log('🔴 Function 2');
//     red3();
// };
//
// const red3 = () => {
//     console.log('🔴 Function 3');
// };
//
// startFunc();

/*
  =================================
  Promises
 */

// const hasMoney = false;
//
// const myPromise = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             hasMoney ? resolve() : reject();
//         }, 0);
//     }
// );
//
// // console.log(myPromise); // Promise {<pending>}
//
// myPromise
//     .then(
//         () => {
//             console.log('🟢 Function 1');
//         },
//         () => {
//             console.log('🔴 Function 1');
//             return Promise.reject();
//         }
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 2');
//         },
//         () => {
//             console.log('🔴 Function 2');
//             return Promise.reject();
//         }
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 3');
//         },
//         () => {
//             console.log('🔴 Function 3');
//         }
//     );

/*
  =================================
  Promise - only resolve
 */

// const myPromise = new Promise(
//     (resolve) => {
//         setTimeout(() =>  resolve(), 1000);
//     }
// );
//
// myPromise
//     .then(
//         () => {
//             console.log('🟢 Function 1');
//         }
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 2');
//         }
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 3');
//         }
//     );

/*
  =================================
  Promise - getting user
 */

// const myPromise = new Promise(
//     (resolve) => {
//         setTimeout(() => resolve(), 500);
//     }
// );
//
// myPromise
//     .then(
//         // в then ми або матимемо файл, або ні
//         () => {
//             console.log('🟢 Ready state - 4');
//
//             const fileGetted = true;
//             return fileGetted ? Promise.resolve() : Promise.reject();
//         },
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 2');
//         }
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 3');
//             let lionGetted = true;
//             return lionGetted ? Promise.resolve() : Promise.reject();
//         }
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 4');
//         }
//     )
//     .catch(
//         () => {
//             console.log('🔴 Function');
//         }
//     );

/*
  =================================
  Finally
 */

// const myPromise = new Promise(
//     (resolve) => {
//         setTimeout(() => resolve(), 500);
//     }
// );
//
// myPromise
//     .then(
//         () => {
//             console.log('🟢 Function 1');
//         },
//     )
//     .finally(
//         () => {
//             console.log('In First Finally');
//         }
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 2');
//         },
//     )
//     .finally(
//         () => {
//             console.log('In Second Finally');
//         }
//     )
//     .then(
//         () => {
//             console.log('🟢 Function 3');
//         },
//     )
//     .finally(
//         () => {
//             console.log('In Third Finally');
//         }
//     )
//     .catch(
//         () => {
//             console.log('🔴 In Catch');
//         }
//     );

/*
  =================================
  SetTimeout
 */

// const myPromise = new Promise(
//     (resolve) => {
//         setTimeout(() => resolve(500), 500);  // called the function resolve
//     }
// );
//
// myPromise
//     .then(
//         // We work with the same function
//         (time) => {
//             console.log('🟢 Function 1', time);
//
//             return new Promise(resolve => {
//                 setTimeout(() => resolve(1000), 1000)
//             })
//
//             // return Promise.resolve(1000)
//         },
//     )
//     .then(
//         (time) => {
//             console.log('🟢 Function 2', time);
//
//             return new Promise(resolve => {
//                 setTimeout(() => resolve(1500), 1500)
//             })
//         },
//     )
//     .then(
//         (time) => {
//             console.log('🟢 Function 3', time);
//         },
//     );

/*
  =================================
  Get positions
 */

const getFile = file => {
    return new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', file);
            xhr.send();

            xhr.addEventListener('readystatechange', () => {
                if(xhr.readyState === 4) {
                    const isStatus = xhr.status < 400;
                    const result = JSON.parse(xhr.response);
                    const status = xhr.status;

                    isStatus ? resolve(result) : reject(status);
                }
            })
        }
    )
};

getFile('./files/assistant.json')
    .then(
        data => {
            console.log('🟢 OK in assistant function');
            console.log('Assistant: ', data);
        }
    )
    .then(
        () => {
            return getFile('./files/manager.json')
        }
    )
    .then(
        data => {
            console.log('🟢 OK in manager function');
            console.log('Manager: ', data);
        }
    );
