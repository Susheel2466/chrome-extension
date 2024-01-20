const getJokes = async () => {
    try{
        const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-RapidAPI-Key': '9f3f70438amshf9ce733be5500f1p106ff0jsnf586c560b507',
                'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const result = await response.text();
       
        const data = await JSON.parse(result);
        const myJoke = document.querySelector('#myJoke');
        myJoke.innerHTML = data.value;
    } catch(error){

    }
}

window.addEventListener('load', () => {
    getJokes();
});

/* To publish your extension go to this url and make payment:-
    https://chrome.google.com/webstore/devconsole/register

    and follow steps given in this url to publish

    https://developer.chrome.com/docs/webstore/publish/
*/