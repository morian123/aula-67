import { Layout, Typography, Space } from "antd";
import { Link, BrowserRouter as Router, useRoutes} from "react-router-dom"
import Home from "./pages/home";
import CreatClass from "./pages/CreateClass";
const { Header } = Layout;
const { Title } = Typography;

function AppRoutes() {
  const routes = [
  {path: "/", element: <Home />},
  {path: "/CreatClass", element: <CreatClass />}
  ]

  return useRoutes(routes);

}


function App() {

  return (
    <>
    <Router>
      <Header style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
      }}>
        <Title level={1} style={{color:"#fff"}}>PrismaGestão</Title>
        <Space>
          <Link style={{marginRight:16}} to="/">Turmas disponiveis</Link>
          <Link to="/CreatClass">Criar turmas </Link> 
        </Space>
      </Header>
      <AppRoutes/>
    </Router>
    </>
  );
}

export default App;
