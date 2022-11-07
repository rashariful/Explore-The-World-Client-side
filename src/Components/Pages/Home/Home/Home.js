import { Carousel } from "flowbite-react";
import Heros from "../Heros/Heros";
import Services from "../Services/Services";

const Home = () => {
 

    return (
       <>
       <section className="w-[60%] mx-auto">
             <Heros></Heros>
       </section>
            <section className="w-[60%] mx-auto">
            <Services>

            </Services>
       </section>

       </>
    );
};

export default Home;