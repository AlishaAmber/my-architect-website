import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="text-content">
                    <h1 className="main-title">Project Lorum</h1>
                    <p>Explore our amazing architectural designs.</p>
                </div>
                <div className="hero-item">
                    <Image src="/Rectangle-6.png" alt="Project 1" width={500} height={500} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
