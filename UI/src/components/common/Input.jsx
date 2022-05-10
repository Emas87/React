import { useRef, useState } from "react"
import "./Input.scss";

function Input(props) {
  const inputRef = useRef(null);
  const handleChange = (event) =>{
    let value = event.target.value;
    setState({ inputText: value, showClear: value.length > 0 });
    props.handleChange && props.handleChange(event)
  }

  const clear = () => {
		setState({ inputText: "", showClear: false });
		inputRef.current.focus();
	};
  const [state, setState] = useState({ inputText: props.value, showClear: false });
  return (
  <div className="input-label">
      <label className="m-0">{props.name}</label>
      <div className="input-group">        
        <input className="input-label__input form-control" type={props.type === "dir" ? "file" : props.type}
        value={state.inputText}
        placeholder={props.placeholder}
        disabled={props.disabled? props.disabled : false}
        onChange={handleChange}
        ref={props.reference}
        webkitdirectory={props.type === "dir" ? "" : "false"}
        />
      </div>
      {state.showClear ? (
				<button
					className={`input-label__clear btn btn-sm btn-secondary`}
					onClick={clear}
				>
					<i className={`intelicon-close-max`} />
				</button>
			) : null}
    </div>
  )
}

export default Input