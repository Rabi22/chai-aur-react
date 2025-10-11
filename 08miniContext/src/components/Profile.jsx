import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile

// It creates a piece of internal memory (state) to track the current user (user) and a function (setUser) that any component can use to change that user data.
// It then returns the <UserContext.Provider> component, making the current user data (user) and the update function (setUser) available to all components that are wrapped inside of it ({children}).