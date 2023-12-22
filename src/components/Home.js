import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="container">
            <div>
                <button className="btn btn-primary home-links"><Link to="generate-spreadsheet">Generate Spreadsheet</Link></button>
                <button className="btn btn-primary home-links"><Link to="documentation">Documentation</Link></button>
            </div>
        </div>
    )
}