import About from "../About/About";
import Heros from "../Heros/Heros";
import Services from "../Services/Services";

const Home = () => {

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


        </>
    );
};

export default Home;