import React from "react"
import { useState } from "react"
import Image from './components/Image'
import './App.css'

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? 'filled.jpeg' : 'empty.png'
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png" alt="" className="card--image" />
                <div className="card--info">
                    <Image 
                      icon = {starIcon}
                      toggleFavorite = {toggleFavorite} 
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
