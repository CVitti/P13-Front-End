// @ts-nocheck

// CSS Import
import "../styles/pages/HomePage.css"

// Custom components import
import FeatureItem from "../components/FeatureItem";

function HomePage() {
    return(
        <main>
            <div className="hero">
                <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureItem iconType="Chat"/>
                <FeatureItem iconType="Money"/>
                <FeatureItem iconType="Security"/>
            </section>
        </main>
    );
}
export default HomePage;