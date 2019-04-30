// 02.userAxios.js

const URL = 'https://dog.ceo/api/breeds/image/random'
axios.get(URL)
    .then(response => {
        const imageURL = response.data.message // axios로 받은 response는 바로 파싱이 가능
        const imgBox = document.querySelector('.img-box')
        const img = document.createElement('img')
        img.src = imageURL
        imgBox.appendChild(img)
    })

const getImageUrl = async (URL) => {
    const response = await axios.get(URL)

    const imageURL = response.data.message // axios로 받은 response는 바로 파싱이 가능
    const imgBox = document.querySelector('.img-box')
    const img = document.createElement('img')
    img.src = imageURL
    imgBox.appendChild(img)
}

getImageUrl(URL)