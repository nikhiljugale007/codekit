import React from "react";
import Question from "../components/Question";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionFilter from "../components/QuestionFilter";
const Practise = () => {
	const [data, setData] = React.useState([
		{
			id: 1,
			name: " Shuffle String",
			difficulty: "Easy",
			submission: 10,
		},
		{
			id: 2,
			name: "1486. XOR Operation in an Array",
			difficulty: "Medium",
			submission: 10,
		},
		{
			id: 3,
			name: "Shuffle the Array",
			difficulty: "Easy",
			submission: 10,
		},
		{
			id: 4,
			name: "Chintu and Pintu Chintu and pintu",
			difficulty: "Hard",
			submission: 10,
		},
	]);

	return (
		<div>
			<div className="banner">
				<h1>Pick > Write > Submit</h1>
				<div></div>
				<p>
					HandPicked 130 Coding Interview Questions The practice you need to ace
					the coding interviews.Solve them and Check you knowledge.
				</p>
			</div>

			<QuestionFilter />

			<div style={{ width: "70%", margin: "10px auto" }}>
				<Table bordered hover shadow>
					<thead class="thead-dark">
						<tr>
							<th>#</th>
							<th>Question</th>
							<th>Difficulty</th>
							<th>Submissions</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{data.map((question, index) => (
							<tr scope="row">
								<td>{index + 1}</td>
								<td>{question.name}</td>
								<td>{question.difficulty}</td>
								<td>{question.submission}</td>
								<td>
									<Link to={`/problems/${question.name}`}>
										<button type="button" class="btn btn-success">
											Solve
										</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Practise;
