import './App.css';

function App() {
	return (
		<>
			<nav
				class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
				id="mainNav"
			>
				<div class="container">
					<a class="navbar-brand" href="#page-top">
						Thomasmore campus Geel
					</a>
					<button
						class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						Menu
						<i class="fas fa-bars"></i>
					</button>
					<div class="collapse navbar-collapse" id="navbarResponsive">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item mx-0 mx-lg-1">
								<a class="nav-link py-3 px-0 px-lg-3 rounded" href="#home">
									Home
								</a>
							</li>
							<li class="nav-item mx-0 mx-lg-1">
								<a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
									Over mij
								</a>
							</li>
							<li class="nav-item mx-0 mx-lg-1">
								<a
									class="nav-link py-3 px-0 px-lg-3 rounded"
									href="#realisation"
								>
									Realisatie
								</a>
							</li>
							<li class="nav-item mx-0 mx-lg-1">
								<a
									class="nav-link py-3 px-0 px-lg-3 rounded"
									href="#internship"
								>
									Stage
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<header class="masthead text-white text-center mb-4" id="home">
				<div class="container d-flex align-items-center flex-column">
					<img
						class="masthead-avatar mb-5"
						src={require('./assets/img/portfolio/app.png')}
						alt="..."
					/>

					<h1 class="masthead-heading text-uppercase mb-5  text-secondary ">
						App development
					</h1>

					<div class="divider-custom divider-ligh text-secondary t">
						<div class="divider-custom-line"></div>
						<div class="divider-custom-icon  text-secondary ">
							<i class="fas fa-star"></i>
						</div>
						<div class="divider-custom-line"></div>
					</div>

					<p class="masthead-subheading font-weight-light mb-5  text-secondary ">
						Web Designer - IOT
					</p>
				</div>
			</header>

			<section class="page-section bg-primary text-white mb-0" id="about">
				<div class="container mb-5">
					<h2 class="page-section-heading text-center text-uppercase text-white">
						Over mij
					</h2>

					<div class="divider-custom divider-light">
						<div class="divider-custom-line"></div>
						<div class="divider-custom-icon">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
						<div class="divider-custom-line"></div>
					</div>

					<div class="row">
						<div class="col-lg-4 ms-auto mb-5">
							<p class="lead">
								<strong>
									<u>Wie ben ik</u>
								</strong>
							</p>
							<p class="lead">
								Mijn naam is Arslan Bulent en ben 46 jaar oud en ben 28 jaar
								gelukkige getrouwd met mijn vrouw , daarbij hebben we ook 3
								schattige kinderen.
								<br></br>
								Als persoon ben ik altijd en leergierige geweest daarom ben ik
								ook 28 jaar aan het studeren.
							</p>
						</div>
						<div class="col-lg-4 ms-auto mb-5">
							<p class="lead">
								<strong>
									<u>Hobby</u>
								</strong>
							</p>
							<p class="lead">
								In mijn vrije tijden ga ik wandelen en fietsen als het weer mee
								valt liefste in de bos natuurlijk. Dat geeft mij enorm deugd...
							</p>
						</div>
						<div class="col-lg-4 ms-auto mb-5">
							<p class="lead">
								<strong>
									<u>Interesses</u>
								</strong>
							</p>
							<p class="lead">
								Ik heb altijd een technische achtergrond gehad dat kun je ook
								zien in mijn cv. Programmeren en elektronica is voormij totaal
								andere wereld eignlijk enige plaats waar ik voldoening heb. Deze
								is een plaats waar ik mij totaal kan laten gaan.
							</p>
						</div>
						<div class="col-lg-4 me-auto">
							<p class="lead">
								<strong>
									<u>Graduaat</u>
								</strong>
							</p>
							<p class="lead">
								Al jaren was ik opzoek naar een degelijke opleiding als
								programeur en ben bij Thomasmore Campus Geel terecht gekomen.
								Schooljaar tussen 2019 en 2021 heb opleiding programmeren
								gevolgd.
							</p>
						</div>
						<div class="col-lg-4 me-auto">
							<p class="lead">
								<strong>
									<u>Bachelor</u>
								</strong>
							</p>
							<p class="lead">
								Schooljaar tussen 2021 en 2023 ben ik opleiding aan het volgen
								als applicatie ontwikkelaar in Thomasmore Campus Geel.
							</p>
						</div>
						<div class="col-lg-4 me-auto"></div>
					</div>

					<div class="text-center mt-5 mb-5">
						<a
							class="btn btn-xl btn-outline-light"
							href={require('./assets/img/portfolio/cvBulent.pdf')}
						>
							<i class="fas fa-download me-2"></i>
							CV
						</a>
					</div>
				</div>
			</section>

			<section class="page-section portfolio" id="realisation">
				<div class="container">
					<h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
						Realisatie
					</h2>

					<div class="divider-custom">
						<div class="divider-custom-line"></div>
						<div class="divider-custom-icon">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
						<div class="divider-custom-line"></div>
					</div>

					<div class="row justify-content-center">
						<div class="col-md-6 col-lg-4 mb-5">
							<div
								class="portfolio-item mx-auto"
								data-bs-toggle="modal"
								data-bs-target="#portfolioModal1"
							>
								<img
									class="img-fluid"
									src={require('./assets/img/portfolio/student.png')}
									alt="..."
								/>
							</div>
						</div>

						<div class="col-md-6 col-lg-4 mb-5">
							<div
								class="portfolio-item mx-auto"
								data-bs-toggle="modal"
								data-bs-target="#portfolioModal2"
							>
								<img
									class="img-fluid mb-5"
									src={require('./assets/img/portfolio/bionerga.png')}
									alt="..."
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="page-section bg-primary text-white mb-0" id="internship">
				<div class="container-fluid">
					<h2 class="page-section-heading text-center text-uppercase text-white">
						Stage
					</h2>

					<div class="divider-custom divider-light">
						<div class="divider-custom-line"></div>
						<div class="divider-custom-icon">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
						<div class="divider-custom-line"></div>
					</div>

					<div class="row">
						<div class="col-lg-7 ms-auto">
							<p class="lead">
								<strong>
									<u>AI toepassingen op camerasensoren</u>
								</strong>
								<br></br>
								<br></br>
								<strong>
									<u>Periode</u>
								</strong>
								<br></br>
								Tussen 27 maart en 1 juni 2023 liep ik gedurende 16 weken stage
								bij Delta Technics en dochter bedrijf Delta Care. <br></br>
								<br></br>
								<strong>
									<u>Delta Technics</u>
								</strong>
								<br></br>
								Deze bedrijf is zeer ervaren onder meer Electro- en
								Telecomsector. Zij hebben zich gespecialiseerd in databekabeling
								op de nieuwste technologie en standaarden. Gestructureerde
								bekabeling in glasvezeltechnologie en “Twisted Pair” koper
								bekabeling. Daarbij hebben ze ook focus gelegd op actieve
								apparaten en ze bieden ook oplossingen voor de klanten. De
								opkomst van IOT toepassingen hebben deze ook in hun werk
								assortimenten toegevoegd.
								<br></br>
								<br></br>
								<strong>
									<u>Delta care</u>
								</strong>
								<br></br>
								Delta care is een dochter bedrijf van Delta Technics en ze
								bieden oplossingen om het leven van senioren en zorgbehoevenden
								aangenamer te maken. Het netwerk van zorgverleners en
								mantelzorgers kunnen ze ondersteunen door slimme technologie te
								installeren.
								<br></br>
								<br></br>
								<strong>
									<u>Opdracht</u>
								</strong>
								<br></br>
								Delta Care is een bedrijf die in zorgsector Mobotix camera's
								gebruiken om beter toezicht te hebben op de zorgbehoevenden
								mensen. Voor deze camera systemen mocht ik een applicatie
								ontwerpen zodanig dat de zorgsectorpersoneel hun eigen
								grenslijnen kunnen teken met een muis klik en deze gebruiken als
								detectie eilanden. Bedoeling daarvan was als er iemand in -of
								uittreed moet er een melding komen bij de toezichters.
								<br></br>
								<br></br>
								<strong>
									<u>Documentatie</u>
								</strong>
								<br></br>
								<a
									class="btn btn-xl btn-outline-light me-1"
									href={require('./assets/img/portfolio/pva.pdf')}
								>
									<i class="fas fa-download me-2"></i>
									Plan van aanpak
								</a>
								<a
									class="btn btn-xl btn-outline-light me-1"
									href={require('./assets/img/portfolio/realistatie.pdf')}
								>
									<i class="fas fa-download me-2"></i>
									Realisatie verslag
								</a>
								<a
									class="btn btn-xl btn-outline-light me-1"
									href={require('./assets/img/portfolio/ReflectieVerslag.pdf')}
								>
									<i class="fas fa-download me-2"></i>
									Reflectie verslag
								</a>
								<a
									class="btn btn-xl btn-outline-light me-1"
									href={require('./assets/img/portfolio/realistatieStage.pdf')}
								>
									<i class="fas fa-download me-2"></i>
									Realisatie stage
								</a>
								<br></br>
							</p>
						</div>
						<div class="col-lg-4 me-auto">
							<div>
								<img
									class="masthead-avatar w-75 m-3"
									src={require('./assets/img/portfolio/delta.webp')}
									alt="..."
								/>
							</div>
							<div>
								<img
									class="masthead-avatar w-75 m-3"
									src={require('./assets/img/portfolio/care.png')}
									alt="..."
								/>
							</div>
							<div>
								<img
									class="masthead-avatar w-25 m-3"
									src={require('./assets/img/portfolio/mobo.webp')}
									alt="..."
								/>
							</div>
							<div>
								<img
									class="masthead-avatar w-75 m-3"
									src={require('./assets/img/portfolio/camera.png')}
									alt="..."
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer class="footer text-center">
				<div class="container">
					<div class="row">
						<div class="col-lg-4  mb-lg-0">
							<h4 class="text-uppercase">Locatie</h4>
							<p class="lead mb-0">Dunanstraat 13 | 3582 Beringen</p>
						</div>

						<div class="col-lg-4  mb-lg-0">
							<h4 class="text-uppercase">Mijn link</h4>
							<a
								class="btn btn-outline-light btn-social mx-1"
								href="https://www.linkedin.com/in/bulent-arslan-543b81174/"
							>
								<i class="fab fa-fw fa-linkedin-in"></i>
							</a>
						</div>

						<div class="col-lg-4">
							<h4 class="text-uppercase">Over Freelancer</h4>
							<p class="lead mb-0">Werkt freelancer op project basis</p>
						</div>
					</div>
				</div>
			</footer>

			<div class="copyright py-3 text-center text-white">
				<div class="container">
					<small>Arslan Bulent &copy; 2023</small>
				</div>
			</div>

			<div
				class="portfolio-modal modal fade"
				id="portfolioModal1"
				tabindex="-1"
				aria-labelledby="portfolioModal1"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header border-0">
							<button
								class="btn-close"
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body text-center pb-5">
							<div class="container-fluid">
								<div class="row justify-content-center">
									<div class="col-lg-12">
										<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
											Watermeter A/D registratie
										</h2>
										<img
											class=" mt-5"
											src={require('./assets/img/portfolio/StudentProject.png')}
											alt="..."
											style={{ width: '50%' }}
										/>
										<div class="divider-custom">
											<div class="divider-custom-line"></div>
											<div class="divider-custom-icon">
												<i class="fas fa-star"></i>
											</div>
											<div class="divider-custom-line"></div>
										</div>

										<p class="mb-4">
											LV project heeft mij de opdracht gegeven om van trationele
											watermeter een digitale waterverbruik registartie te maken
											voor 7 studente kamers gelegen in Leuven.<br></br>
											Korte beschrijving : Door zelf gemaakte printplaat werd
											door elk kamera via een hallsensor pulsen gestuurd naar de
											Raspberry Pi. Raspberry slaat de waterverbuik op in lokale
											database en deze werd gemonitord zodat iederen visueel kon
											opvolgen. Voor deze visualisatie is mijn code in Python
											geschreven
										</p>
										<button class="btn btn-primary" data-bs-dismiss="modal">
											<i class="fas fa-xmark fa-fw"></i>
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="portfolio-modal modal fade"
				id="portfolioModal2"
				tabindex="-1"
				aria-labelledby="portfolioModal2"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header border-0">
							<button
								class="btn-close"
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body text-center pb-5">
							<div class="container">
								<div class="row justify-content-center">
									<div class="col-lg-8">
										<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
											Bionerga
										</h2>

										<div class="divider-custom">
											<div class="divider-custom-line"></div>
											<div class="divider-custom-icon">
												<i class="fas fa-star"></i>
											</div>
											<div class="divider-custom-line"></div>
										</div>

										<div class="row justify-content-center">
											<div class="col-md-12 col-lg-12 mb-5">
												<div
													class="portfolio-item mx-auto"
													data-bs-toggle="modal"
													data-bs-target="#portfolioModal1"
												>
													<img
														class="img-fluid"
														src={require('./assets/img/portfolio/login.png')}
														alt="..."
													/>
												</div>
											</div>

											<div class="col-md-12 col-lg-12 mb-5">
												<div
													class="portfolio-item mx-auto"
													data-bs-toggle="modal"
													data-bs-target="#portfolioModal2"
												>
													<img
														class="img-fluid"
														src={require('./assets/img/portfolio/permitList.png')}
														alt="..."
													/>
												</div>
											</div>

											<div class="col-md-12 col-lg-12 mb-5">
												<div
													class="portfolio-item mx-auto"
													data-bs-toggle="modal"
													data-bs-target="#portfolioModal3"
												>
													<img
														class="img-fluid"
														src={require('./assets/img/portfolio/extern.png')}
														alt="..."
													/>
												</div>
											</div>
										</div>

										<p class="mb-4">
											Ik heb een applicatie mogen ontwerpen voor firma Bionerga
											en deze gingen ze gebruiken om werkvergunning aan te maken
											en volledige opvolging.
										</p>
										<button class="btn btn-primary" data-bs-dismiss="modal">
											<i class="fas fa-xmark fa-fw"></i>
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="portfolio-modal modal fade"
				id="portfolioModal3"
				tabindex="-1"
				aria-labelledby="portfolioModal3"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header border-0">
							<button
								class="btn-close"
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body text-center pb-5">
							<div class="container">
								<div class="row justify-content-center">
									<div class="col-lg-8">
										<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
											Circus Tent
										</h2>

										<div class="divider-custom">
											<div class="divider-custom-line"></div>
											<div class="divider-custom-icon">
												<i class="fas fa-star"></i>
											</div>
											<div class="divider-custom-line"></div>
										</div>

										<img
											class="img-fluid rounded mb-5"
											src="assets/img/portfolio/circus.png"
											alt="..."
										/>

										<p class="mb-4">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Mollitia neque assumenda ipsam nihil, molestias magnam,
											recusandae quos quis inventore quisquam velit asperiores,
											vitae? Reprehenderit soluta, eos quod consequuntur itaque.
											Nam.
										</p>
										<button class="btn btn-primary" data-bs-dismiss="modal">
											<i class="fas fa-xmark fa-fw"></i>
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="portfolio-modal modal fade"
				id="portfolioModal4"
				tabindex="-1"
				aria-labelledby="portfolioModal4"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header border-0">
							<button
								class="btn-close"
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body text-center pb-5">
							<div class="container">
								<div class="row justify-content-center">
									<div class="col-lg-8">
										<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
											Controller
										</h2>

										<div class="divider-custom">
											<div class="divider-custom-line"></div>
											<div class="divider-custom-icon">
												<i class="fas fa-star"></i>
											</div>
											<div class="divider-custom-line"></div>
										</div>

										<img
											class="img-fluid rounded mb-5"
											src="assets/img/portfolio/game.png"
											alt="..."
										/>

										<p class="mb-4">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Mollitia neque assumenda ipsam nihil, molestias magnam,
											recusandae quos quis inventore quisquam velit asperiores,
											vitae? Reprehenderit soluta, eos quod consequuntur itaque.
											Nam.
										</p>
										<button class="btn btn-primary" data-bs-dismiss="modal">
											<i class="fas fa-xmark fa-fw"></i>
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="portfolio-modal modal fade"
				id="portfolioModal5"
				tabindex="-1"
				aria-labelledby="portfolioModal5"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header border-0">
							<button
								class="btn-close"
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body text-center pb-5">
							<div class="container">
								<div class="row justify-content-center">
									<div class="col-lg-8">
										<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
											Locked Safe
										</h2>

										<div class="divider-custom">
											<div class="divider-custom-line"></div>
											<div class="divider-custom-icon">
												<i class="fas fa-star"></i>
											</div>
											<div class="divider-custom-line"></div>
										</div>

										<img
											class="img-fluid rounded mb-5"
											src="assets/img/portfolio/safe.png"
											alt="..."
										/>

										<p class="mb-4">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Mollitia neque assumenda ipsam nihil, molestias magnam,
											recusandae quos quis inventore quisquam velit asperiores,
											vitae? Reprehenderit soluta, eos quod consequuntur itaque.
											Nam.
										</p>
										<button class="btn btn-primary" data-bs-dismiss="modal">
											<i class="fas fa-xmark fa-fw"></i>
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="portfolio-modal modal fade"
				id="portfolioModal6"
				tabindex="-1"
				aria-labelledby="portfolioModal6"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header border-0">
							<button
								class="btn-close"
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body text-center pb-5">
							<div class="container">
								<div class="row justify-content-center">
									<div class="col-lg-8">
										<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
											Submarine
										</h2>

										<div class="divider-custom">
											<div class="divider-custom-line"></div>
											<div class="divider-custom-icon">
												<i class="fas fa-star"></i>
											</div>
											<div class="divider-custom-line"></div>
										</div>

										<img
											class="img-fluid rounded mb-5"
											src="assets/img/portfolio/submarine.png"
											alt="..."
										/>

										<p class="mb-4">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Mollitia neque assumenda ipsam nihil, molestias magnam,
											recusandae quos quis inventore quisquam velit asperiores,
											vitae? Reprehenderit soluta, eos quod consequuntur itaque.
											Nam.
										</p>
										<button class="btn btn-primary" data-bs-dismiss="modal">
											<i class="fas fa-xmark fa-fw"></i>
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
