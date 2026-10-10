
    /* =====================================================
       EXACT THEME SYSTEM FROM MAIN WEBSITE

       Light → Dark → System
       ===================================================== */

    const themeToggle =
      document.querySelector(
        ".theme-toggle"
      );


    const body =
      document.body;


    const themeLabel =
      document.querySelector(
        ".theme-label"
      );


    const sunIcon =
      themeToggle.querySelector(
        ".fa-sun"
      );


    const moonIcon =
      themeToggle.querySelector(
        ".fa-moon"
      );


    const themes = [
      "light",
      "dark",
      "system"
    ];


    let currentThemeIndex = 0;


    const systemDarkQuery =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      );


    systemDarkQuery.addEventListener(
      "change",
      () => {

        const saved =
          localStorage.getItem(
            "theme"
          ) || "system";


        if (
          saved === "system"
        ) {

          applyTheme(
            "system"
          );

        }

      }
    );


    const savedTheme =
      localStorage.getItem(
        "theme"
      ) || "system";


    currentThemeIndex =
      themes.indexOf(
        savedTheme
      );


    if (
      currentThemeIndex === -1
    ) {

      currentThemeIndex = 2;

    }


    applyTheme(
      themes[currentThemeIndex]
    );


    themeToggle.addEventListener(
      "click",
      () => {

        currentThemeIndex =
          (
            currentThemeIndex + 1
          ) %
          themes.length;


        applyTheme(
          themes[currentThemeIndex]
        );

      }
    );


    function applyTheme(
      theme
    ) {


      localStorage.setItem(
        "theme",
        theme
      );


      if (
        theme === "light"
      ) {

        body.classList.remove(
          "dark-theme"
        );

        body.setAttribute(
          "data-theme",
          "light"
        );

      }


      else if (
        theme === "dark"
      ) {

        body.classList.add(
          "dark-theme"
        );

        body.setAttribute(
          "data-theme",
          "dark"
        );

      }


      else {


        body.removeAttribute(
          "data-theme"
        );


        const prefersDark =
          systemDarkQuery.matches;


        if (
          prefersDark
        ) {

          body.classList.add(
            "dark-theme"
          );

        }

        else {

          body.classList.remove(
            "dark-theme"
          );

        }

      }


      /*
       * IMPORTANT:
       * "System", not "Auto"
       */

      themeLabel.textContent =
        theme.charAt(0).toUpperCase()
        +
        theme.slice(1);


      if (
        theme === "light"
      ) {

        sunIcon.style.opacity =
          "1";

        moonIcon.style.opacity =
          "0.3";

      }


      else if (
        theme === "dark"
      ) {

        sunIcon.style.opacity =
          "0.3";

        moonIcon.style.opacity =
          "1";

      }


      else {

        sunIcon.style.opacity =
          "0.5";

        moonIcon.style.opacity =
          "0.5";

      }

    }



    /* =====================================================
       SAME THEME BUTTON SCROLL BEHAVIOR
       FROM MAIN WEBSITE
       ===================================================== */

    window.addEventListener(
      "scroll",
      () => {

        const currentY =
          window.scrollY;


        if (
          currentY > 80
        ) {

          themeToggle.classList.add(
            "hidden"
          );

        }

        else {

          themeToggle.classList.remove(
            "hidden"
          );

        }

      }
    );



    /* =====================================================
       SAME TYPING EFFECT STYLE
       FROM MAIN WEBSITE
       ===================================================== */

    const roles = [

      "Network Engineer",

      "Campus & DC Fabric Specialist",

      "Huawei iMaster NCE Engineer",

      "SDN & Automation Enthusiast"

    ];


    const typingText =
      document.getElementById(
        "typing-text"
      );


    let roleIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function type() {


      const current =
        roles[roleIndex];


      if (
        !deleting
      ) {


        typingText.textContent =
          current.slice(
            0,
            ++charIndex
          );


        if (
          charIndex ===
          current.length
        ) {


          deleting =
            true;


          setTimeout(
            type,
            1500
          );


          return;

        }

      }


      else {


        typingText.textContent =
          current.slice(
            0,
            --charIndex
          );


        if (
          charIndex === 0
        ) {


          deleting =
            false;


          roleIndex =
            (
              roleIndex + 1
            ) %
            roles.length;

        }

      }


      setTimeout(
        type,
        deleting
          ? 60
          : 100
      );

    }


    document.addEventListener(
      "DOMContentLoaded",
      type
    );



    /* =====================================================
       ARTICLES DATABASE
       ===================================================== */

    const articles = {

		"hcna-routing-switching": {

		  title:
			"HCNA Routing & Switching — My First Huawei Certification",

		  category:
			"Certifications",

		  date:
			"December 2018",

		  tags: [
			"Huawei",
			"HCNA",
			"RoutingAndSwitching",
			"Networking",
			"Certification",
			"CareerMilestone"
		  ],

		  excerpt:
			"Happy to earn my first Huawei certification, HCNA Routing & Switching, after building a strong networking foundation with Cisco CCENT.",

		  content: `

			<p>
			  I am very happy to share another important milestone
			  in my networking journey: I successfully earn my
			  <strong>first Huawei certification</strong>,
			  <strong>HCNA Routing & Switching</strong>.
			</p>


			<p>
			  After obtaining my <strong>Cisco CCENT</strong> and
			  building a strong foundation in networking fundamentals,
			  I decide to expand my knowledge and explore another
			  major networking ecosystem with Huawei.
			</p>


			<p>
			  The <strong>HCNA Routing & Switching</strong>
			  certification gives me the opportunity to strengthen
			  my understanding of routing and switching technologies
			  while discovering Huawei's approach to enterprise
			  networking.
			</p>


			<p>
			  This achievement is especially meaningful to me because
			  it represents my <strong>first Huawei certification</strong>
			  and the beginning of my journey with Huawei technologies.
			  It also gives me the motivation to continue developing
			  my networking skills and pursue more advanced
			  certifications.
			</p>


			<p>
			  With a foundation built through Cisco and now extended
			  to Huawei, I am excited to continue learning,
			  gaining practical experience and taking on new
			  challenges in the networking field.
			</p>


			<p>
			  <strong>
				A new certification, a new technology ecosystem,
				and another step forward in my networking journey.
			  </strong>
			</p>


			<div class="article-images">

			  <img
				src="images/hcna-routing-switching.png"
				alt="Huawei HCNA Routing and Switching certificate"
			  >

			</div>


			<br>


			<p class="article-hashtags">

			  #Huawei
			  #HCNA
			  #RoutingAndSwitching
			  #Networking
			  #Certification
			  #CareerMilestone
			  #HuaweiCertification
			  #NetworkEngineer

			</p>

		  `
		},
		
		"ccent-first-certification": {

		  title:
			"CCENT — The Beginning of My Certification Journey",

		  category:
			"Certifications",

		  date:
			"May 2018",

		  tags: [
			"Cisco",
			"CCENT",
			"ICND1",
			"Networking",
			"Certification",
			"CareerMilestone"
		  ],

		  excerpt:
			"Happy to have passed the ICND1 exam and earned my first Cisco certification — the beginning of my professional networking journey.",

		  content: `

			<p>
			  I am very happy to share an important milestone in my
			  professional journey: I successfully pass the
			  <strong>ICND1 exam</strong> and earn my first Cisco
			  certification, the
			  <strong>Cisco Certified Entry Networking Technician
			  (CCENT)</strong>.
			</p>


			<p>
			  This certification represents my
			  <strong>first professional certification</strong> and
			  marks the beginning of my journey in networking and
			  professional certifications.
			</p>


			<p>
			  Preparing for the ICND1 exam allows me to strengthen my
			  understanding of fundamental networking concepts and
			  build a solid technical foundation for the next steps
			  in my career.
			</p>


			<p>
			  I am especially proud of this achievement because it
			  gives me the motivation to continue learning,
			  developing my technical skills and pursuing new
			  challenges in the networking field.
			</p>


			<p>
			  This is only the beginning, and I am looking forward to
			  continuing this journey with new certifications,
			  deeper technical knowledge and new professional
			  opportunities.
			</p>


			<p>
			  <strong>Every journey has a first step — and this is mine.</strong>
			</p>


			<div class="article-images">

			  <img
				src="images/ccent-first-certification.png"
				alt="Cisco Certified Entry Networking Technician CCENT certificate"
			  >

			</div>


			<br>


			<p class="article-hashtags">

			  #Cisco
			  #CCENT
			  #ICND1
			  #Networking
			  #Certification
			  #CareerMilestone
			  #ContinuousLearning
			  #NetworkEngineer

			</p>

		  `
		},
		
		"huawei-trainer-prologic": {

		  title:
			"Huawei Trainer — Cloud Campus Training for BARAKA Bank",

		  category:
			"Training",

		  date:
			"October 2023",

		  tags: [
			"Huawei",
			"HuaweiTrainer",
			"CloudCampus",
			"iMasterNCE",
			"SDN",
			"DataCenter",
			"Training",
			"BARAKABank"
		  ],

		  excerpt:
			"Delivered Huawei Cloud Campus training for BARAKA Bank engineers, focusing on Huawei SDN, iMaster NCE Campus and Data Center technologies.",

		  content: `

			<p>
			  In October 2023, I had the opportunity to work as a
			  <strong>Huawei Trainer</strong> with
			  <strong>Prologic Tunisie</strong>, delivering technical
			  training focused on Huawei Cloud Campus solutions.
			</p>


			<p>
			  The training was designed for
			  <strong>BARAKA Bank engineers</strong>, with a focus on
			  Huawei's <strong>SDN-based Cloud Campus solutions</strong>,
			  including <strong>iMaster NCE Campus</strong> and
			  <strong>Data Center technologies</strong>.
			</p>


			<p>
			  A key part of the role was developing and adapting
			  training modules to address the networking requirements
			  of the customer while keeping the content aligned with
			  the latest Cloud Campus developments.
			</p>


			<p>
			  Beyond presenting technical concepts, the training focused
			  on transforming complex technologies into
			  <strong>practical and actionable knowledge</strong>.
			  The objective was to provide the engineers with insights
			  that could be directly related to their networking
			  requirements and day-to-day technical activities.
			</p>


			<p>
			  This experience allowed me to combine my
			  <strong>Huawei networking expertise</strong> with
			  technical training and knowledge-sharing skills. It was
			  also an opportunity to work directly with engineers and
			  adapt the delivery according to their technical needs.
			</p>


			<p>
			  The project was a valuable step in my development as a
			  <strong>network engineer and technical trainer</strong>,
			  strengthening both my understanding of Huawei Cloud
			  Campus technologies and my ability to communicate complex
			  networking solutions in a practical way.
			</p>


			<br>


			<p class="article-hashtags">

			  #Huawei
			  #HuaweiTrainer
			  #CloudCampus
			  #iMasterNCE
			  #SDN
			  #DataCenter
			  #Training
			  #BARAKABank
			  #Networking

			</p>

		  `
		},
		
		"libyan-spider-datacenter": {

		  title:
			"Libyan Spider Data Center — Network Infrastructure Design",

		  category:
			"Projects",

		  date:
			"December 2023",

		  tags: [
			"NetworkDesign",
			"NetworkArchitecture",
			"DataCenter",
			"LLD",
			"NetworkEngineering",
			"LibyanSpider"
		  ],

		  excerpt:
			"Designed and documented a complete Low-Level Design network infrastructure for the Libyan Spider data center project in Tripoli.",

		  content: `

			<p>
			  As part of a freelance consulting engagement with
			  <strong>Libyan Spider</strong>, I had the opportunity to
			  work on the design and documentation of a complete
			  <strong>network infrastructure for a data center project
			  in Tripoli, Libya</strong>.
			</p>


			<p>
			  The project focused on developing a detailed
			  <strong>Low-Level Design (LLD)</strong> aligned with the
			  project's technical requirements and operational needs.
			  The objective was to provide a clear and structured
			  network design that could serve as a reliable reference
			  throughout implementation.
			</p>


			<p>
			  My responsibilities included designing the network
			  architecture, preparing detailed documentation, and
			  ensuring that the proposed network solutions were
			  aligned with the specific requirements of the project.
			  Particular attention was given to the clarity,
			  consistency and practicality of the design.
			</p>


			<p>
			  Another important part of the project was
			  <strong>knowledge transfer</strong>. I worked closely with
			  the client team to explain the proposed architecture,
			  design decisions and network configuration, helping them
			  build a clear understanding of the infrastructure.
			</p>


			<p>
			  Following the implementation, I also provided ongoing
			  technical support to help ensure the stability and
			  proper functionality of the network infrastructure.
			  This allowed me to follow the project beyond the design
			  phase and contribute to a smooth transition into
			  operation.
			</p>


			<p>
			  This project was a valuable experience in
			  <strong>data center network design, network architecture,
			  technical documentation and client collaboration</strong>,
			  while also reinforcing the importance of creating
			  structured and maintainable network designs for
			  enterprise environments.
			</p>


			<br>


			<p class="article-hashtags">

			  #NetworkDesign
			  #NetworkArchitecture
			  #DataCenter
			  #LLD
			  #NetworkEngineering
			  #LibyanSpider
			  #Consulting
			  #TechnicalDocumentation

			</p>

		  `
		},
		
		"ccna-security": {
		  title: "CCNA Security — One Day Before Retirement",
		  category: "Certifications",
		  date: "February 2020",

		  tags: [
			"Cisco",
			"CCNASecurity",
			"NetworkSecurity",
			"Cybersecurity",
			"Certification"
		  ],

		  excerpt:
			"Happy to have passed the CCNA Security certification just one day before Cisco officially retired the certification.",

		  content: `
			<p>
			  Happy to share another important milestone in my
			  <strong>network security journey</strong>.
			</p>

			<p>
			  On <strong>February 22, 2020</strong>, I successfully passed
			  the <strong>Cisco CCNA Security</strong> certification.
			</p>

			<p>
			  What made this achievement even more special was the timing:
			  I passed the certification <strong>just one day before it was
			  officially retired by Cisco</strong>.
			</p>

			<p>
			  Cisco retired the CCNA Security certification on
			  <strong>February 23, 2020</strong> as part of its new
			  certification program.
			</p>

			<p>
			  It was a great way to strengthen my foundation in network
			  security and an important step in my cybersecurity journey.
			</p>

			<div class="article-images">

			  <img
				src="images/ccna-security.png"
				alt="Cisco Certified Network Associate Security certificate"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Cisco #CCNASecurity #NetworkSecurity
			  #Cybersecurity #Certification #CiscoCertified
			</p>
		  `
		},

		"ccnp-routing-switching": {
		  title: "CCNP Routing & Switching Certification",
		  category: "Certifications",
		  date: "December 2019",

		  tags: [
			"Cisco",
			"CCNP",
			"RoutingAndSwitching",
			"Networking",
			"Certification",
			"ProfessionalAchievement"
		  ],

		  excerpt:
			"Successfully completed the TS exam after passing the Switch and Route exams, earning the CCNP Routing & Switching certification — the best way to end the year.",

		  content: `
			<p>
			  Today, I am delighted to share another important milestone
			  in my networking journey.
			</p>

			<p>
			  After successfully passing the
			  <strong>Switch</strong> and <strong>Route</strong> exams,
			  I have now completed the <strong>TS (Troubleshooting)</strong>
			  exam and officially achieved the
			  <strong>Cisco Certified Network Professional (CCNP) Routing &amp; Switching</strong>
			  certification.
			</p>

			<p>
			  This journey required a lot of preparation, hard work and
			  perseverance, and completing the final exam makes this
			  achievement even more special.
			</p>

			<p>
			  <strong>The best way to end the year! 🎉</strong>
			</p>

			<div class="article-images">

			  <img
				src="images/ccnp-routing-switching.png"
				alt="Cisco Certified Network Professional Routing and Switching certificate"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Cisco #CCNP #RoutingAndSwitching #Networking
			  #Certification #ProfessionalAchievement #CiscoCertified
			</p>
		  `
		},

		"lpic-1": {
		  title: "LPIC-1 Linux Administrator Certification",
		  category: "Certifications",
		  date: "July 2018",

		  tags: [
			"LPI",
			"LPIC-1",
			"Linux",
			"LinuxAdministration",
			"Certification"
		  ],

		  excerpt:
			"After passing the LPI 101 exam, I completed the LPI 102 and officially obtained the LPIC-1 Linux Administrator certification.",

		  content: `
			<p>
			  Another important milestone in my technical journey:
			  after successfully passing the <strong>LPI 101</strong> exam,
			  I continued with the second part of the certification.
			</p>

			<p>
			  I am pleased to share that I successfully passed the
			  <strong>LPI 102</strong> exam and completed the requirements
			  to obtain the <strong>LPIC-1 Linux Administrator</strong>
			  certification.
			</p>

			<p>
			  This achievement strengthened my knowledge of Linux systems
			  and administration and gave me a solid foundation in
			  Linux-based environments.
			</p>

			<p>
			  Proud to add another certification to my professional journey
			  and looking forward to continuing to develop my technical skills.
			</p>

			<div class="article-images">

			  <img
				src="images/lpic-1.png"
				alt="Linux Professional Institute LPIC-1 certification"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #LPI #LPIC1 #Linux #LinuxAdministration
			  #Certification #ProfessionalAchievement
			</p>
		  `
		},
		
		"hcip-routing-switching": {
		  title: "Huawei HCIP Routing & Switching Certification",
		  category: "Certifications",
		  date: "January 2020",

		  tags: [
			"Huawei",
			"HCIP",
			"RoutingAndSwitching",
			"Networking",
			"Certification",
			"FastTrack"
		  ],

		  excerpt:
			"Achieved the Huawei HCIP Routing & Switching certification through the Fast Track path, building on my existing CCNP Routing & Switching certification.",

		  content: `
			<p>
			  Another important milestone in my networking journey:
			  successfully achieving the
			  <strong>Huawei HCIP Routing &amp; Switching</strong>
			  certification.
			</p>

			<p>
			  I obtained this certification in
			  <strong>January 2020</strong> through the
			  <strong>Fast Track</strong> path, thanks to my existing
			  <strong>CCNP Routing &amp; Switching</strong> certification.
			</p>

			<p>
			  Having already developed a strong foundation in enterprise
			  networking through the Cisco certification path, this was a
			  great opportunity to expand my expertise into the Huawei
			  networking ecosystem.
			</p>

			<p>
			  This achievement strengthened my knowledge of routing and
			  switching technologies and marked another step in my
			  professional development as a network engineer.
			</p>

			<div class="article-images">

			  <img
				src="images/hcip-routing-switching.png"
				alt="Huawei HCIP Routing and Switching certification"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Huawei #HCIP #RoutingAndSwitching #Networking
			  #Certification #FastTrack #CCNP
			</p>
		  `
		},
		
		"fortinet-nse7": {
		  title: "Fortinet NSE 7 Network Security Architect",
		  category: "Certifications",
		  date: "June 2021",

		  tags: [
			"Fortinet",
			"NSE7",
			"NetworkSecurity",
			"Cybersecurity",
			"Certification"
		  ],

		  excerpt:
			"Proud to achieve the Fortinet NSE 7 Network Security Architect certification, marking another important milestone in my network security journey.",

		  content: `
			<p>
			  I'm pleased to share another important milestone in my
			  <strong>network security journey</strong>.
			</p>

			<p>
			  I successfully achieved the
			  <strong>Fortinet NSE 7 Network Security Architect</strong>
			  certification on <strong>June 30, 2021</strong>.
			</p>

			<p>
			  This certification represents another step in developing my
			  expertise in network security architecture and strengthening
			  my professional skills in cybersecurity.
			</p>

			<p>
			  Proud of the hard work behind this achievement and looking
			  forward to continuing to learn, grow and take on new
			  challenges in network security.
			</p>

			<div class="article-images">

			  <img
				src="images/fortinet-nse7.png"
				alt="Fortinet NSE 7 Network Security Architect certificate"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Fortinet #NSE7 #NetworkSecurity #Cybersecurity
			  #NetworkSecurityArchitect #Certification #ProfessionalAchievement
			</p>
		  `
		},

		"hcie-written-exam": {
		  title: "Huawei HCIE Written Exam Achievement",
		  category: "Certifications",
		  date: "July 2020",

		  tags: [
			"Huawei",
			"HCIE",
			"Certification",
			"Networking",
			"ProfessionalAchievement"
		  ],

		  excerpt:
			"After months of hard work and perseverance, I am delighted to share a personal achievement: successfully passing the Huawei HCIE written exam.",

		  content: `
			<p>
			  It was a great pleasure, after months of hard work and perseverance,
			  to reach another important milestone in my professional journey.
			</p>

			<p>
			  I am delighted to share a personal achievement that made me proud:
			  successfully passing the <strong>Huawei HCIE written exam</strong>.
			</p>

			<p>
			  This achievement represents the result of months of preparation,
			  dedication and continuous learning.
			</p>

			<p>
			  I can't wait for the next step and the new challenge:
			  <strong>passing the Huawei HCIE lab exam and interview</strong>.
			</p>

			<div class="article-images">

			  <img
				src="images/hcie-written-exam.png"
				alt="Huawei HCIE Written Exam certificate"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Huawei #HCIE #Certification #Networking
			  #ProfessionalAchievement #ContinuousLearning
			</p>
		  `
		},

		"cisco-security-core": {
		  title: "Cisco Certified Specialist - Security Core",
		  category: "Certifications",
		  date: "June 2023",

		  tags: [
			"Cisco",
			"SecurityCore",
			"CCNP",
			"NetworkSecurity",
			"ProfessionalAchievement",
			"ContinuousLearning"
		  ],

		  excerpt:
			"Achieved the Cisco Certified Specialist - Security Core certification, helping me recertify my CCNP Enterprise just before it expired.",

		  content: `
			<p>
			  🎉 <strong>Exciting News!</strong> 🎉
			</p>

			<p>
			  I am thrilled to announce that I have achieved the
			  <strong>Cisco Certified Specialist - Security Core</strong>
			  certification from Cisco!
			</p>

			<p>
			  This accomplishment not only demonstrates my dedication to
			  continuous learning but also helped me recertify my
			  <strong>CCNP Enterprise</strong> on the last day before it expired.
			</p>

			<p>
			  Attaining this certification showcases my commitment to staying
			  at the forefront of network security, equipping me with the latest
			  knowledge and skills to protect valuable digital assets.
			</p>

			<p>
			  I now have enhanced expertise in core security technologies,
			  enabling me to tackle complex challenges with confidence.
			</p>

			<p>
			  If you're interested in discussing network security, Cisco
			  certifications, or professional development, feel free to reach out.
			  Let's continue learning and inspiring each other!
			</p>

			<div class="article-images">

			  <img
				src="images/cisco-security-core.png"
				alt="Cisco Certified Specialist - Security Core certificate"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #CiscoCertified #SecurityCore #CCNP
			  #ProfessionalAchievement #NetworkSecurity #ContinuousLearning
			</p>
		  `
		},


		"huawei-ict-competition": {
		  title: "Huawei ICT Competition — Gold Cup",
		  category: "Awards",
		  date: "December 2019",

		  tags: [
			"Huawei",
			"ICTCompetition",
			"TEKUP",
			"Networking",
			"Security",
			"WLAN",
			"Award"
		  ],

		  excerpt:
			"Honored to participate in the Huawei ICT Competition with the TEKUP team and be awarded the Gold Cup after competing in R&S, Security and WLAN.",

		  content: `
			<p>
			  It was a great honor and an amazing opportunity for me and my team
			  to participate in the <strong>Huawei ICT Competition</strong>
			  and be awarded with the <strong>Gold Cup</strong>.
			</p>

			<p>
			  The <strong>TEKUP team</strong> qualified to participate after
			  competing in the first phase and achieving some of the best scores.
			</p>

			<p>
			  The second phase was an opportunity to compete with other
			  engineering schools in three different contests:
			  <strong>Routing &amp; Switching, Security and WLAN</strong>.
			</p>

			<p>
			  It was not easy to achieve first place and earn the opportunity
			  to represent <strong>Tunisia</strong>. The competition was
			  challenging, but the experience was incredibly rewarding.
			</p>

			<p>
			  We hoped that in the third phase we would represent
			  <strong>Africa</strong> and participate in the global final
			  in <strong>Shenzhen</strong>.
			</p>

			<div class="article-images">

			  <img
				src="images/huawei-ict-competition-1.png"
				alt="Huawei ICT Competition Gold Cup"
			  >

			  <img
				src="images/huawei-ict-competition-2.png"
				alt="TEKUP Huawei ICT Competition team"
			  >

			  <img
				src="images/huawei-ict-competition-3.png"
				alt="Huawei ICT Competition award ceremony"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Huawei #ICTCompetition #TEKUP #Networking
			  #Security #WLAN #HuaweiICTCompetition #GoldCup
			</p>
			
			<a href="https://www.facebook.com/nous.sommes.les.ingenieurs/posts/pfbid0syPp8Jv3zgUGKKsPQNqrxmQGLnEdQriexXox55n6L6YKYfRccMfHbzZUupX1jg6Ml">Facebook Post in NOUS ∑ LES INGENIEURS Page</a>
		  `
		},
	
		"hcia-security": {
		  title: "HCIA Security Certification with the Highest Score",
		  category: "Certifications",
		  date: "March 2020",

		  tags: [
			"Huawei",
			"HCIA",
			"HCIA-Security",
			"Cybersecurity",
			"Certification"
		  ],

		  excerpt:
			"Another step towards the Huawei ICT global regional competition preparation, achieving the HCIA Security certification with the highest score.",

		  content: `
			<p>
			  Another step towards the
			  <strong>Huawei ICT global regional competition</strong>
			  preparation.
			</p>

			<p>
			  It's my pleasure to announce that I successfully obtained the
			  <strong>HCIA Security</strong> certification with the
			  <strong>highest score</strong>.
			</p>

			<p>
			  This achievement represents another important milestone in my
			  cybersecurity journey and brings me one step closer to the next
			  challenge.
			</p>

			<p>
			  <strong>Next step loading...</strong>
			</p>

			<div class="article-images">

			  <img
				src="images/hcia-security.png"
				alt="Huawei HCIA Security certificate"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Huawei #HCIA #HCIASecurity #Cybersecurity #Certification
			</p>
		  `
		},


		"ceh-certification": {
		  title: "Officially Certified Ethical Hacker",
		  category: "Certifications",
		  date: "June 2020",

		  tags: [
			"CEH",
			"EC-Council",
			"Cybersecurity",
			"EthicalHacking",
			"Certification"
		  ],

		  excerpt:
			"A major milestone in my cybersecurity journey: becoming an officially certified Ethical Hacker from EC-Council.",

		  content: `
			<p>
			  It is with great pleasure that I announce that I finally made it
			  and became an officially certified
			  <strong>Ethical Hacker from EC-Council</strong>.
			</p>

			<p>
			  The journey was challenging but truly amazing, filled with
			  learning, practice and new perspectives on cybersecurity.
			</p>

			<p>
			  What made this experience even more special was the preparation
			  I made during quarantine. Turning that challenging period into
			  an opportunity to focus, learn and develop my cybersecurity skills
			  made achieving this certification even more meaningful.
			</p>

			<p>
			  This is another important step in my professional journey,
			  and I'm looking forward to continuing to learn and grow in
			  the field of cybersecurity.
			</p>

			<div class="article-images">

			  <img
				src="images/ceh-certification.png"
				alt="EC-Council Certified Ethical Hacker certificate"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #CEH #ECCouncil #Cybersecurity #EthicalHacking #Certification
			</p>
		  `
		},
		
"jncia-sec": {

  title:
    "JNCIA-SEC — Expanding My Network Security Expertise",

  category:
    "Certifications",

  date:
    "June 2020",

  tags: [
    "Juniper",
    "JNCIA",
    "JNCIASec",
    "NetworkSecurity",
    "Cybersecurity",
    "Certification"
  ],

  excerpt:
    "After achieving CCNA Security and HCIA Security, I am happy to earn the Juniper Networks Certified Associate Security certification and continue developing my network security skills.",

  content: `

    <p>
      I am very happy to share another important milestone
      in my <strong>network security journey</strong>:
      I successfully achieve the
      <strong>Juniper Networks Certified Associate —
      Security (JNCIA-SEC)</strong> certification.
    </p>


    <p>
      After achieving both <strong>CCNA Security</strong>
      and <strong>HCIA Security</strong>, I continue to
      strengthen my security knowledge by exploring the
      Juniper security ecosystem.
    </p>


    <p>
      This certification allows me to expand my understanding
      of <strong>network security concepts and Juniper
      security technologies</strong>, while complementing
      the knowledge I already develop through Cisco and
      Huawei security certifications.
    </p>


    <p>
      I am particularly happy with this achievement because
      it represents another step toward building a broader
      expertise across different networking and security
      vendors.
    </p>


    <p>
      My goal is to continue developing both my networking
      and cybersecurity skills, combining knowledge from
      different technology ecosystems to become a more
      versatile network security professional.
    </p>


    <p>
      <strong>
        Another security certification, another technology
        ecosystem explored, and another step forward in
        my cybersecurity journey.
      </strong>
    </p>


    <div class="article-images">

      <img
        src="images/jncia-sec.png"
        alt="Juniper Networks Certified Associate Security JNCIA-SEC certificate"
      >

    </div>


    <br>


    <p class="article-hashtags">

      #Juniper
      #JNCIA
      #JNCIASEC
      #NetworkSecurity
      #Cybersecurity
      #Certification
      #JuniperSecurity
      #NetworkEngineer
      #ContinuousLearning

    </p>

  `
},
	
		"farewell-huawei": {
		  title: "Farewell to Huawei After Nearly Four Incredible Years",
		  category: "Career",
		  date: "November 2023",

		  tags: [
			"Huawei",
			"Career",
			"ProfessionalJourney",
			"CareerMilestone"
		  ],

		  excerpt:
			"Reflecting back on an incredible chapter as I bid farewell to Huawei after nearly four fulfilling years.",

		  content: `
			<p>
			  Reflecting back on an incredible chapter as I bid farewell
			  to <strong>Huawei</strong> after nearly four fulfilling years.
			</p>

			<p>
			  Grateful for the invaluable experiences and cherished
			  connections with amazing colleagues throughout this journey.
			</p>

			<p>
			  Heartfelt thanks to everyone who made this time unforgettable.
			</p>

			<p>
			  Farewell, Huawei.
			</p>

			<div class="article-images">

			  <img
				src="images/huawei-farewell-1.png"
				alt="Huawei farewell memory 1"
			  >

			  <img
				src="images/huawei-farewell-2.png"
				alt="Huawei farewell memory 2"
			  >

			  <img
				src="images/huawei-farewell-3.png"
				alt="Huawei farewell memory 3"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Huawei #Career #ProfessionalJourney #CareerMilestone
			</p>
		  `
		},
	
		"huawei-network-protection-pioneer": {
		  title: "First-Ranked Network Protection Pioneer by Huawei",
		  category: "Awards",
		  date: "March 2023",

		  tags: [
			"Huawei",
			"NetworkSecurity",
			"Cybersecurity",
			"NetworkProtectionPioneer",
			"Award"
		  ],

		  excerpt:
			"Honored to be awarded as the first-ranked Network Protection Pioneer by Huawei.",

		  content: `
			<p>
			  Honored to be awarded as the <strong>first-ranked Network Protection Pioneer</strong>
			  by Huawei!
			</p>

			<p>
			  Thank you for this recognition and for your commitment to network security.
			  I will continue to develop innovative solutions to safeguard Huawei's
			  network infrastructure against threats.
			</p>

			<p>
			  Excited to collaborate with industry experts for secure and reliable
			  connectivity for everyone.
			</p>

			<div class="article-images">
			  <img
				src="images/huawei-network-protection-pioneer.png"
				alt="Huawei Network Protection Pioneer Certificate"
			  >
			</div>
			<br>
			<p class="article-hashtags">
			  #Huawei #NetworkSecurity #Cybersecurity
			  #NetworkProtectionPioneer #Award
			</p>
			`
		},


		"cisco-certification": {
		  title: "Cisco Professional Certifications Renewed Until July 2029",
		  category: "Certifications",
		  date: "July 2026",
		  tags: ["Cisco", "CCNP", "SCOR", "Networking", "CyberSecurity", "Continuous Learning"],

		  excerpt:
			"A small professional milestone: completing the Designing Cisco Security Infrastructure exam and renewing my Cisco professional certifications until July 2029.",

		  content: `
			<p>I'm pleased to share a small professional milestone.</p>

			<p>
			  I recently completed the <strong>Designing Cisco Security Infrastructure</strong>
			  exam through the Cisco U. Continuing Education program.
			</p>

			<p>
			  This achievement allowed me to renew my Cisco professional certifications,
			  extending their validity until <strong>July 2029</strong>, including:
			</p>

			<ul>
			  <li>✅ Cisco Certified Network Professional (CCNP) Enterprise</li>
			  <li>✅ Cisco Certified Specialist – Security Core (SCOR)</li>
			</ul>

			<p>
			  I believe continuous learning is an important part of our profession,
			  and I'm grateful for the opportunity to keep my skills up to date while
			  continuing to grow in networking and cybersecurity.
			</p>

			<p>
			  Looking forward to applying this knowledge in future projects and
			  continuing to learn.
			</p>


			<div class="article-images">
			  <img src="images/ccnp-enterprise-certificate.png"
				   alt="Cisco Certified Network Professional Enterprise certificate">

			  <img src="images/designing-cisco-security-infrastructure-certificate.png"
				   alt="Designing Cisco Security Infrastructure certificate">
			</div>
			<br>
			<p class="article-hashtags">
			  #Cisco #CiscoU #CCNP #SCOR #Networking #CyberSecurity #ContinuousLearning
			</p>
		  `
		},

		"hcia-training-algeria-telecom": {
		  title: "HCIA-Security Training for Algeria Telecom",
		  category: "Training",
		  date: "September 2026",

		  tags: [
			"Huawei",
			"HCIA-Security",
			"Training",
			"Firewall",
			"Cybersecurity",
			"AlgeriaTelecom"
		  ],

		  excerpt:
			"Recently delivered a five-day Huawei HCIA-Security training program for Algeria Telecom, combining security concepts, firewall technologies and hands-on practice.",

		  content: `
			<p>
			  I recently had the opportunity to deliver a
			  <strong>five-day Huawei HCIA-Security training program</strong>
			  for <strong>Algeria Telecom</strong>.
			</p>

			<h3>Training topics</h3>

			<ul>
			  <li>Network security concepts</li>
			  <li>Common network security threats</li>
			  <li>Firewall security policies</li>
			  <li>NAT technologies</li>
			  <li>Firewall high availability</li>
			  <li>IPS technologies</li>
			  <li>User management</li>
			  <li>Encryption and decryption</li>
			  <li>PKI and certificate systems</li>
			</ul>

			<h3>Hands-on practice</h3>

			<p>
			  The training also included practical exercises covering
			  firewall policies, NAT, HA and VRRP using the Huawei lab
			  environment.
			</p>

			<h3>Knowledge sharing</h3>

			<p>
			  Delivering technical training is an excellent opportunity
			  to combine engineering experience with knowledge sharing
			  and communication.
			</p>

			<div class="article-images">

			  <img
				src="images/hcia-training-algeria-telecom.png"
				alt="Huawei HCIA-Security training for Algeria Telecom"
			  >

			</div>
			<br>
			<p class="article-hashtags">
			  #Huawei #HCIASecurity #Training #AlgeriaTelecom
			  #Cybersecurity #NetworkSecurity #Firewall #KnowledgeSharing
			</p>
		  `
		},


      "hld": {

        category:
          "Projects",

        date:
          "2026",

        title:
          "Enterprise Network Design & HLD",

        tags: [
          "HLD",
          "Network Design",
          "Architecture",
          "Enterprise"
        ],

        content: `

          <p>
            High-Level Design is an important part
            of enterprise network projects because
            it translates business and technical
            requirements into an overall architecture.
          </p>


          <h3>
            Design considerations
          </h3>


          <ul>

            <li>
              Network architecture
            </li>

            <li>
              Routing design
            </li>

            <li>
              Switching architecture
            </li>

            <li>
              High availability
            </li>

            <li>
              Security architecture
            </li>

            <li>
              Management and monitoring
            </li>

            <li>
              Scalability
            </li>

          </ul>


          <h3>
            From architecture to implementation
          </h3>


          <p>
            A good HLD provides a clear foundation
            for the Low-Level Design and subsequent
            implementation activities.
          </p>

        `

      },

		"ccna-routing-switching": {

		  title:
			"CCNA Routing & Switching — Cisco Associate Level",

		  category:
			"Certifications",

		  date:
			"January 2019",

		  tags: [
			"Cisco",
			"CCNA",
			"RoutingAndSwitching",
			"Networking",
			"Certification",
			"CareerMilestone"
		  ],

		  excerpt:
			"One month after earning my Huawei HCNA, I am happy to achieve the Cisco CCNA Routing & Switching certification and strengthen my networking foundation.",

		  content: `

			<p>
			  I am very happy to share another important milestone
			  in my networking journey: I successfully achieve the
			  <strong>Cisco Certified Network Associate (CCNA)
			  Routing & Switching</strong> certification.
			</p>


			<p>
			  Just one month after earning my
			  <strong>Huawei HCNA Routing & Switching</strong>,
			  I continue my certification journey by reaching the
			  <strong>associate level with Cisco</strong>.
			</p>


			<p>
			  Having already built a solid foundation through my
			  previous networking studies and certifications, this
			  achievement allows me to further strengthen my knowledge
			  of <strong>routing, switching and network fundamentals</strong>
			  using Cisco technologies.
			</p>


			<p>
			  Earning certifications from both <strong>Huawei and
			  Cisco</strong> gives me the opportunity to explore
			  different approaches to networking while developing a
			  broader understanding of enterprise network technologies.
			</p>


			<p>
			  This certification is another important step in my
			  professional development and motivates me to continue
			  learning, gaining practical experience and preparing
			  for more advanced networking challenges.
			</p>


			<p>
			  <strong>
				One month, two associate-level certifications,
				and one clear goal: keep learning and keep moving forward.
			  </strong>
			</p>


			<div class="article-images">

			  <img
				src="images/ccna-routing-switching.png"
				alt="Cisco CCNA Routing and Switching certificate"
			  >

			</div>


			<br>


			<p class="article-hashtags">

			  #Cisco
			  #CCNA
			  #RoutingAndSwitching
			  #Networking
			  #Certification
			  #CareerMilestone
			  #CiscoCertified
			  #NetworkEngineer

			</p>

		  `
		},
		
		"jncda-design": {

		  title:
			"JNCDA — My First Network Design Certification",

		  category:
			"Certifications",

		  date:
			"May 2019",

		  tags: [
			"Juniper",
			"JNCDA",
			"NetworkDesign",
			"NetworkArchitecture",
			"Networking",
			"Certification"
		  ],

		  excerpt:
			"Happy to achieve the Juniper Networks Certified Design Associate certification, marking my first certification focused specifically on network design.",

		  content: `

			<p>
			  I am very happy to share another important milestone
			  in my professional journey: I successfully achieve the
			  <strong>Juniper Networks Certified Design Associate
			  (JNCDA)</strong> certification.
			</p>


			<p>
			  This certification is particularly meaningful to me
			  because it represents my <strong>first certification
			  focused specifically on network design</strong>.
			</p>


			<p>
			  After developing my networking foundation through
			  certifications from <strong>Cisco, Huawei and
			  Juniper</strong>, I am now taking another step by
			  focusing on the design and architecture side of
			  networking.
			</p>


			<p>
			  The JNCDA certification allows me to develop my
			  understanding of <strong>network design principles,
			  architecture and design methodologies</strong>, while
			  complementing the routing and switching knowledge I
			  already have.
			</p>


			<p>
			  I am excited about this new direction because network
			  design is an important part of building scalable,
			  reliable and efficient infrastructures. This
			  certification motivates me to continue developing my
			  skills not only in network implementation, but also
			  in the <strong>design and architecture</strong> of
			  enterprise networks.
			</p>


			<p>
			  <strong>
				My first certification in network design — another
				step toward becoming a more complete network engineer.
			  </strong>
			</p>


			<div class="article-images">

			  <img
				src="images/jncda-design.png"
				alt="Juniper Networks Certified Design Associate JNCDA certificate"
			  >

			</div>


			<br>


			<p class="article-hashtags">

			  #Juniper
			  #JNCDA
			  #NetworkDesign
			  #NetworkArchitecture
			  #Networking
			  #Certification
			  #NetworkEngineer
			  #ContinuousLearning

			</p>

		  `
		},
		
		"jncia-junos": {

		  title:
			"JNCIA-Junos — Expanding My Juniper Networking Skills",

		  category:
			"Certifications",

		  date:
			"March 2019",

		  tags: [
			"Juniper",
			"JNCIA",
			"JNCIAJunos",
			"Junos",
			"Networking",
			"Certification"
		  ],

		  excerpt:
			"After discovering the Juniper domain through JNCIA Cloud last month, I am happy to achieve the JNCIA-Junos certification and explore Juniper networking technologies.",

		  content: `

			<p>
			  I am happy to share another milestone in my networking
			  journey: I successfully achieve the
			  <strong>Juniper Networks Certified Associate —
			  Junos (JNCIA-Junos)</strong> certification.
			</p>


			<p>
			  Last month, I discover the <strong>Juniper Networks
			  ecosystem</strong> through the JNCIA Cloud certification.
			  This experience motivates me to explore another important
			  part of the Juniper technology portfolio.
			</p>


			<p>
			  This time, I focus on <strong>Junos</strong> and the
			  fundamentals of Juniper networking technologies.
			  Achieving the JNCIA-Junos certification allows me to
			  expand my understanding of the Juniper networking
			  platform and strengthen my knowledge beyond the
			  technologies I already work with.
			</p>


			<p>
			  I am particularly happy with this achievement because
			  it continues my approach of exploring different
			  networking ecosystems and building a broader technical
			  foundation across multiple vendors.
			</p>


			<p>
			  With Cisco, Huawei and now Juniper certifications,
			  I continue to develop a wider perspective on routing,
			  switching and network technologies while preparing
			  myself for more advanced technical challenges.
			</p>


			<p>
			  <strong>
				Another Juniper milestone, another technology explored,
				and another step forward in my networking journey.
			  </strong>
			</p>


			<div class="article-images">

			  <img
				src="images/jncia-junos.png"
				alt="Juniper Networks Certified Associate JNCIA-Junos certificate"
			  >

			</div>


			<br>


			<p class="article-hashtags">

			  #Juniper
			  #JNCIA
			  #JNCIAJunos
			  #Junos
			  #Networking
			  #Certification
			  #NetworkEngineer
			  #ContinuousLearning

			</p>

		  `
		},
		
		"jncia-cloud": {

		  title:
			"JNCIA-Cloud — Discovering the Juniper Cloud Domain",

		  category:
			"Certifications",

		  date:
			"February 2019",

		  tags: [
			"Juniper",
			"JNCIA",
			"JNCIACloud",
			"Cloud",
			"Networking",
			"Certification"
		  ],

		  excerpt:
			"Happy to earn my first Juniper certification, JNCIA-Cloud, and take my first step into the Juniper Networks cloud ecosystem.",

		  content: `

			<p>
			  I am very happy to share a new milestone in my
			  networking journey: I successfully achieve the
			  <strong>Juniper Networks Certified Associate —
			  Cloud (JNCIA-Cloud)</strong> certification.
			</p>


			<p>
			  After building my networking fundamentals through
			  certifications such as <strong>CCENT</strong> and
			  <strong>HCNA Routing & Switching</strong>, I am now
			  excited to explore a new technology ecosystem with
			  <strong>Juniper Networks</strong>.
			</p>


			<p>
			  The JNCIA-Cloud certification gives me the opportunity
			  to discover the <strong>Juniper cloud domain</strong>
			  and develop a better understanding of cloud-related
			  networking concepts and technologies.
			</p>


			<p>
			  This achievement represents an important step in
			  expanding my technical knowledge beyond traditional
			  networking technologies. I am particularly motivated
			  to continue exploring how networking and cloud
			  technologies come together in modern infrastructures.
			</p>


			<p>
			  This is my <strong>first Juniper certification</strong>,
			  and I am looking forward to continuing this journey
			  by exploring more of the Juniper ecosystem and
			  developing my skills across different networking
			  technologies.
			</p>


			<p>
			  <strong>
				A new vendor, a new technology domain, and another
				step forward in my networking journey.
			  </strong>
			</p>


			<div class="article-images">

			  <img
				src="images/jncia-cloud.png"
				alt="Juniper Networks Certified Associate JNCIA-Cloud certificate"
			  >

			</div>


			<br>


			<p class="article-hashtags">

			  #Juniper
			  #JNCIA
			  #JNCIACloud
			  #Cloud
			  #Networking
			  #Certification
			  #NetworkEngineer
			  #ContinuousLearning

			</p>

		  `
		},


      "instructor": {

        category:
          "Training",

        date:
          "2026",

        title:
          "From Engineer to Instructor",

        tags: [
          "Training",
          "Huawei",
          "Knowledge Sharing"
        ],

        content: `

          <p>
            Technical training has become another
            important dimension of my professional
            journey.
          </p>


          <h3>
            Sharing experience
          </h3>


          <p>
            Teaching network and security technologies
            requires more than technical knowledge.
            It also requires adapting explanations
            to different levels of experience and
            connecting theory with practical scenarios.
          </p>


          <p>
            This experience has strengthened both
            my technical communication and
            presentation skills.
          </p>

        `

      },


      "wlan": {

        category:
          "Technical",

        date:
          "2026",

        title:
          "Huawei WLAN & iMaster NCE Experience",

        tags: [
          "Huawei",
          "AirEngine",
          "iMaster NCE",
          "WLAN"
        ],

        content: `

          <p>
            Huawei campus networking and WLAN
            technologies are an important part of
            my technical experience.
          </p>


          <h3>
            Technologies
          </h3>


          <ul>

            <li>
              AirEngine access points
            </li>

            <li>
              iMaster NCE Campus
            </li>

            <li>
              Campus switching
            </li>

            <li>
              Wireless management
            </li>

            <li>
              SSID and VLAN integration
            </li>

            <li>
              Network monitoring
            </li>

          </ul>


          <p>
            These technologies provide centralized
            management and visibility across
            enterprise campus environments.
          </p>

        `

      }

    };
	
	



    /* =====================================================
       ARTICLE MODAL
       ===================================================== */

    const articleModal =
      document.getElementById(
        "articleModal"
      );


    const articleOverlay =
      document.getElementById(
        "articleOverlay"
      );


    const articleClose =
      document.getElementById(
        "articleClose"
      );


    const articleTitle =
      document.getElementById(
        "articleTitle"
      );


    const articleCategory =
      document.getElementById(
        "articleCategory"
      );


    const articleDate =
      document.getElementById(
        "articleDate"
      );


    const articleTags =
      document.getElementById(
        "articleTags"
      );


    const articleContent =
      document.getElementById(
        "articleContent"
      );



    function openArticle(
      key
    ) {


      const article =
        articles[key];


      if (!article) {
        return;
      }


      articleTitle.textContent =
        article.title;


      articleCategory.textContent =
        article.category;


      articleDate.textContent =
        article.date;


      articleTags.innerHTML =
        article.tags
          .map(
            tag =>
              `<span>${tag}</span>`
          )
          .join("");


      articleContent.innerHTML =
        article.content;


      articleModal.classList.add(
        "open"
      );


      articleModal.setAttribute(
        "aria-hidden",
        "false"
      );


      document.body.classList.add(
        "modal-open"
      );


      history.replaceState(
        null,
        "",
        "#article-" + key
      );

    }



    function closeArticle() {


      articleModal.classList.remove(
        "open"
      );


      articleModal.setAttribute(
        "aria-hidden",
        "true"
      );


      document.body.classList.remove(
        "modal-open"
      );


      if (
        window.location.hash.startsWith(
          "#article-"
        )
      ) {

        history.replaceState(
          null,
          "",
          window.location.pathname +
          window.location.search
        );

      }

    }



    /* =====================================================
       READ UPDATE BUTTONS
       ===================================================== */

    document
      .querySelectorAll(
        ".read-update"
      )
      .forEach(
        button => {

          button.addEventListener(
            "click",
            event => {

              event.preventDefault();


              const card =
                button.closest(
                  ".journal-card"
                );


              const key =
                card.dataset.article;


              openArticle(
                key
              );

            }
          );

        }
      );



    /* CLOSE ARTICLE */

    articleClose.addEventListener(
      "click",
      closeArticle
    );


    articleOverlay.addEventListener(
      "click",
      closeArticle
    );



    /* ESCAPE */

    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Escape" &&
          articleModal.classList.contains(
            "open"
          )
        ) {

          closeArticle();

        }

      }
    );



    /* =====================================================
       CATEGORY FILTER
       ===================================================== */

    const journalFilters =
      document.querySelectorAll(
        ".journal-filter"
      );


    const journalCards =
      document.querySelectorAll(
        ".journal-card"
      );


    journalFilters.forEach(
      filter => {

        filter.addEventListener(
          "click",
          () => {


            journalFilters.forEach(
              item => {

                item.classList.remove(
                  "active"
                );

              }
            );


            filter.classList.add(
              "active"
            );


            const category =
              filter.dataset.category;


            journalCards.forEach(
              card => {


                if (
                  category === "all" ||
                  card.dataset.category ===
                  category
                ) {


                  card.classList.remove(
                    "filtered-out"
                  );


                  setTimeout(
                    () => {

                      card.style.display =
                        "";

                    },
                    10
                  );


                }


                else {


                  card.classList.add(
                    "filtered-out"
                  );


                  setTimeout(
                    () => {

                      if (
                        card.classList.contains(
                          "filtered-out"
                        )
                      ) {

                        card.style.display =
                          "none";

                      }

                    },
                    220
                  );

                }

              }
            );

          }
        );

      }
    );



    /* =====================================================
       OPEN ARTICLE FROM HASH
       ===================================================== */

    function openHashArticle() {


      const hash =
        window.location.hash;


      if (
        hash &&
        hash.startsWith(
          "#article-"
        )
      ) {


        const key =
          hash.replace(
            "#article-",
            ""
          );


        openArticle(
          key
        );

      }

    }


    window.addEventListener(
      "load",
      openHashArticle
    );