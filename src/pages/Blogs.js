import React from "react";
import BlogTopic from "../components/BlogTopic";

import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Blogs = () => {
	const BlogTopics = [
		{
			name: "Stack",
			description:
				"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",
			link: "https://www.geeksforgeeks.org/stack-data-structure/",
		},
		{
			name: "Queue",
			description:
				"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",
			link: "https://www.geeksforgeeks.org/queue-data-structure/",
		},
		{
			name: "Stack",
			description:
				"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",
			link: "https://www.geeksforgeeks.org/stack-data-structure/",
		},
		{
			name: "Queue",
			description:
				"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",
			link: "https://www.geeksforgeeks.org/queue-data-structure/",
		},
		{
			name: "Stack",
			description:
				"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",
			link: "https://www.geeksforgeeks.org/stack-data-structure/",
		},
		{
			name: "Queue",
			description:
				"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",
			link: "https://www.geeksforgeeks.org/queue-data-structure/",
		},
		{
			name: "Queue",
			description:
				"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",
			link: "https://www.geeksforgeeks.org/queue-data-structure/",
		},
		{
			name: "Stack",
			description:
				"Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).",
			link: "https://www.geeksforgeeks.org/stack-data-structure/",
		},
		{
			name: "Queue",
			description:
				"A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). ",
			link: "https://www.geeksforgeeks.org/queue-data-structure/",
		},
	];
	return (
		<>
			<div className="banner">
				<h1>Learning is the first step</h1>
				<div></div>
				<p>
					HandPicked 130 Coding Interview Questions The practice you need to ace
					the coding interviews.Solve them and Check you knowledge.
				</p>
			</div>
			<Container fluid style={{ padding: "10px", margin: "10px" }}>
				<Row>
					{/* <Col> */}
					{BlogTopics.map((topic, index) => (
						<Card style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title>{topic.name}</Card.Title>
								<Card.Text>{topic.description}</Card.Text>
								<a href={topic.link} target="_blank">
									<Button variant="primary">Go somewhere</Button>
								</a>
							</Card.Body>
						</Card>
					))}
					{/* </Col> */}
				</Row>
			</Container>
		</>
	);
};

export default Blogs;
