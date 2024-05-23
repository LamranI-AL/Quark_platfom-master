import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homme from "./pages/Homme";
import Detaille from "./pages/Detaille";
import ContactUs from "./pages/ContactUs";
import PageNotFounded from "./pages/PageNotFounded";
import { ChakraProvider } from "@chakra-ui/react";
import Events from "./pages/Events";
import "./index.css";

function App() {
  // const [eventes, setEventes] = useState([]);
  // useEffect(() => {
  //   getEventss();
  // }, []);

  // const getEventss = async () => {
  //   return axios
  //     .get("https://quark-api-ensabm.vercel.app/event")
  //     .then(async (res) => {
  //       console.log(res.data);
  //       await setEventes(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("error : " + error);
  //     });
  // };

  // console.log(eventes);
  return (
    // <AppContext.Provider value={eventes}>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homme />} />
            <Route path="/details" element={<Detaille />} />
            <Route path="/Events" element={<Events />} />

            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<PageNotFounded />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
    // </AppContext.Provider>
  );
}

export default App;
