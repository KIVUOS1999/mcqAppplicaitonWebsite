import React, {useState} from "react"
let answer_map = {}

const pretty = ({count, question, answer_option, answer, corr_ans}) => {
	answer_map[corr_ans] = answer

	const change_to_success = (e)=>{
		e.classList.remove("btn-primary")
		e.classList.add("btn-success")
	}

	const change_to_error = (e)=>{
		e.classList.remove("btn-primary")
		e.classList.add("btn-danger")
	}

	const get_value = (e, corr_ans)=>{
		let curr_val = e.innerHTML
		answer_map[corr_ans].trim() == curr_val ?  change_to_success(e) : change_to_error(e)
	}

	function list_maker(){
		const list = answer_option.map(ans => <a className="btn btn-primary" style={{marginTop: "10px"}} onClick={ (e)=>{get_value(e.target, corr_ans)} }>{ans}</a>)
		return list;
	}

	const card_custom_style = {
		display: "flex", 
		flexDirection: "column",
	}

	const last_element = {
		display: "flex",
		flexWrap: "wrap",
		marginTop: "auto",
		justifyContent: "space-evenly",
	}

	return(
		<div className="col">
			<div className="card h-100" style={{minHeight: "400px"}}>
				<div className="card-body" style={card_custom_style}>
					<h5 className="card-title">Q.no.: {count}</h5>
					<p className="card-text">{question}</p>
					<div className="card-footer" style={last_element}>
						{list_maker()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default pretty