import React, {useState, useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll'
import Pretty from './single_set.js'
import axios from "axios"

// function QuestionAns(){
// 	const [data, setData] = useState([]);
	
// 	const url = 'http://127.0.0.1:8000/'
// 	useEffect(() => {
// 		let result = []
// 		const fetchFromUrl = async() => {
// 			const response = await axios.get(url)
// 			const response_data = await response.data.data
// 			await setData(response_data)
// 		}
// 		fetchFromUrl()
// 	}, [])
// 	const run_loop = ()=>{
// 		let arr = []
// 		let i = 1
// 		data.forEach(e => {
// 			arr.push(<Pretty count={i} question={e.question} answer_option={e.option_arr} answer={e.answer} key={e._id} corr_ans={e._id}/>)
// 			i+=1
// 		})
// 		return arr
// 	}
// 	return (
// 		<div className="container my-3">
// 			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
// 				{data.length ? run_loop() : `loading`}
// 			</div>
// 		</div>
// 	 )
// }
let i = 1
function QuestionAns(){
	const url = 'http://127.0.0.1:8000/'
	const [data, setData] = useState([]);
	const [currData, setCurrData] = useState([])

	useEffect(() => {
		let result = []
		const fetchFromUrl = async() => {
			const response = await axios.get(url)
			const response_data = await response.data.data
			await setData(response_data)
		}

		fetchFromUrl()
	}, [])

	const run_loop = async ()=>{
		let arr = []

		for(let counter = 0; counter < 12; counter++){
			arr.push(<Pretty count={i} question={data[i].question} answer_option={data[i].option_arr} answer={data[i].answer} key={data[i]._id} corr_ans={data[i]._id}/>)
			i+=1
			console.log(i, data[i].question)
		}

		let dat = await currData.concat(arr)
		await setCurrData(dat)
	}

	useEffect(() => {
		run_loop()
	}, [data.length])

	const handleInfiniteScroll = async() => {
		if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
			await run_loop()
		}
	}

	useEffect(() =>{
		window.addEventListener("scroll", handleInfiniteScroll)
		return () => window.removeEventListener("scroll", handleInfiniteScroll)
	}, [currData])

	return (
		<div className="container my-3">
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
				{data.length ? currData : `loading`}
			</div>
		</div>
	)
}

export default QuestionAns;