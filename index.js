// const div = document.createElement('div')
// div.innerHTML = 
//     `<h1>🤖 BoredBot 🤖</h1>
//     <h2>Find something to do</h2>
//     <p id="text"></p>
//     <button id="btn">BoredBot</button>`

// document.body.appendChild(div)
const text = document.getElementById('text')
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            text.innerText = data.activity
        })  
    fetch('https://x-colors.yurace.pro/api/random/{all}?type=dark')
        .then(response => response.json())
        .then(color => {
            console.log(color)
            btn.style.background = `${color.hex}`
            text.style.color = `${color.hex}`
            text.style.borderColor = `${color.hex}`
        })

})