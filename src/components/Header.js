import React from 'react'

function Header({onDarkModeClick}) {
    const isDarkMode= ""
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <header>
            <button onClick={onDarkModeClick()}>Click me</button>
        </header>
    </div>
  )
}

export default Header