import Routes from './routes/index'
import GlobalStyle from './styles/global'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;
