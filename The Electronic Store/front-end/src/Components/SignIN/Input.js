export default function Input(props) {
    const { error, label, name, type, value, onChange } = props;
    return (
        <div className="form-group mb-3" >
            <label>{label}</label>
            <input
                type={type}
                className="form-control mt-1"
                name={name}
                value={value}
                onChange={onChange}
                style={{borderRadius: '0px'}}
                required
            />
            <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>
        </div>
    );
}
