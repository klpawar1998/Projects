import { useEffect, useState } from "react";
import { loginUser } from "../../Reducer/UserReducer";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { Link, unstable_HistoryRouter, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import ShopServices from "../ShopServices/ShopServices";
import { actions } from "../../store";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";

export default function LoginForm(props) {

    const dispatch = useDispatch(props);
    const navigate = useNavigate();

    const initialState = {
        email: "",
        password: "",
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
        loginUser(values)
            .then((response) => {
                dispatch(actions.authActions.login(response));
                navigate(-1);
            })
            .catch((error) => {
                if (!error.props) {
                    alert("Account not found");
                }
                setErrors(error.props);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container my-5 mt-5">
                <div className={"card"} style={{ width: "400px", borderRadius: "0", marginTop: '90px' }}>
                    <div className="card-body">
                        <h3 className="card-title">Login</h3>
                        <hr />
                        <form onSubmit={onSubmit}>
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
                            <div className="d-flex justify-content-end mb-5">
                                <button className="btn btn-dark" style={{ borderRadius: "0" }} type="submit">
                                    Confirm
                                </button>
                            </div>
                        </form>
                        <p>
                            Don't have an account?{" "} <Link to={'/register'}>Register</Link>
                        </p>
                    </div>
                </div>
            </div>
            <ShopServices />
            <Footer />
        </div>
    );
}
