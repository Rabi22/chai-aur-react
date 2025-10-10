import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// It creates a piece of internal memory (state) to track the current user (user) and a function (setUser) that any component can use to change that user data.
// It then returns the <UserContext.Provider> component, making the current user data (user) and the update function (setUser) available to all components that are wrapped inside of it ({children}).
