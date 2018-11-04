let profiles=[{'masterProfile':'test1',remvalProfile:['test2','test3','test4']},
              {'masterProfile':'test5',remvalProfile:['test6','test7','test8']},
              {'masterProfile':'test9',remvalProfile:['test10','test11','test12']}];


 function getData(data){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(data);
      },2000)
  })
 }             

//getData('hello').then((data) => console.log(data));

async function * createAsyncIterable(syncIterable) {
    for (const elem of syncIterable) {
        yield elem;
    }
}

async function f() {
    for await (const x of createAsyncIterable(profiles)) {
       
    }
}

f().then((data) => console.log(data));
