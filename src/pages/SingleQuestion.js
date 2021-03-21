import React from "react";
import { useState, useEffect } from "react";
import AceEditor from "react-ace";
import { useParams } from "react-router-dom";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "./SingleQuestion.css";
import ReactLoading from "react-loading";

const axios = require("axios");

// Hostname: https://nikhiljugale007.netlify.app/

// Client Id: a688500545ec811583316543b9f225b12c3799a51065.api.hackerearth.com

// Client Secret Key: 9c4e7cb63a92ec96a7263a7132b8233f0a82c02e

const SingleQuestion = (props) => {
	const [code, setCode] = React.useState("");
	const [lang, setLang] = React.useState("c");
	const [verdict, setVerdict] = React.useState(
		"Your Code verdict will appear here after submission"
	);
	const [question, setQuestion] = useState([]);
	const [loading, setLoading] = useState(true);

	const { hanlde } = props.match.params;
	console.log(hanlde);

	function onChange(newValue) {
		setCode(newValue);
	}

	const url = "https://api.jdoodle.com/v1/execute";

	function evaluateCode() {
		var program = {
			script: code,
			language: lang,
			versionIndex: "0",
			stdin: "4",
			clientId: "d905c53c5330920d50e79face1243b95",
			clientSecret:
				"943c704c5f3ce40e29ef3f470fc4f06083e6800dfd54d8e3250b241884ee6f50",
		};

		axios
			.post(url, program)
			.then((response) => {
				alert("OUTPUT = " + response.data.output);
				console.log(response.data);
				setVerdict(response.data.output);
			})
			.catch((err) => {
				alert("ERROR = " + err.message);
			});
	}

	const GetQuestion = () => {
		axios
			.get(`https://codekit-backend.herokuapp.com/api/questions/${slug}`)
			.then((response) => {
				setQuestion(response);
				setLoading(false);
			})
			.catch((err) => console.error(`Error : {err}`));

		return <></>;
	};

	const { slug } = useParams();

	useEffect(() => {
		setLoading(true);
		// alert(slug);
		GetQuestion();
		console.log(question);
	}, []);

	function handleChange(event) {
		setLang(event.target.value);
	}

	return (
		<>
			{loading ? (
				<div className="question-container">
					<div style={{ marginLeft: "48%" }}>
						<ReactLoading type={"bars"} color={"blue"} />
					</div>
				</div>
			) : (
				<>
					<div className="question-cotainer">
						<div className="question-title">{question.data.question_name}</div>
						<hr />
						<div className="question-extras">
							<div className="question-difficulty">
								Difficulty: {question.data.difficulty}
							</div>
							<div className="question-tags">Tags:Coming Soon</div>
						</div>
						<hr />
						<div className="question-description">
							<h6>Description:</h6>
							<p>{question.data.description}</p>
						</div>
						<hr />
						<div>
							<h6>Input:</h6>
							<p>{question.data.input}</p>
						</div>
						<hr />
						<div>
							<h6>Output:</h6>
							<p>{question.data.output}</p>
						</div>
						<hr />
						<div>
							<h6>Constraint:</h6>
							<p>{question.data.constraints}</p>
						</div>
						<hr />
						<div>
							<h6>Sample Input:</h6>
							<p>{question.data.sample_input}</p>
						</div>
						<hr />
						<div>
							<h6>Sample Output:</h6>
							<p>{question.data.sample_output}</p>
						</div>
						<hr />
						<div>
							<form
								className="filter-form"
								style={{ width: "100px", marginLeft: "0px" }}
							>
								<div className="form-group">
									<label htmlFor="difficulty">Select Language</label>
									<select
										name="difficulty"
										id="difficulty"
										onChange={handleChange}
										className="form-control"
									>
										<option value="c">C</option>
										<option value="cpp14">C++</option>
										<option value="java">Java</option>
										<option value="python3">Python</option>
									</select>
								</div>
							</form>
							<hr />
							<h6>Write Code here:</h6>
							<div className="editor-container">
								<AceEditor
									mode="cpp"
									theme="solarized_dark"
									onChange={onChange}
									name="editor"
									fontSize="18px"
									width="80%"
									height="600px"
									placeholder="write your code here"
									enableBasicAutocompletion="true"
									enableLiveAutocompletion="true"
									editorProps={{ $blockScrolling: true }}
									value={code}
									onChange={onChange}
									// setOptions={{
									// 	enableBasicAutocompletion: true,
									// 	enableLiveAutocompletion: true,
									// 	enableSnippets: true,
									// }}
								/>
								<button
									onClick={evaluateCode}
									className="btn btn-primary btn-submit"
								>
									Submit
								</button>
							</div>
						</div>
						<hr />
						<div>
							<h6>Code Verdict:</h6>
							<p>{verdict}</p>
						</div>
						<hr />
					</div>
				</>
			)}
			{/* <div className="question-cotainer">
				{slug}
				{console.log(question.data.input)}
				<div className="question-title">Even Sum</div>
				<hr />
				<div className="question-extras">
					<div className="question-difficulty">Difficulty: Medium</div>
					<div className="question-tags">Tags:Resursion</div>
				</div>
				<hr />
				<div className="question-description">
					<h6>Description:</h6>
					<p>
						There are N integers in an array A. Two players take turns
						alternatively in placing signs (+ or -) before them, and then they
						all are added. The sign can be placed before any element of the
						array that has not been assigned a sign yet. All elements must be
						assigned a sign. Player 1 wins if the resulting sum is even, else
						player 2 wins. Find out who shall win if they both play optimally.
					</p>
				</div>
				<hr />
				<div>
					<h6>Input:</h6>
					<p>
						First line will contain T, number of testcases. Then the testcases
						follow. <br />
						Each testcase contains 2 lines of input. <br />
						First line contains a single integer N, size of the array. <br />
						Second line contains N space separated integers - A1,A2,…,AN,
						denoting the array elements"
					</p>
				</div>
				<hr />
				<div>
					<h6>Output:</h6>
					<p>
						For each testcase, output in a single line "1", if the first person
						wins or "2" if the second person wins.
					</p>
				</div>
				<hr />
				<div>
					<h6>Constraint:</h6>
					<p>
						1≤T≤10 <br /> 1≤N≤105 <br /> 1≤Ai≤109
					</p>
				</div>
				<hr />
				<div>
					<h6>Sample Input:</h6>
					<p>
						3 <br />2 <br /> 1 2 <br /> 3 <br /> 1 1 2 <br /> 3 <br /> 1 2 4
					</p>
				</div>
				<hr />
				<div>
					<h6>Sample Output:</h6>
					<p>
						2 <br />1 <br /> 2
					</p>
				</div>
				<hr />
				<div>
					<h6>Write Code here:</h6>
					<div className="editor-container">
						<AceEditor
							mode="java"
							theme="solarized_dark"
							onChange={onChange}
							name="editor"
							fontSize="18px"
							width="80%"
							height="600px"
							placeholder="write your code here"
							enableBasicAutocompletion="true"
							enableLiveAutocompletion="true"
							editorProps={{ $blockScrolling: true }}
							value={code}
							onChange={onChange}
							// setOptions={{
							// 	enableBasicAutocompletion: true,
							// 	enableLiveAutocompletion: true,
							// 	enableSnippets: true,
							// }}
						/>
						<button
							onClick={evaluateCode}
							className="btn btn-primary btn-submit"
						>
							Submit
						</button>
					</div>
				</div>
				<hr />
			</div> */}
		</>
	);
};

export default SingleQuestion;

<>
	<section className="single-room">
		{/* <div className="single-room-images">
						{defaultImages.map((item, index) => (
							<img key={index} src={item} alt={name} />
						))}
					</div> */}
		<div className="single-room-info">
			<article className="desc">
				<h3>details</h3>
				<p>asdlaksjdlkajsdkljaslkdjlaksjdlkjs</p>
			</article>
			<article className="info">
				<h3>info</h3>
				<h6>price : $1000</h6>
				<h6>size : 1500 SQFT</h6>
				<h6>max capacity : 5 people</h6>
				<h6>Pets allowed</h6>
				<h6>Fuck Off</h6>
			</article>
		</div>
	</section>
	<section className="room-extras">
		<h6>extras </h6>
		<ul className="extras">adsdasd</ul>
	</section>
</>;
