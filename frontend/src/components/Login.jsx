import { useEffect, useState } from 'react'
import box from '../static/box.png'

export function Login() {

    // useEffect(() => {
    //     document.title = "Inicio de sesión";
    // }, []);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center mt-3 mb-5" style={{color: "white"}}>InstaYA - MENSAJERÍA</h1>
            <div className="d-flex flex-column align-items-center rounded w-50 shadow" style={{backgroundColor: "white"}}>
                <h3 className="py-5">INICIO DE SESIÓN</h3>
                <img src={box} alt="logo" style={{width:"15%"}}></img>
                <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    <div>
                        <div className="my-4 row">
                            <label for="username" className="mt-1 form-label col">Usuario:</label>
                            <div>
                                <input 
                                    type="text" 
                                    className="form-control rounded col" 
                                    id="username" 
                                    placeholder="Ingrese su id." 
                                    name="username"
                                    value={inputs.username || ""}
                                    onChange={handleChange}>
                                </input>
                            </div>
                        </div>
                        <div className="mb-4 row">
                            <label for="pwd" className="mt-1 form-label col">Contraseña:</label>
                            <div>
                                <input 
                                    type="password" 
                                    className="form-control rounded col" 
                                    id="pwd" 
                                    placeholder="Ingrese su contraseña" 
                                    name="pwd"
                                    value={inputs.pwd || ""}
                                    onChange={handleChange}>
                                </input>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4 mt-4 rounded">Iniciar sesión</button>
                    <p className="text-center"><a className="text-dark" href="/recuperar-password" style={{textDecoration: "none"}}>¿Olvidó su contraseña?</a></p>
                </form>
            </div>
        </div>
    )
}