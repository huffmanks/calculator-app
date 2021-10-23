const toggleSwitch = document.querySelector('#toggle-switch')
const toggleSwitchBall = document.querySelector('.toggle-switch-after')
const toggleOptions = document.querySelectorAll('.toggle-options span')
const keyEquals = document.querySelector('.key-equals')

toggleSwitch.addEventListener('click', (e) => {
    if (e.clientX - toggleSwitch.offsetLeft < 16) {
        updateTheme1()
    }
    if (
        e.clientX - toggleSwitch.offsetLeft > 15 &&
        e.clientX - toggleSwitch.offsetLeft < 32
    ) {
        updateTheme2()
    }
    if (e.clientX - toggleSwitch.offsetLeft > 31) {
        updateTheme3()
    }
})

toggleOptions.forEach((toggleOption) => {
    toggleOption.addEventListener('click', () => {
        if (toggleOption.innerText === '1') {
            updateTheme1()
        }
        if (toggleOption.innerText === '2') {
            updateTheme2()
        }
        if (toggleOption.innerText === '3') {
            updateTheme3()
        }
    })
})

const updateTheme1 = () => {
    toggleSwitchBall.style.left = '2px'
    toggleSwitchBall.style.transform = 'translateX(0%)'
    document.documentElement.style.setProperty(
        '--color-primary',
        'hsl(0, 0%, 100%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-primary',
        'hsl(222, 26%, 31%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-screen',
        'hsl(224, 36%, 15%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-keypad',
        'hsl(223, 31%, 20%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-primary',
        'hsl(30, 25%, 89%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-primary-shadow',
        'hsl(28, 16%, 65%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-secondary',
        'hsl(225, 21%, 49%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-secondary-shadow',
        'hsl(224, 28%, 35%)'
    )
    keyEquals.style.color = 'hsl(0, 0%, 100%)'
    document.documentElement.style.setProperty(
        '--theme-key-equals',
        'hsl(6, 63%, 50%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-equals-shadow',
        'hsl(6, 70%, 34%)'
    )
    document.documentElement.style.setProperty(
        '--theme-color-primary',
        'hsl(221, 14%, 31%)'
    )
    document.querySelector('.attribution').style.color = 'hsl(0, 0%, 0%)'
}

const updateTheme2 = () => {
    toggleSwitchBall.style.left = 'calc(61% - 3px)'
    toggleSwitchBall.style.transform = 'translateX(-61%)'
    document.documentElement.style.setProperty(
        '--color-primary',
        'hsl(60, 10%, 19%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-primary',
        'hsl(0, 0%, 90%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-screen',
        'hsl(0, 0%, 93%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-keypad',
        'hsl(0, 5%, 81%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-primary',
        'hsl(45, 7%, 89%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-primary-shadow',
        'hsl(35, 11%, 61%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-secondary',
        'hsl(185, 42%, 37%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-secondary-shadow',
        'hsl(185, 58%, 25%)'
    )
    keyEquals.style.color = 'hsl(0, 0%, 100%)'
    document.documentElement.style.setProperty(
        '--theme-key-equals',
        'hsl(25, 98%, 40%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-equals-shadow',
        'hsl(25, 99%, 27%)'
    )
    document.documentElement.style.setProperty(
        '--theme-color-primary',
        'hsl(60, 10%, 19%)'
    )
    document.querySelector('.attribution').style.color = 'hsl(0, 0%, 0%)'
}

const updateTheme3 = () => {
    toggleSwitchBall.style.left = 'calc(100% - 3px)'
    toggleSwitchBall.style.transform = 'translateX(-100%)'
    document.documentElement.style.setProperty(
        '--color-primary',
        'hsl(52, 100%, 62%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-primary',
        'hsl(268, 75%, 9%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-screen',
        'hsl(268, 71%, 12%)'
    )
    document.documentElement.style.setProperty(
        '--theme-bg-keypad',
        'hsl(268, 71%, 12%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-primary',
        'hsl(268, 47%, 21%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-primary-shadow',
        'hsl(290, 70%, 36%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-secondary',
        'hsl(281, 89%, 26%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-secondary-shadow',
        'hsl(285, 91%, 52%)'
    )
    keyEquals.style.color = 'hsl(198, 20%, 13%)'
    document.documentElement.style.setProperty(
        '--theme-key-equals',
        'hsl(176, 100%, 44%)'
    )
    document.documentElement.style.setProperty(
        '--theme-key-equals-shadow',
        'hsl(177, 92%, 70%)'
    )
    document.documentElement.style.setProperty(
        '--theme-color-primary',
        'hsl(52, 100%, 62%)'
    )
    document.querySelector('.attribution').style.color = 'hsl(52, 100%, 62%)'
}
