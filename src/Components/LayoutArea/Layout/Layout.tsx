import Header from "../Header/Header";
import "./Layout.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
import CssBaseline from "@mui/material/CssBaseline";

function Layout(): JSX.Element {

    const darkTheme = createTheme({
        typography: {
            fontFamily: "monospace",
            fontSize: 15,

        },
      palette: {
    primary: {
      main: '#54A3D4',
      light: '#757ce8',

    },
    secondary: {
      main: '#f44336',
    },
    error:{
      main: "#f44336"
    },
    background: {
      default: '#E5E7E9',
    },  
          
      },
      
    

    });
    
    return (
        <div className="Layout">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
            <header>
                <Header/>
            </header>
            <main>
                <Routing/>
            </main>
            <footer>
                <Footer/>
            </footer>

			</ThemeProvider>
        </div>
    );
}

export default Layout;
