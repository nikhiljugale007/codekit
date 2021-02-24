import React from "react";
import {
	FaListOl,
	FaLaptopCode,
	FaStackOverflow,
	FaBookReader,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
	const [data, setData] = React.useState([
		{
			name: "Quality Question",
			description:
				"If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 130 questions spanning 15 categories and 4 difficulty levels, we've got you covered.",
			icon: <FaListOl />,
		},
		{
			name: "Integrated IDE",
			description:
				"If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 130 questions spanning 15 categories and 4 difficulty levels, we've got you covered.",
			icon: <FaLaptopCode />,
		},
		{
			name: "Quality Editorials",
			description:
				"If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 130 questions spanning 15 categories and 4 difficulty levels, we've got you covered.",
			icon: <FaStackOverflow />,
		},
		{
			name: "Study Material",
			description:
				"If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 130 questions spanning 15 categories and 4 difficulty levels, we've got you covered.",
			icon: <FaBookReader />,
		},
	]);
	return (
		<>
			<section className="services">
				<div className="section-title">
					<h4>Features</h4>
					<div />
				</div>
				<div className="services-center">
					{data.map((item) => {
						return (
							<article key={`item-${item.name}`} className="service">
								<span>{item.icon}</span>
								<h6>{item.name}</h6>
								<p>
									{item.description}
									<Link to="/rooms">Learn More</Link>
								</p>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Services;
