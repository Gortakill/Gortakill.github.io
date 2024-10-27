const arrOfUser = [
    {name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'some@mail.com', country:'United States', status: true},
    {name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'some@mail.com', country:'United States', status: true},
    {name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'some@mail.com', country:'United States', status: false},
    {name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'some@mail.com', country:'United States', status: true},
    {name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'some@mail.com', country:'United States', status: false},
    {name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'some@mail.com', country:'United States', status: true},
    {name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'some@mail.com', country:'United States', status: true},
    {name: 'Jane Cooper', company: 'Microsoft', phone: '(255) 555-0118', email: 'some@mail.com', country:'United States', status: false},
]

let isOpen = false

const windowWidth = window.outerWidth

const tableBody = document.getElementById('tableBody')


arrOfUser.forEach((user) => {
    const tableItem = document.createElement('tr')
    tableItem.className = `user-item ${user.status ? 'active' : 'inactive'}`

    tableItem.innerHTML = `
        <td>${user.name}</td>
        <td>${user.company}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${user.country}</td>
        <td><button class=${user.status ? 'Active' : 'Inactive'}>${user.status ? 'Active' : 'Inactive'}</button></td>
    `

    tableBody.appendChild(tableItem)
})

    const mobileMenu = document.getElementById('mobileMenu')
    arrOfUser.forEach((user) => {
        const mobileItem = document.createElement('div')
        mobileItem.className = 'mobile-item'
        mobileItem.innerHTML = `
            <div class="user-info-item">
                <h3>Customer Name: </h3>
                <p>${user.name}</p>
            </div>
            <div class="user-info-item">
                <h3>Company: </h3>
                <p>${user.company}</p>
            </div>
            <div class="user-info-item">
                <h3>Phone Number: </h3>
                <p>${user.phone}</p>
            </div>
            <div class="user-info-item">
                <h3>Email: </h3>
                <p>${user.email}</p>
            </div>
            <div class="user-info-item">
                <h3>Country: </h3>
                <p>${user.country}</p>
            </div>
            <div class="user-info-item">
                <h3>Status: </h3>
                <button class=${user.status ? 'Active' : 'Inactive'}>${user.status ? 'Active' : 'Inactive'}</button>
            </div>
    `

    mobileMenu.appendChild(mobileItem)
    })

    
const navigation = document.getElementById('navigation')

const onClick = () => {
    isOpen = !isOpen
    navigation.className = `navigation-${isOpen ? 'open' : 'close'}`
}

document.getElementById('toggleMenu').addEventListener('click', onClick)