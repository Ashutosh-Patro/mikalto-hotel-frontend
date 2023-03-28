const crossIcon = document.querySelector('#cross-button')
const dropDown = document.querySelector('#dropdown-button')
const navBar = document.querySelector('#nav-list')
const navLeft = document.querySelector('#nav-item-list-left')
const navRight = document.querySelector('#nav-item-list-right')
const experienceItem = document.querySelectorAll('#experience-items div')
const reviewItem = document.querySelectorAll('#review-items .review-item-div')
const activityData = document.querySelector('#activities')

function dropdown() {
    crossIcon.classList.toggle('hidden')
    dropDown.classList.toggle('hidden')
    navLeft.classList.toggle('hidden')
    navRight.classList.toggle('hidden')
    navBar.style.background = 'rgba(0,0,0,0.8)'
}

function removeDropdown() {
    dropDown.classList.toggle('hidden')
    crossIcon.classList.toggle('hidden')
    navLeft.classList.toggle('hidden')
    navRight.classList.toggle('hidden')
    navBar.style.background = ('none')
    navBar.style.opacity = '1'
}

(async function fetchCards() {
    await fetch('http://localhost:8081/experience').then((data) => {
        return data.json();
    }).then((res) => {
        experienceItem.forEach((item, index) => {
            item.querySelector('.experience-image').setAttribute('src', `${res.experienceObj[index].imageURL}`)
        })
        experienceItem.forEach((item, index) => {
            item.querySelector('.sub-heading').textContent = `${res.experienceObj[index].cardSubHeading}`
        })
        experienceItem.forEach((item, index) => {
            item.querySelector('.heading').textContent = `${res.experienceObj[index].cardHeading}`
        })
        experienceItem.forEach((item, index) => {
            item.querySelector('.content').textContent = `${res.experienceObj[index].cardContent}`
        })
    })
})()

async function fetchReviews() {
    await fetch('http://localhost:8081/reviews').then((data) => {
        return data.json();
    }).then((res) => {
        reviewItem.forEach((item, index) => {
            item.querySelector('.review-image').setAttribute('src', `${res.reviewsObj[index].profileImage}`)
        })
        reviewItem.forEach((item, index) => {
            item.querySelector('.review-name').textContent = `${res.reviewsObj[index].name}`
        })
        reviewItem.forEach((item, index) => {
            item.querySelector('.review-date').textContent = `${res.reviewsObj[index].date}`
        })
        reviewItem.forEach((item, index) => {
            item.querySelector('.review-default-image').setAttribute('src', `${res.reviewsObj[index].profileLogo}`)
        })
        reviewItem.forEach((item, index) => {
            item.querySelector('.review-heading').textContent = `${res.reviewsObj[index].reviewHead}`
        })
        reviewItem.forEach((item, index) => {
            item.querySelector('.review-content').textContent = `${res.reviewsObj[index].reviewContent}`
        })
    })
}

fetchReviews()

async function fetchActivities() {
    await fetch('http://localhost:8081/activitiesNature').then((data) => {
        return data.json();
    }).then((res) => {
        activityData.querySelector('.activities-image').setAttribute('src', `${res.activitiesNatureObj[index].imageURL}`)
    })
}

fetchActivities()