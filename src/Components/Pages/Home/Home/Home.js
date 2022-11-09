import useTitle from "../../../../hooks/useTitle";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Heros from "../Heros/Heros";
import Services from "../Services/Services";

const Home = () => {
    useTitle("home")

    return (
        <>
            <section className="w-[60%] mx-auto">
                <Heros/>
            </section>
            <section className="w-[60%] mx-auto">
                <Services/>
            </section>
            <section className="w-[60%] mx-auto">
                <About/>
            </section>
            <section className="w-[60%] mx-auto">
               <Gallery></Gallery>
            </section>


        </>
    );
};

export default Home;