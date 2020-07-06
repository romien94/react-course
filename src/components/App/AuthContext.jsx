import React from "react";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (login, password) => setIsLoggedIn(true);

  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

// export const withAuth = (WrappedComponent) => {
//   return class extends React.Component {
//     render() {
//       const context = React.useContext(AuthContext);
//       return (
//         <AuthContext.Consumer>
//           {(value) => <WrappedComponent {...value} {...this.props} />}
//         </AuthContext.Consumer>
//       );
//     }
//   };
// };

export const withAuth = (WrappedComponent) => {
  return (props) => {
    const context = React.useContext(AuthContext);
    return <WrappedComponent {...props} {...context}></WrappedComponent>
  }
}