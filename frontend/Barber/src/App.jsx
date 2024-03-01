import ResponsiveDatePickers from "./components/schedule/index"
import HeaderComponent from "./components/Header/index"
import FooterComponent from "./components/Footer/index"
import RegisterForm from "./components/Forms/Register"
import { RoutesMain } from "./routes"
import { UserProvider } from "./context/User/index"
import {AuthProvider} from "./context/Auth/index"

function App() {

  return (
    <>
      <AuthProvider>
        <UserProvider>
          <div className="App">
            <RoutesMain />
          </div>
        </UserProvider>
      </AuthProvider>


    </>
  )
}

export default App
