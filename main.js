//Дз 2: У вас должен быть JSON объект в перемнной jsonData. нужно создать это перемнное при создания промиса. И внутри передать через resolve через 2 секунды эту переменную и след цепочке .then получить его и конвертировать (parse) в обычный js объект
//допДЗ: добавить ошибочный сценарий через reject и обработку загрузки и все это выводить в консоле

console.log('client get request');
console.log('start loading');



const promise = new Promise((resolve,reject)=> {
    const error = true;
    const jsonData = {
        username : 'Asel',
        userage: 17,
    };
    setTimeout (() => {
        if (!error) {
            const response = {
                status:200,
                url: 'example.com',
            
        }
        
        console.log('server get response ',response);
        console.log('preaparing data');
        resolve(jsonData);
        } else{
            reject('something has gone wrong');
        }
    },2000);
        
});

promise
.then((props) => {

    console.log('response from props',props);
    
        console.log('server get data ',data);
        console.log('ending loading');
        const personStr = JSON.stringify(person);
        const parsedStr = JSON.parse(personStr);
        console.log(parsedStr,personStr);

})
.catch((err) => {
    console.log('ERror',err);
})
.finally(() => {
console.log('ending loading');
});



