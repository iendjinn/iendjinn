const data = [
	{
		name: "tempest",
		systemName: "Tempest",
		firmware: "Arvus Industries Kernel v98.7.95",
		pages: [
			{
				name: "home",
				title: "/",
				content: "",
				admin: false,
				children: [
					{
						name: "status",
						title: "System Status",
						admin: false,
						content: `
							<strong>Transponder:</strong> MX67G-Tempest<br>
							<strong>Manufacturer:</strong> Arvus Industries<br>
							<strong>Model:</strong> Pathfinder<br>
							<strong>Tonnage:</strong> 8<br>
							<strong>Fuel:</strong> 4/8<br>
							<strong>Life Support:</strong> Nominal<br>
							<strong>Reactor:</strong> Nominal<br>
							<strong>Engines:</strong> Nominal<br>
							<strong>Escape Pods:</strong> 19/19<br>
						`,
						children: [
							{
								name: "self-destruct",
								title: "Self Destruct",
								admin: true,
								content: `
									<p>Initiating self destruct sequence...<p>
									<p>All hands abandon ship, reactor runaway event in T-minus 5 minutes...</p>
								`,
								children: [],
							},
						],
					},
					{
						name: "inbox",
						title: "Inbox",
						admin: false,
						content: `
                            <strong>New Messages</strong><br>
                            
                        `,
						renderChildren: (children) => {
							return `
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Sender</th>
                                            <th>Received</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    ${children
																			.map(
																				(child) => `

                                        <tr data-page-id="${child.name}" class="option">
                                            <td>${child.title}</td>
                                            <td>${child.from}</td>
                                            <td>${child.date}</td>
                                        </tr>
                                        `,
																			)
																			.join("")}
                                    
                                    </tbody>
                                </table>
                            `;
						},
						children: [
							{
								name: "y14-rv",
								title: "Ypsilon-14 Courier Package Rendezvous",
								admin: false,
								from: "b.chev@ishiyama.dynamics",
								date: "3001-08-23",
								content: `
                                    <strong>From</strong> b.chev@ishiyama.dynamics<br>
                                    <strong>Received</strong> 3001-08-23<br>
                                    <p>Tempest Courier Team,</p>
                                    <p>An associate will pick be waiting for you to dock at Prospero's Dream, they will request boarding of the vessel and retrieve the package. The operatives name is Unit 43A.</p>
                                    <p>Regards,</p>
                                    <p>B.Chev</p>
                                `,
								children: [],
							},
							{
								name: "bulletin",
								title: "Kappa Ceti Courier Bulletin",
								admin: false,
								from: "courier@canyon.heavy",
								date: "3001-08-15",
								content: `
                                    <strong>From</strong> courier@canyon.heavy<br>
                                    <strong>Received</strong> 3001-08-15<br>
                                    <p>Courier Job Bulletin Update</p>
									<ul>
										<li>Quick creds for drop off on Mani 200kcr + commission (hiram.vogel@me)</li>
										<li>Help wanted! Small group trip to Kharth, one way. 180kcr (carmen.heim@me)</li>
										<li>Confidential Contract, details upon enquiry 500kcr. (ay21561@anon)</li>
										<li>Sharpe Co Material Transport to Azure Base 250kcr. (logistics@sharpeco)</li>
										<li>Confidential Contract, details upon enquiry 200-700kcr. (lojd83@anon)</li>
									</ul>
                                `,
								children: [],
							},
							{
								name: "sem-drinks",
								title: "Drinks?",
								admin: false,
								from: "sem@me",
								date: "3001-06-05",
								content: `
                                    <strong>From</strong> sem@me<br>
                                    <strong>Received</strong> 3001-06-05<br>
                                    <p>Yo Opha and Finn, been a while...</p>
									<p>Next time your on the Dream swing by and let's catch up. I've got some good stories to tell you. You're not going to believe what those dumb motherfuckers at Stratmeyer have pulled.<p>
									<p>Anyway, peace</p>
									<p>Sem</p>
                                `,
								children: [],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "azure",
		systemName: "Azure Base",
		firmware: "Anodyne Kernel v1.4.0",
		pages: [
			{
				name: "home",
				title: "/",
				content: "<p><strong>Your friends at Sharpe Co Azure Division would like to notify you of a meteorological event.</strong></p><p>PLEASE STAY CALM AND AVOID WINDOWS WHILE PERFORMING YOUR CORPORATE ASSIGNED DUTIES AROUND THE AZURE BASE FACILITIES!</p>",
				admin: false,
				children: [
					{
						name: "maintenance",
						title: "Maintenance Duties",
						admin: false,
						content: `
							<ol>
							<li>Unclog the toilets in habitation restroom B</li>
							<li>Perform routine maintenance on solar arrays 3 and 4</li>
							<li>Replace rear axel on rover in maintenance bay</li>
							<li><strong>Go outside and LOOK UP.</strong></li>
							<li>Make the bes in habitation barracks. Messy, messy!</li>
							</ol>
						
						`,
						children: []
					},
					{
						name: "logs",
						title: "Duty Log",
						admin: false,
						content: `
							<p>Maintenance Management Log</p>
						`,
						renderChildren: (children) => {
							return `
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    ${children
																			.map(
																				(child) => `

                                        <tr data-page-id="${child.name}" class="option">
                                            <td>${child.author}</td>
                                            <td>${child.date}</td>
                                        </tr>
                                        `,
																			)
																			.join("")}
                                    
                                    </tbody>
                                </table>
                            `;
						},
						children: [
							{
								name: "l4",
								author: "Hali Jack",
								title: "SKY!",
								date: "Yesterday 03:56 Local",
								children: [],
								admin: false,
								content: "LOOK uPdasf AT the SKY! So bluuuuuuee. Give me the blue I want the blue."
							},
							{
								name: "l3",
								author: "Hali Jack",
								title: "Daily Log",
								date: "Two days ago 01:24 Local",
								children: [],
								admin: false,
								content: "Maybe they were right, nevermind I should go fix the rover. Whole base is falling apart."
							},
							{
								name: "l2",
								author: "Hali Jack",
								title: "Daily Log",
								date: "Seven days ago 05:01 Local",
								children: [],
								admin: false,
								content: "Egg heads are all excited about observing this meteorological thing. Whatever, so long as they don't ask me to fix the solar arrays before their monthly check..."
							},
							{
								name: "l1",
								author: "Hali Jack",
								title: "Daily Log",
								date: "10 days ago 04:03 Local",
								children: [],
								admin: false,
								content: "Got a real dressing down today, turns out I'm supposed to swipe in on this machine and write something. Gary says they never read it though, guess we'll find out. Anyway, dear diary, today I cleaned a loo."
							}
						]
					},
					{
						name: "exterior-map",
						title: "Base Exterior Map",
						admin: false,
						content: `
						<div class="map">
-----------------------------<br>
-   [*]1                    -<br>
-                   @ @2    -<br>
-      !            @-@     -<br>
-      ===3                 -<br>      
-      | |                  -<br>
-                           -<br>
-                           -<br>
-----------------------------<br>
				</div>
					<ol>
					<li>Solar Array</li>
					<li>Dome</li>
					<li>Mechanics Bay</li>
					</ol>

				`,
						children: [],
					},
					{
						name: "interior-map",
						title: "Base Interior Map",
						admin: false,
						content: `
							<div class="map">
-----------------------------<br>
-   =====         =====     -<br>
-   | 4 |====|    | 1 <     -<br>
-   =====    |    =====     -<br>
-     |=====[ ]    |        -<br>      
-   =====    |   =====      -<br>
-   > 3 |========| 2 |      -<br>
-   =====        =====      -<br>
-----------------------------<br>
							</div>

							<ol>
							<li>Security [Exterior Airlock]</li>
							<li>Greenhouse, Medbay & Solarium</li>
							<li>Habitation [Exterior Airlock]</li>
							<li>Observatory and Geology Lab</li>
							</ol>
						
						`,
						children: [],
					},
				],
			},
		],
	},
];

class Terminal {
	constructor(config) {
		this.terminalContainer = document.querySelector("#terminal-content");
		this.terminalTitle = document.querySelector("#page-title");
		this.systemName = config.systemName;
		this.firmware = config.firmware;
		this.pages = config.pages;
		this.pageMap = new Map();
		for (const page of this.pages) {
			this.mapPage(page);
		}
		this.pagePath = [];
		this.isAdmin = false;
	}

	mapPage(page) {
		this.pageMap.set(page.name, page);
		for (const child of page.children) {
			this.mapPage(child);
		}
	}

	toggleAdmin() {
		this.isAdmin = !this.isAdmin;
		this.terminalContainer.classList.toggle("is-admin");
		this.terminalTitle.classList.toggle("is-admin");
		this.render(this.currentPage.name);
	}

	renderPageTitle() {
		this.terminalTitle.innerHTML = `<p>> ${this.systemName} - ${this.firmware} - ${this.isAdmin ? "root@" : ""}<span id="page-path">${this.pagePath.map((name) => `<span data-page-id="${name}" class="option ${name === this.currentPage.name ? "disabled" : ""}">${name}</span>`).join("/")}</span></p>`;
		const options = this.terminalTitle.querySelectorAll(".option");

		for (const el of options) {
			el.addEventListener("click", this.handleOption.bind(this));
			el.addEventListener("keydown", this.handleOption.bind(this));
			if (!el.classList.contains("disabled")) {
				el.setAttribute("tabindex", 0);
			}
		}
	}

	render(page = "home") {
		if (this.pagePath.includes(page)) {
			this.pagePath = this.pagePath.slice(0, this.pagePath.indexOf(page) + 1);
		} else {
			this.pagePath.push(page);
		}
		if (this.currentPage) {
			this.renderPageTitle();
		}
		this.terminalContainer.classList.toggle("loading");
		setTimeout(() => {
			this.currentPage = this.pageMap.get(page);

			const childContent = this.currentPage.renderChildren
				? this.currentPage.renderChildren(this.currentPage.children)
				: `
                 <ul>${this.currentPage.children.map(({ title, name, admin }) => `<li data-page-id="${name}" class="option ${!this.isAdmin && admin ? "admin disabled" : ""}">${title}</li>`).join("")}</ul>
                    `;
			this.renderPageTitle();
			this.terminalContainer.innerHTML = `
                    ${this.currentPage.content}
                    ${childContent}
                `;

			const options = this.terminalContainer.querySelectorAll(".option");

			for (const el of options) {
				el.addEventListener("click", this.handleOption.bind(this));
				el.addEventListener("keydown", this.handleOption.bind(this));
				if (!el.classList.contains("disabled")) {
					el.setAttribute("tabindex", 0);
				}
			}
			this.terminalContainer.classList.toggle("loading");
		}, 200);
	}

	handleOption(event) {
		const target = event.target.closest(".option");
		if (
			!target.classList.contains("disabled") &&
			((event.type === "keydown" && event.key === "Enter") ||
				event.type === "click")
		) {
			this.render(target.dataset.pageId);
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const urlParams = new URLSearchParams(window.location.search);
	const systemName = urlParams.get("system");
	const terminalData = data.find((d) => d.name === systemName) ?? data[0];
	const terminal = new Terminal(terminalData);
	terminal.render();
	document.addEventListener("keydown", (event) => {
		if (event.key === "p") {
			terminal.toggleAdmin();
		}
	});
});
