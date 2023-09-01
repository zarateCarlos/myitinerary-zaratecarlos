import { useParams } from "react-router-dom";

const Form = () => {
    const params = useParams();
    const { name, lastname } = params;

    console.log(name);
    console.log(lastname);
    console.log(params);

    return (
        <h1> {name} {lastname} </h1>
    );
}

export default Form;
