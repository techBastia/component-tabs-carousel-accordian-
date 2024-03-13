import React, { useState } from 'react'

export const Tab = () => {
const [tab, setTab] = useState('homePage')

    const handleClick = (tabId) => {
        setTab(tabId)
    }
  return (
    <div>
        <ul className='tabUl'>
        <li className={tab === 'homePage'? "active tabLi" : "tabLi"} onClick={() => handleClick('homePage')}>Home</li>
        <li className={tab === 'aboutPage' ? 'active tabLi': 'tabLi'} onClick={() => handleClick('aboutPage')}>About Us</li>
        <li className={tab === 'contactPage' ? 'active tabLi' :'tabLi'} onClick={()=> handleClick('contactPage')}>Contact Us</li>
        </ul>

        {tab === 'homePage'? 'home page' : '' }
        {tab === 'aboutPage' ? 'about page' : ''}
        {tab === 'contactPage' ? 'contact us page' : ""}
    </div>
  )
}
