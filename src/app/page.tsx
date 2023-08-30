import Card from "../components/card/card";
import Grid from "../components/grid/grid";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { foodData } from "../data";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Grid>
        {foodData.map((item, index) => {
          return (
            <Card
              image={item.img}
              title={item.title}
              description={item.text}
              position={index + 1}
            />
          );
        })}
      </Grid>
      <Footer />
    </main>
  );
}
