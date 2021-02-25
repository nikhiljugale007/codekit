import React from "react";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionFilter from "../components/QuestionFilter";
const Practise = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const apiUrl = "https://codekit-backend.herokuapp.com/api/questions";
		fetch(apiUrl)
			.then((res) => res.json())
			.then((questions) => {
				setData(questions);
			});
	}, []);

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
								<td>{question.question_name}</td>
								<td>{question.difficulty}</td>
								<td>{question.submissions}</td>
								<td>
									<Link to={`/problems/${question._id}`}>
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
