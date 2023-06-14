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
						Thomasmore campus Geel.
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

					<h1 class="masthead-heading text-uppercase   text-secondary ">
						App development
					</h1>

					<div class="divider-custom divider-ligh text-secondary t">
						<div class="divider-custom-line"></div>
						<div class="divider-custom-icon  text-secondary ">
							<i class="fas fa-star"></i>
						</div>
						<div class="divider-custom-line"></div>
					</div>

					
					<p class="  text-secondary " style={{fontSize:'30px'  }}>Welkom op mijn portfolio!</p>
					<p class="w-75  text-secondary ">
						Ik ben <b>Arslan Bulent</b>, een gepassioneerde programmeur met een
						sterke toewijding aan mijn vak.<br></br> Mijn portfolio is een
						verzameling van mijn beste creatieve projecten en professionele
						prestaties op het gebied van programmeren. Het is een weerspiegeling
						van mijn inzet, vaardigheden en creatieve visie. Ik geloof sterk in
						de kracht van code en hoe het de wereld om ons heen kan veranderen.
						Als je door mijn portfolio bladert, zul je een verscheidenheid aan
						projecten ontdekken die ik met veel plezier heb voltooid. Of het nu
						gaat om mijn werk aan de digitale meter, de Biostoom applicatie, elk
						werk vertelt een uniek verhaal. Deze projecten tonen niet alleen
						mijn technische vaardigheden, maar ook mijn vermogen om creatieve
						oplossingen te bedenken en uit te voeren. Daarnaast vind je op mijn
						portfolio ook meer informatie over mijn stageproject. Hier heb ik de
						mogelijkheid gehad om mijn programmeervaardigheden toe te passen en
						te groeien als professional. Ik ben trots op wat ik heb bereikt
						tijdens mijn stage en ik kijk ernaar uit om dit met je te delen.
						<br></br>
						<br></br>Bedankt voor het bezoeken van mijn portfolio. 
						<br></br>Ik hoop dat je geïnspireerd raakt en geniet van wat je
						ziet.<br></br> Veel plezier met het ontdekken van mijn werk!
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
								In mijn vrije tijd ga ik wandelen en fietsen, vooral als het
								weer meezit, het liefst in de natuurlijke omgeving van het bos.
								Dat geeft me enorm veel voldoening en plezier.
							</p>
						</div>
						<div class="col-lg-4 ms-auto mb-5">
							<p class="lead">
								<strong>
									<u>Interesses</u>
								</strong>
							</p>
							<p class="lead">
								Ik heb altijd een technische achtergrond gehad, en dat is ook
								duidelijk te zien in mijn cv. Programmeren en elektronica zijn
								voor mij een totaal andere wereld, en het is eigenlijk de enige
								plek waar ik echt voldoening vind. Het is een omgeving waarin ik
								mezelf volledig kan uiten en mijn passie kan volgen.
							</p>
						</div>
						<div class="col-lg-4 me-auto">
							<p class="lead">
								<strong>
									<u>Graduaat</u>
								</strong>
							</p>
							<p class="lead">
								Al jarenlang was ik op zoek naar een degelijke opleiding als
								programmeur, en uiteindelijk ben ik terechtgekomen bij Thomas
								More Campus Geel. Gedurende het schooljaar tussen 2019 en 2021
								heb ik daar de opleiding programmeren gevolgd.
							</p>
						</div>
						<div class="col-lg-4 me-auto">
							<p class="lead">
								<strong>
									<u>Bachelor</u>
								</strong>
							</p>
							<p class="lead">
								Gedurende het schooljaar tussen 2021 en 2023 volg ik momenteel
								een opleiding als applicatieontwikkelaar aan Thomas More Campus
								Geel.
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
						<div class="col-lg-7 ms-auto lead">
							<h4>
								<u>Camera sensoren</u>
							</h4>
							<br></br>
							<br></br>
							<strong>
								<u>Periode</u>
							</strong>
							<br></br>
							Tussen 1 februari en 1 juni 2023 liep ik gedurende 18 weken stage
							bij Delta Technics en het dochterbedrijf Delta Care. <br></br>
							<br></br>
							<strong>
								<u>Delta Technics</u>
							</strong>
							<br></br>
							Dit bedrijf is zeer ervaren, onder andere in de elektro- en
							telecomsector. Ze hebben zich gespecialiseerd in databekabeling
							volgens de nieuwste technologieën en standaarden. Ze bieden
							gestructureerde bekabeling op basis van glasvezeltechnologie en
							"Twisted Pair" koperbekabeling. Daarnaast leggen ze ook de focus
							op actieve apparaten en bieden ze oplossingen aan voor klanten. Ze
							hebben ook IOT-toepassingen aan hun assortiment toegevoegd.
							<br></br>
							<br></br>
							<strong>
								<u>Delta care</u>
							</strong>
							<br></br>
							Delta Care is een dochterbedrijf van Delta Technics en ze bieden
							oplossingen om het leven van senioren en zorgbehoevenden
							aangenamer te maken. Ze ondersteunen het netwerk van zorgverleners
							en mantelzorgers door slimme technologie te installeren.
							<br></br>
							<br></br>
							<strong>
								<u>Opdracht</u>
							</strong>
							<br></br>
							Delta Care is een bedrijf dat gebruikmaakt van Mobotix-camera's in
							de zorgsector om een beter toezicht te houden op zorgbehoevende
							mensen. Voor deze camera-systemen kreeg ik de opdracht van{' '}
							<b>Delta care verantwoordelijk</b> om een applicatie te ontwerpen
							die het zorgpersoneel in staat stelt om hun eigen grenslijnen te
							tekenen met een muisklik en deze te gebruiken als
							detectie-eilanden. Het doel van deze applicatie was om meldingen
							te genereren wanneer iemand het detectie-eiland in- of uitgaat,
							zodat toezichthouders onmiddellijk op de hoogte kunnen worden
							gebracht. Dit verbeterde de reactietijd en de efficiëntie van het
							zorgpersoneel, waardoor ze snel konden reageren op mogelijke
							situaties die aandacht vereisen.
							<br></br>
							<br></br>
							<strong>
								<u>Documentatie</u>
							</strong>
							<br></br>
							<div class="row">
								<div class="col-lg-4 col-12 mt-1">
									<a
										class="btn btn-xl btn-outline-light w-100"
										href={require('./assets/img/portfolio/pva.pdf')}
									>
										<i class="fas fa-download"></i>
										Plan van aanpak
									</a>
								</div>
								<div class="col-lg-4 col-12 mt-1">
									<a
										class="btn btn-xl btn-outline-light w-100"
										href={require('./assets/img/portfolio/realistatie.pdf')}
									>
										<i class="fas fa-download"></i>
										Realisatie verslag
									</a>
								</div>
								<div class="col-lg-4 col-12 mt-1">
									<a
										class="btn btn-xl btn-outline-light w-100"
										href={require('./assets/img/portfolio/reflectie.pdf')}
									>
										<i class="fas fa-download"></i>
										Reflectie verslag
									</a>
								</div>
							</div>
							<br></br>
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
						<div class="col-lg-3  mb-lg-0">
							<h4 class="text-uppercase">Locatie</h4>
							<p class="lead mb-0">Dunanstraat 13 | 3582 Beringen</p>
						</div>

						<div class="col-lg-3  mb-lg-0">
							<h4 class="text-uppercase">Mijn link</h4>
							<a
								class="btn btn-outline-light btn-social mx-1"
								href="https://www.linkedin.com/in/bulent-arslan-543b81174/"
							>
								<i class="fab fa-fw fa-linkedin-in"></i>
							</a>
						</div>

						<div class="col-lg-3">
							<h4 class="text-uppercase">Contact</h4>
							<p class="lead mb-0">0493/ 96.00.18</p>
						</div>
						<div class="col-lg-3">
							<h4 class="text-uppercase">E-mail</h4>
							<p class="lead mb-0">info@arsoft.app</p>
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
										<div className="text-start">
											<div>
												<strong>Inleiding tot project</strong>
												<p class="mb-4 mx-2">
													LV Project is een bedrijf dat renovatiewerkzaamheden
													uitvoert in Leuven. Ze transformeren een enkele woning
													in verschillende studentenkamers. Het probleem is
													echter dat een adres slechts één watermeter kan
													hebben. Het is moeilijk om het waterverbruik van
													individuele studenten te registreren. Ze hebben mij de
													opdracht gegeven om een applicatie te ontwikkelen
													waarmee het verbruik digitaal kan worden
													geregistreerd.
												</p>
											</div>
											<div>
												<strong>Realisatie</strong>
												<p class="mb-4 mx-2">
													In elke studentenkamer is een flowsensor (Hall-effect)
													geïnstalleerd. Bij elke omwenteling van de flowsensor
													wordt er een puls gegenereerd. Als we 1874 pulsen
													hebben, komt dit overeen met één liter waterverbruik.
													Voor elke kamer is er dus een flowsensor voorzien.
													Elke sensor is aangesloten op één Raspberry Pi, die
													alle signalen berekent. De informatie wordt vervolgens
													weergegeven op een touchpaneel, waar gebruikers hun
													eigen waterverbruik kunnen aflezen.
												</p>
											</div>
											<strong>Conclusie</strong>

											<div className=" mx-2">
												<p>Meer programmer ervaring.</p>
												<p>
													Een mooie uitdaging van de analoge naar digitale
													wereld.
												</p>
												<p>Technical Skills:</p>
												<ul>
													<li>Python</li>
													<li>Linux scripting</li>
												</ul>
											</div>
											<div className=" mx-2">
												<p>Soft Skills:</p>
												<ul>
													<li>Communicatie.</li>
													<li>Creatief zijn.</li>
													<li>Probleemoplossend denken.</li>
												</ul>
											</div>
										</div>
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
										<div className="text-start">
											<div>
												<strong>Inleiding tot project</strong>
												<p class="mb-4 mx-2">
													Firma Biostoom is een afvalverwerkingsbedrijf dat
													regelmatig werkzaamheden laat uitvoeren door zowel
													intern als extern personeel. Voor alle werkzaamheden
													is een werkvergunning vereist, die tot nu toe altijd
													handmatig werd ingevuld. Dit heeft geleid tot
													tijdsgebrek, gebrekkige opvolging, enzovoort.
												</p>
											</div>
											<div>
												<strong>Realisatie</strong>
												<p class="mb-4 mx-2">
													Ik heb de opdracht gekregen om een applicatie te
													ontwerpen voor het bedrijf Biostoom om
													werkvergunningen te digitaliseren. Op deze manier
													kunnen ze eenvoudig werkvergunningen opstellen voor
													zowel intern als extern personeel, met de mogelijkheid
													om later koppelingen te maken naar een TFMS (Traffic
													Flow Management System) systeem.
												</p>
											</div>
											<strong>Conclusie</strong>

											<div className=" mx-2">
												<p>Zeer fijn om te werken in een team.</p>
												<p>Meer programmer ervaring.</p>
												<p>Technical Skills:</p>
												<ul>
													<li>Java</li>
													<li>React</li>
												</ul>
											</div>
											<div className=" mx-2">
												<p>Soft Skills:</p>
												<ul>
													<li>Communicatie</li>
													<li>Emapathie</li>
													<li>Bewust zijn, geduld</li>
													<li>Probleemoplossend / kritische denken.</li>
												</ul>
											</div>
										</div>

										<br></br>
										<br></br>
										<strong>
											<u>Documentatie</u>
										</strong>

										<div className="mt-4">
											<a
												class="btn btn-outline-dark me-1"
												href={require('./assets/img/portfolio/mindmap.pdf')}
											>
												<i class="fas fa-download me-2"></i>
												Mindmap
											</a>
											<a
												class="btn btn-outline-dark me-1"
												href={require('./assets/img/portfolio/useCaseBiostoom.pdf')}
											>
												<i class="fas fa-download me-2"></i>
												Use-Case
											</a>
											<a
												class="btn btn-outline-dark me-1"
												href={require('./assets/img/portfolio/erdBiostoom.pdf')}
											>
												<i class="fas fa-download me-2"></i>
												ERD
											</a>
										</div>

										<br></br>
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
