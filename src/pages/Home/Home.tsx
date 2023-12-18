import Layout from "../../components/Layout/Layout";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <Layout>
      <div data-testid="nav-container">
        <Nav />
      </div>
    </Layout>
  );
};

export default Home;
