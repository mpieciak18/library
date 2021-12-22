const renderLoginMenu = (loginStatus, menuPartOne, menuPartTwo) => {
    const topLeftBottom = document.getElementById('top-left-bottom')
    topLeftBottom.innerHTML = ''
    if (loginStatus == false) {
        // Set class for parent div
        topLeftBottom.classList = 'logged-out'
        // Create login button
        const login = document.createElement('div')
        login.innerText = 'Sign In'
        login.id = 'login-button'
        login.addEventListener('click', menuPartOne)
        // Create register button
        const register = document.createElement('div')
        register.innerText = 'Register'
        register.id = 'register-button'
        register.addEventListener('click', menuPartTwo)
        // Append buttons to parent div
        topLeftBottom.append(login)
        topLeftBottom.append(register)
    } else {
        // Set class for parent div
        topLeftBottom.classList = 'logged-in'
        // Create welcome message
        const welcome = document.createElement('div')
        welcome.innerText = `Welcome, ${menuPartOne}!`
        welcome.id = 'welcome-message'
        // Create logout button
        const logout = document.createElement('div')
        logout.innerText = 'Sign Out'
        logout.id = 'logout-button'
        logout.addEventListener('click', () => menuPartTwo())
        // Append buttons to parent div
        console.log (welcome, logout)
        topLeftBottom.append(welcome)
        topLeftBottom.append(logout)
    }
}

export { renderLoginMenu }