// const div = document.createElement('div')
// div.innerHTML = 
//     `<h1>🤖 BoredBot 🤖</h1>
//     <h2>Find something to do</h2>
//     <p id="text"></p>
//     <button id="btn">BoredBot</button>`

// document.body.appendChild(div)

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('text').innerText = data.activity    
        })  
})