import Header from './../components/header/Header'

const Home = () => {
	return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">SoftWare</h2>
							<p>
								C, С++, Python,
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">PCB Design</h2>
							<p>Altium, OrCad, mentor graphics</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Mechanical</h2>
							<p>SolidWorks</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;