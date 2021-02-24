import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "./SingleQuestion.css";
const axios = require("axios");

// Hostname: https://nikhiljugale007.netlify.app/

// Client Id: a688500545ec811583316543b9f225b12c3799a51065.api.hackerearth.com

// Client Secret Key: 9c4e7cb63a92ec96a7263a7132b8233f0a82c02e

const SingleQuestion = () => {
	const [code, setCode] = React.useState("");

	function onChange(newValue) {
		setCode(newValue);
	}

	const url =
		"https://7f7cf77c.compilers.sphere-engine.com/api/v4/submissions?access_token=d646ebfeb70a973e3f42a085dd0cd1a9";

	function evaluateCode() {
		const data = {
			compilerId: 44,
			source: code,
		};

		axios.post(url, data).then(function (response) {
			console.log(response);
		});
	}
	return (
		<>
			{/* question name
        difficuly tags
        question discription
        input
        output
        example
        constraint
        code editor */}
			<div className="question-cotainer">
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
			</div>
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
