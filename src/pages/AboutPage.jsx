import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>
                    This is a React app to leave feedback for a product or
                    service
                </p>
                <p>
                    This app was built alongside Brad Traversy's 'React Front to
                    Back 2022' course on Udemy.com
                </p>
                <p>Thank you, Brad!</p>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
    );
}

export default AboutPage;
