import { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import ShopServices from "../ShopServices/ShopServices";
import { registerUser } from "../../Reducer/UserReducer";
import { actions } from "../../store";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";



export default function RegisterForm(props) {

    const dispatch = useDispatch(props);
    const navigate = useNavigate();

    const initialState = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const onChange = (e) => {
        setValues((prevValues) => {
            return { ...prevValues, [e.target.name]: e.target.value };
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (values.password !== values.confirmPassword)
            return setErrors({
                password: "Passwords must match!",
                confirmPassword: "Passwords must match!",
            });
        console.log(values)
        registerUser(values).then((response) => {
            dispatch(actions.authActions.login(response));
            navigate('/home');
        })
            .catch((error) => {
                if (!error.props) {
                    alert("Cannot connect to server");
                }
                setErrors(error.props);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <div className={"card"} style={{ width: "400px", borderRadius: '0', marginTop: '90px' }}>
                    <div className="card-body">
                        <h3 className="card-title ">Register</h3>
                        <hr />
                        <form onSubmit={onSubmit}>
                            <Input
                                name="username"
                                label="Username"
                                type="text"
                                value={values.username}
                                error={errors.username}
                                onChange={onChange}
                            />
                            <Input
                                name="email"
                                label="Email"
                                type="email"
                                value={values.email}
                                error={errors.email}
                                onChange={onChange}
                            />
                            <Input
                                name="password"
                                label="Password"
                                type="password"
                                value={values.password}
                                error={errors.password}
                                onChange={onChange}
                            />
                            <Input
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                value={values.confirmPassword}
                                error={errors.confirmPassword}
                                onChange={onChange}
                            />
                            <div className="d-flex justify-content-end mb-3">
                                <button className="btn btn-dark" style={{ borderRadius: "0" }} type="submit">
                                    Confirm
                                </button>
                            </div>
                        </form>
                        <p>
                            Already have an account?{" "} <Link to={'/login'}>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
            <ShopServices />
            <Footer />
        </div>
    );
}
