import { useNavigate } from "react-router-dom";
import { useState } from "react"
import NavBar from "../Components/NavBar"
const ContactPage = () => {

    const navigate = useNavigate();

    const redirectUserFunction = () => {
        navigate("/")
    }

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");


    return (
        <div>
            <NavBar />
            <h1>Contact Page</h1>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>



            <label>First Name: </label>
            <input type="text" onChange={(e) => { setFirstName(e.target.value) }} />
            <br />

            <label>Last Name: </label>
            <input type="text" onChange={(e) => { setLastName(e.target.value) }} />
            <br />

            <label>Email: </label>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
            <br />

            <button onClick={(e) => {
                if (firstname === "" || lastname === "" || email === "") {
                    alert("Input fields must be filled in order to move on")
                }
                else {
                    redirectUserFunction()
                }
            }}>Submit</button>
        </div>
    )
}

export default ContactPage