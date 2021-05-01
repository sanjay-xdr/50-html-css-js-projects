const jokeEl= document.getElementById('joke')
const jokebtn= document.getElementById('jokebtn')

jokebtn.addEventListener('click',generateJoke);
generateJoke();


async function generateJoke(){

    const config={      headers : { Accept: 'application/json'
       }}
  const result = await fetch('https://icanhazdadjoke.com',config);
  const data =await result.json();
  jokeEl.innerHTML=data.joke
}
    




