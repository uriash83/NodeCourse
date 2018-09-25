
var asyncAdd = (a,b) => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b) // resolve zwraca wynik 
            }
            else{
                reject('Argunement are not numbers') // reject zwraca błąd który ,musimy daj osłużyć
            };
        },1500);
    });
};
// to poniżej to się nazywa promises chaining
asyncAdd(4,7).then((res)=>{
    console.log("Resole",res);
    return asyncAdd(res,34)
}).then((res)=>{  ///obsługra drugieho ( wewnętrznego ) promise
    console.log('Shoule be 45',res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});
// var somePromise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         //resolve('Hej its work');// nie można jenocześnie dać resolve i reject
//         reject('Unable to fulfill promise');
//     },2500);
    
// });
// somePromise.then((message) => {
//     console.log('Message',message);
// },(errorMessage)=>{
//     console.log('Error: ',errorMessage);
// });