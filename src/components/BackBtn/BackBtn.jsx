import { Link } from "./BackBtn.styled"

const BackBtn = ({backLink}) => {
    return <Link to={backLink}>Go back</Link>
}

export default BackBtn