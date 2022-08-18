console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getDoggos(){
    fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
        const dogs = data.message
        dogs.forEach((dog) => {
            doggyImg = document.createElement('img')
            doggyImg.src = dog
            const dogList = document.querySelector('#dog-image-container')
            dogList.appendChild(doggyImg)


        })
    })
}

function getBreeds(){
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
        dogBreeds = data.message
        for(dogBreed in dogBreeds){
            const breedList = document.querySelector('#dog-breeds')
            let breed = document.createElement('li')
            breed.innerText = dogBreed
            breed.id = "dog-breed"
            breedList.appendChild(breed)
            breed.addEventListener('click', () => breed.style.color = 'green')
        }
    }
    )
    
}

function handleDropdown(e){
    let letter = e.target.value
    let breedItems = document.querySelectorAll('#dog-breed')
    breedItems.forEach((item) => {
        item.style.display = ''
        if(item.innerText[0] !== letter){
            item.style.display = "none"
        }
    })
}

document.addEventListener('DOMContentLoaded', getDoggos)
document.addEventListener('DOMContentLoaded', getBreeds)
document.addEventListener('DOMContentLoaded', (() => {
    const dropdown = document.querySelector('#breed-dropdown')
    dropdown.addEventListener('change', handleDropdown)
}))

