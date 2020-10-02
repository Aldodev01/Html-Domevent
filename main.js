

// Kita buat sebuah fungsi untuk
// memunculkan MODAL

const showModal = ()=>{
    // kita dapatkan element MODAL
    // yang mau dimunculkan
    let modal = document.getElementById('modalMenu')

    // kita atur styling element modalnya
    modal.style.display = 'flex'

}

const closeModal = ()=>{
    let modal = document.getElementById
    ('modalMenu')
    modal.style.display = 'none'
}

// Kita ambil element yang diinginkan
// DIpindahkan ke element Div
let Showcase = document.getElementById('wrapper_Showcase')

// // kita inject elemennya dengan syntax HTML
// Showcase.innerHTML +=`
// <img src="https://picsum.photos/seed/22/300" alt="gambar no 22"/>
// `

// i pertama nilai awal
// i kedua nilai berhenti dari loop
// i ketiga nilai increment
for(var i = 0 ; i < 21 ; i ++){
    Showcase.innerHTML += `
    <img src= 'https://picsum.photos/seed/${23 + i}/200' alt= 'gambar ke ${1}'/>
    `

}