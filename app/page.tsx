
"use client";

import { useState } from "react";

const instagram =
  "https://www.instagram.com/zagreb_assassins_cricket?stkn=MXg2em96andld2dobA==";

const whatsapp =
  "https://chat.whatsapp.com/ItcFiILa3B3LkTSkdpyTxY?s=sw&p=a&ilr=4&iam=2";

const milestones = [
  {
    year: "2023",
    title: "ECS CHAMPIONS",
    description:
      "A memorable achievement built on teamwork, commitment and determination.",
  },
  {
    year: "2023",
    title: "CROATIAN CUP WINNERS",
    description: "A proud milestone in our competitive cricket journey.",
  },
  {
    year: "2024",
    title: "BUILDING OUR FUTURE",
    description:
      "Strengthening our club identity and bringing our cricket community closer.",
  },
  {
    year: "2025",
    title: "GROWING STRONGER",
    description:
      "Developing players, creating opportunities and growing together.",
  },
  {
    year: "2026",
    title: "THE NEXT CHAPTER",
    description:
      "New challenges, new ambitions and more memories to make.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <main>
        <header className="navbar">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img
              src="/images/logo.png.jpeg"
              alt="Zagreb Assassins Cricket Club"
              className="brandLogo"
            />
            <span className="brandWords">
              ZAGREB <strong>ASSASSINS</strong>
              <small>CRICKET CLUB</small>
            </span>
          </a>

          <button
            className="menuToggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`navLinks ${menuOpen ? "navOpen" : ""}`}>
            {[
              ["HOME", "#home"],
              ["OUR STORY", "#history"],
              ["GROUND", "#ground"],
              ["GALLERY", "/gallery"],
              ["JOIN US", "#join"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </nav>
        </header>

        {/* HERO */}
        <section className="hero" id="home">
          <video
            className="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/team.jpg.jpeg"
            aria-hidden="true"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="heroShade" />
          <div className="heroGrain" />

          <div className="heroContent">
            <div className="heroLogoWrap">
              <img
                src="/images/logo.png.jpeg"
                alt="Zagreb Assassins"
                className="heroLogo"
              />
            </div>

            <p className="heroEyebrow">
              <span className="liveDot" />
              ZAGREB · CROATIA · EST. 2023
            </p>

            <h1 className="heroTitle">
              ZAGREB
              <br />
              <span>ASSASSINS.</span>
            </h1>

            <p className="heroSubline">
              CRICKET CLUB <span>·</span> UNITED BY THE GAME
            </p>

            <a href="#join" className="heroCta">
              <span>JOIN THE TEAM</span>
              <span className="ctaArrow">↗</span>
            </a>

            <div className="batStage" aria-hidden="true">
              <div className="batShadow" />
              <div className="cricketBat">
                <div className="batHandle" />
                <div className="batNeck" />
                <div className="batBlade">
                  <div className="batSpine" />
                  <div className="batMark">ZA</div>
                </div>
              </div>
              <div className="batBall" />
            </div>
          </div>

          <div className="heroBottom">
            <span>CRICKET <i>·</i> COMMUNITY <i>·</i> PASSION</span>
            <a href="#history">
              DISCOVER OUR STORY <span>↓</span>
            </a>
          </div>

          <div className="heroSideLabel">ZAGREB ASSASSINS CC</div>
        </section>

        {/* CLUB INTRO */}
        <section className="intro section" id="story">
          <div className="sectionTopline">
            <span className="sectionNumber">01 / THE CLUB</span>
            <span className="sectionRule" />
            <span className="sectionLocation">ZAGREB, CROATIA</span>
          </div>

          <div className="introGrid">
            <div>
              <p className="redLabel">MORE THAN A GAME</p>
              <h2 className="displayHeading">
                ONE CLUB.
                <br />
                ONE <span>FAMILY.</span>
              </h2>
            </div>

            <div className="introCopy">
              <p className="largeCopy">
                Cricket brings us together. Teamwork makes us stronger.
              </p>
              <p>
                Zagreb Assassins is a cricket club built around the spirit of
                competition, friendship and a shared love for the game. Based
                in Zagreb, Croatia, we bring people together through cricket.
              </p>
              <a href="#join" className="underlinedLink">
                BECOME PART OF THE CLUB <span>↗</span>
              </a>
            </div>
          </div>

          <div className="featureImage">
            <img
              src="/images/team.jpg.jpeg"
              alt="Zagreb Assassins cricket team"
              loading="lazy"
            />
            <div className="featureImageOverlay" />
            <div className="featureImageCaption">
              <span>THE PEOPLE BEHIND THE GAME</span>
              <span>ZA / 001</span>
            </div>
          </div>
        </section>

        {/* HISTORY */}
        <section className="history section" id="history">
          <div className="sectionTopline">
            <span className="sectionNumber">02 / OUR JOURNEY</span>
            <span className="sectionRule" />
            <span className="sectionLocation">BUILT TOGETHER</span>
          </div>

          <div className="historyHeading">
            <div>
              <p className="redLabel">EVERY SEASON MATTERS</p>
              <h2 className="displayHeading">
                OUR STORY.
                <br />
                <span>OUR LEGACY.</span>
              </h2>
            </div>
            <p>
              Every match leaves a memory. Every challenge makes us better.
              This is our journey, and the next chapter is still being written.
            </p>
          </div>

          <div className="timeline">
            {milestones.map((item, index) => (
              <article
                className="timelineItem"
                key={`${item.year}-${item.title}`}
              >
                <span className="timelineIndex">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="timelineYear">{item.year}</span>
                <div className="timelineContent">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="timelineArrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* GROUND */}
        <section className="ground section" id="ground">
          <div className="sectionTopline">
            <span className="sectionNumber">03 / OUR HOME</span>
            <span className="sectionRule" />
            <span className="sectionLocation">MATCH DAY</span>
          </div>

          <div className="groundGrid">
            <div className="groundText">
              <p className="redLabel">WHERE WE PLAY</p>
              <h2 className="displayHeading">
                OUR HOME.
                <br />
                <span>OUR GROUND.</span>
              </h2>
              <p className="bodyCopy">
                The place where we train, compete, share the game and make
                memories together.
              </p>

              <div className="groundDetails">
                <div>
                  <span>GROUND</span>
                  <strong>Mladost Cricket Ground</strong>
                </div>
                <div>
                  <span>LOCATION</span>
                  <strong>Zagreb, Croatia</strong>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/itNj4GVd9uFePYSu7"
                target="_blank"
                rel="noreferrer"
                className="darkButton"
              >
                OPEN GOOGLE MAPS <span>↗</span>
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/itNj4GVd9uFePYSu7"
              target="_blank"
              rel="noreferrer"
              className="groundPhoto"
              aria-label="Find Mladost Cricket Ground on Google Maps"
            >
              <img
                src="/images/ground.png"
                alt="Mladost Cricket Ground, Zagreb"
                loading="lazy"
              />
              <span className="groundPhotoLabel">
                <span>OUR HOME</span>
                <strong>ZAGREB, CROATIA ↗</strong>
              </span>
            </a>
          </div>
        </section>

        {/* GALLERY: OPENS THE UPLOADED MEDIA GALLERY */}
        <section className="gallery section" id="gallery">
          <div className="sectionTopline">
            <span className="sectionNumber">04 / THE MOMENTS</span>
            <span className="sectionRule" />
            <span className="sectionLocation">OFF THE PITCH</span>
          </div>

          <div className="galleryHeading">
            <div>
              <p className="redLabel">PEOPLE. MATCHES. MEMORIES.</p>
              <h2 className="displayHeading">
                LIFE THROUGH
                <br />
                <span>OUR LENS.</span>
              </h2>
            </div>

            <a href="/gallery" className="darkButton">
              VIEW ALL PHOTOS <span>↗</span>
            </a>
          </div>

          <div className="galleryGrid">
            <a
              href="/gallery"
              className="galleryPhoto galleryPhotoLarge"
            >
              <img
                src="/images/team.jpg.jpeg"
                alt="Zagreb Assassins team"
                loading="lazy"
              />
              <span className="galleryOverlay">
                <span>01 / THE TEAM</span>
                <strong>UNITED BY CRICKET</strong>
                <i>↗</i>
              </span>
            </a>

            <a href="/gallery" className="galleryPhoto">
              <img
                src="/images/ground.png"
                alt="Cricket ground in Zagreb"
                loading="lazy"
              />
              <span className="galleryOverlay">
                <span>02 / OUR HOME</span>
                <strong>MATCH DAY</strong>
                <i>↗</i>
              </span>
            </a>
          </div>

          <div className="galleryFooter">
            <span>MORE MOMENTS. MORE MEMORIES.</span>
            <a href="/gallery">
              VIEW ALL UPLOADED PHOTOS &amp; VIDEOS ↗
            </a>
          </div>
        </section>

        {/* JOIN THE CLUB */}
        <section className="join section" id="join">
          <div className="joinBackdrop">ZA</div>

          <div className="sectionTopline">
            <span className="sectionNumber">05 / YOUR NEXT CHAPTER</span>
            <span className="sectionRule" />
            <span className="sectionLocation">NEW PLAYERS WELCOME</span>
          </div>

          <div className="joinGrid">
            <div className="joinIntro">
              <p className="joinEyebrow">YOUR MOMENT STARTS HERE</p>
              <h2 className="displayHeading">
                READY
                <br />
                TO <span>PLAY?</span>
              </h2>
              <p>
                Want to play cricket in Zagreb? Whether you have years of
                experience or are looking to get involved, introduce yourself
                to the team.
              </p>

              <div className="joinPerks">
                <span><i>01</i> TEAM SPIRIT</span>
                <span><i>02</i> TRAINING &amp; DEVELOPMENT</span>
                <span><i>03</i> CRICKET COMMUNITY</span>
              </div>
            </div>

            <form
              className="joinForm"
              action="https://formspree.io/f/xppqzzdd"
              method="POST"
            >
              <div className="formHeader">
                <div>
                  <span className="formKicker">ZAGREB ASSASSINS CC</span>
                  <h3>LET&apos;S CONNECT.</h3>
                </div>
                <span className="formIcon">↗</span>
              </div>

              <p className="formDescription">
                Tell us a little about yourself. We would love to hear from
                you.
              </p>

              <label htmlFor="name">YOUR NAME *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full name"
                autoComplete="name"
                required
              />

              <label htmlFor="email">EMAIL ADDRESS *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />

              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your contact number"
                autoComplete="tel"
              />

              <label htmlFor="experience">CRICKET EXPERIENCE</label>
              <select id="experience" name="experience" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="Experienced player">Experienced player</option>
                <option value="Some experience">Some experience</option>
                <option value="Beginner">Beginner</option>
                <option value="Interested in the club">
                  Interested in the club
                </option>
              </select>

              <label htmlFor="message">MESSAGE *</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us about yourself..."
                required
              />

              <button type="submit" className="formSubmit">
                SEND YOUR MESSAGE <span>↗</span>
              </button>

              <p className="formNote">
                Your details will be submitted through our contact form.
              </p>
            </form>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="sectionTopline">
            <span className="sectionNumber">06 / GET IN TOUCH</span>
            <span className="sectionRule" />
            <span className="sectionLocation">ZAGREB, CROATIA</span>
          </div>

          <div className="contactGrid">
            <div>
              <p className="redLabel">LET&apos;S TALK CRICKET</p>
              <h2 className="displayHeading">
                SAY
                <br />
                <span>HELLO.</span>
              </h2>
              <p className="bodyCopy">
                Questions about joining the club, cricket or collaboration? Get
                in touch with us.
              </p>
            </div>

            <div className="contactInfo">
              <a
                href="mailto:zagrebassassins@gmail.com"
                className="contactRow"
              >
                <span>EMAIL US</span>
                <strong>zagrebassassins@gmail.com</strong>
                <i>↗</i>
              </a>

              <a href="tel:+385917271658" className="contactRow">
                <span>CALL US</span>
                <strong>+385 91 727 1658</strong>
                <i>↗</i>
              </a>

              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="contactRow"
              >
                <span>FOLLOW THE JOURNEY</span>
                <strong>Instagram</strong>
                <i>↗</i>
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="contactRow"
              >
                <span>JOIN THE COMMUNITY</span>
                <strong>WhatsApp</strong>
                <i>↗</i>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <a href="#home" className="footerBrand">
            <img src="/images/logo.png.jpeg" alt="" />
            <span>
              ZAGREB <strong>ASSASSINS</strong>
              <small>CRICKET CLUB · CROATIA</small>
            </span>
          </a>

          <p className="footerMotto">
            BUILT BY PASSION. UNITED BY CRICKET.
          </p>

          <div className="footerBottom">
            <span>
              © {new Date().getFullYear()} Zagreb Assassins Cricket Club
            </span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        :root {
          --black: #090a0b;
          --dark: #111315;
          --paper: #f2f0ea;
          --white: #fff;
          --red: #ed2939;
          --muted: #a3a5a7;
          --line: rgba(255, 255, 255, 0.15);
          --max: 1440px;
        }

        * { box-sizing: border-box; }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 85px;
        }

        body {
          margin: 0;
          background: var(--paper);
          color: var(--black);
          font-family: Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        a { color: inherit; text-decoration: none; }

        button, input, textarea, select { font: inherit; }
        img { max-width: 100%; }
        button, a { -webkit-tap-highlight-color: transparent; }

        ::selection { background: var(--red); color: white; }

        .navbar {
          position: absolute;
          inset: 0 0 auto;
          z-index: 30;
          display: flex;
          min-height: 88px;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 15px 6%;
          border-bottom: 1px solid rgba(255,255,255,.17);
          color: white;
        }

        .brand, .footerBrand {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .brandLogo { width: 49px; height: 49px; object-fit: contain; }

        .brandWords, .footerBrand > span {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .brandWords strong, .footerBrand strong { color: var(--red); }

        .brandWords small, .footerBrand small {
          display: block;
          margin-top: 5px;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: clamp(13px, 2.2vw, 30px);
        }

        .navLinks a {
          padding: 10px 0;
          color: #ededed;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.1px;
          transition: color .2s ease;
        }

        .navLinks a:hover { color: var(--red); }

        .menuToggle {
          display: none;
          padding: 8px;
          border: 0;
          background: transparent;
          color: white;
          font-size: 27px;
          cursor: pointer;
        }

        .hero {
          position: relative;
          display: flex;
          min-height: max(700px, 100svh);
          align-items: center;
          justify-content: center;
          overflow: hidden;
          isolation: isolate;
          background: #101112;
          color: white;
        }

        .heroVideo, .heroShade, .heroGrain {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .heroVideo { z-index: -3; object-fit: cover; object-position: center; }

        .heroShade {
          z-index: -2;
          background:
            radial-gradient(ellipse at 70% 42%, rgba(10,10,10,.05), rgba(0,0,0,.4) 60%),
            linear-gradient(90deg, rgba(0,0,0,.88), rgba(0,0,0,.55) 56%, rgba(0,0,0,.36)),
            linear-gradient(0deg, rgba(0,0,0,.72), transparent 36%, rgba(0,0,0,.3));
        }

        .heroGrain {
          z-index: -1;
          pointer-events: none;
          opacity: .12;
          background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,.08) 4px);
        }

        .heroContent {
          position: relative;
          width: min(1100px, 100%);
          padding: 125px 7% 115px;
          animation: heroEnter 1s ease both;
        }

        .heroLogoWrap {
          display: flex;
          width: 118px;
          height: 118px;
          align-items: center;
          justify-content: center;
          margin-bottom: 26px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 50%;
          background: rgba(0,0,0,.3);
          box-shadow: 0 10px 50px rgba(0,0,0,.25);
        }

        .heroLogo {
          width: 90%;
          height: 90%;
          object-fit: contain;
          animation: logoFloat 4s ease-in-out infinite;
        }

        .heroEyebrow, .redLabel {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 20px;
          color: var(--red);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2.5px;
        }

        .liveDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--red);
          box-shadow: 0 0 12px rgba(237,41,57,.8);
        }

        .heroTitle {
          margin: 0;
          font-size: clamp(55px, 9vw, 116px);
          font-weight: 950;
          line-height: .88;
          letter-spacing: -5px;
        }

        .heroTitle span { color: var(--red); }

        .heroSubline {
          margin: 22px 0 31px;
          color: #e1e1e1;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .heroSubline span { padding: 0 7px; color: var(--red); }

        .heroCta {
          position: relative;
          display: inline-flex;
          min-width: 224px;
          min-height: 59px;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 21px;
          background: var(--red);
          color: white;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          transition: background .25s, transform .25s;
        }

        .heroCta:hover { transform: translateY(-3px); background: #c8192a; }
        .ctaArrow { font-size: 21px; transition: transform .25s; }
        .heroCta:hover .ctaArrow { transform: translate(3px,-3px); }

        .batStage {
          position: absolute;
          right: 9%;
          bottom: 9%;
          width: 185px;
          height: 330px;
          pointer-events: none;
          transform: rotate(-8deg);
        }

        .cricketBat {
          position: absolute;
          top: 20px;
          left: 62px;
          width: 65px;
          height: 250px;
          transform-origin: 50% 18%;
          animation: batSwing 3.2s ease-in-out infinite;
        }

        .batHandle {
          position: absolute;
          top: 0;
          left: 23px;
          width: 19px;
          height: 68px;
          border: 2px solid #b8a18a;
          border-radius: 5px 5px 2px 2px;
          background: repeating-linear-gradient(0deg, #242424 0, #242424 4px, #dad2c6 5px, #dad2c6 6px);
        }

        .batNeck {
          position: absolute;
          top: 62px;
          left: 18px;
          width: 29px;
          height: 23px;
          background: linear-gradient(90deg, #977047, #f0d5a2, #9a754c);
          clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
        }

        .batBlade {
          position: absolute;
          top: 78px;
          left: 2px;
          width: 61px;
          height: 164px;
          overflow: hidden;
          border: 1px solid #b18b58;
          border-radius: 8px 8px 20px 20px;
          background: linear-gradient(90deg, #936c3d, #e7c28a 25%, #f3dbad 52%, #c99a5d 82%, #855e35);
          box-shadow: 5px 9px 22px rgba(0,0,0,.3);
        }

        .batSpine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 48%;
          width: 7px;
          background: rgba(255,245,220,.32);
        }

        .batMark {
          position: absolute;
          top: 62px;
          left: 0;
          width: 100%;
          color: #342416;
          text-align: center;
          font-size: 18px;
          font-weight: 950;
          letter-spacing: -2px;
        }

        .batShadow {
          position: absolute;
          right: 0;
          bottom: 24px;
          left: 0;
          height: 24px;
          border-radius: 50%;
          background: rgba(0,0,0,.45);
          filter: blur(10px);
          animation: shadowPulse 3.2s ease-in-out infinite;
        }

        .batBall {
          position: absolute;
          top: 130px;
          left: 5px;
          width: 22px;
          height: 22px;
          border: 2px dashed rgba(255,255,255,.75);
          border-radius: 50%;
          background: var(--red);
          box-shadow: 0 0 24px rgba(237,41,57,.5);
          animation: ballFlight 3.2s ease-in-out infinite;
        }

        .heroBottom {
          position: absolute;
          right: 6%;
          bottom: 26px;
          left: 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 17px;
          border-top: 1px solid rgba(255,255,255,.25);
          color: #d5d5d5;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .heroBottom i { padding: 0 5px; color: var(--red); font-style: normal; }
        .heroBottom a:hover { color: var(--red); }
        .heroBottom a span { padding-left: 10px; color: var(--red); font-size: 15px; }

        .heroSideLabel {
          position: absolute;
          top: 50%;
          right: 18px;
          color: rgba(255,255,255,.55);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 3px;
          writing-mode: vertical-rl;
          transform: translateY(-50%);
        }

        .section { padding: 110px max(7%, calc((100% - var(--max)) / 2)); }

        .sectionTopline {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 60px;
        }

        .sectionNumber, .sectionLocation {
          flex-shrink: 0;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.7px;
        }

        .sectionNumber { color: var(--red); }
        .sectionLocation { color: #777; }
        .sectionRule { width: 100%; height: 1px; background: #d6d2c9; }

        .displayHeading {
          margin: 0;
          font-size: clamp(43px, 6vw, 79px);
          font-weight: 950;
          line-height: .96;
          letter-spacing: -3.5px;
        }

        .displayHeading span { color: var(--red); }
        .intro { background: var(--paper); }

        .introGrid, .historyHeading, .groundGrid, .galleryHeading, .joinGrid, .contactGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          gap: 65px;
        }

        .introCopy { padding-top: 12px; }

        .largeCopy {
          margin: 0 0 18px;
          font-size: clamp(21px, 2.5vw, 30px);
          font-weight: 800;
          line-height: 1.35;
          letter-spacing: -.8px;
        }

        .introCopy > p:not(.largeCopy), .bodyCopy {
          color: #606060;
          font-size: 14px;
          line-height: 1.95;
        }

        .underlinedLink {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          margin-top: 17px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--red);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .underlinedLink span { color: var(--red); font-size: 16px; }

        .featureImage {
          position: relative;
          height: clamp(320px, 48vw, 570px);
          margin-top: 70px;
          overflow: hidden;
          background: #c8c5bd;
        }

        .featureImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s;
        }

        .featureImage:hover img { transform: scale(1.025); }

        .featureImageOverlay {
          position: absolute;
          inset: 35% 0 0;
          background: linear-gradient(transparent, rgba(0,0,0,.65));
        }

        .featureImageCaption {
          position: absolute;
          right: 23px;
          bottom: 23px;
          left: 23px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: white;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .history { background: var(--black); color: white; }
        .history .sectionRule { background: var(--line); }
        .history .sectionLocation { color: #a6a6a6; }
        .historyHeading { align-items: end; margin-bottom: 70px; }

        .historyHeading > p {
          max-width: 410px;
          margin: 0 0 5px;
          color: #aaa;
          font-size: 14px;
          line-height: 1.9;
        }

        .timeline { border-top: 1px solid var(--line); }

        .timelineItem {
          display: grid;
          grid-template-columns: 45px 85px minmax(0,1fr) 25px;
          align-items: center;
          gap: 20px;
          padding: 26px 5px;
          border-bottom: 1px solid var(--line);
          transition: background .25s, padding .25s;
        }

        .timelineItem:hover {
          padding-right: 15px;
          padding-left: 15px;
          background: rgba(255,255,255,.025);
        }

        .timelineIndex { color: var(--red); font-size: 10px; font-weight: 900; }
        .timelineYear { color: #aaa; font-size: 12px; font-weight: 800; }
        .timelineContent h3 { margin: 0 0 8px; font-size: 15px; letter-spacing: .8px; }
        .timelineContent p { max-width: 600px; margin: 0; color: #999; font-size: 12px; line-height: 1.8; }
        .timelineArrow { color: var(--red); font-size: 19px; transition: transform .2s; }
        .timelineItem:hover .timelineArrow { transform: translate(3px,-3px); }

        .ground { background: #e9e6de; }
        .groundGrid { align-items: center; gap: 70px; }
        .groundText .bodyCopy { max-width: 430px; margin: 25px 0; }
        .groundDetails { margin: 25px 0; border-top: 1px solid #d0ccc3; }

        .groundDetails div {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 17px 0;
          border-bottom: 1px solid #d0ccc3;
        }

        .groundDetails span { color: #777; font-size: 9px; font-weight: 900; letter-spacing: 1.6px; }
        .groundDetails strong { font-size: 14px; }

        .darkButton {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 19px;
          background: var(--black);
          color: white;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.2px;
          transition: background .2s, transform .2s;
        }

        .darkButton:hover { transform: translateY(-2px); background: var(--red); }
        .darkButton span { font-size: 17px; }

        .groundPhoto {
          position: relative;
          display: block;
          min-height: 440px;
          overflow: hidden;
          background: #c8c5bd;
        }

        .groundPhoto img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s;
        }

        .groundPhoto:hover img { transform: scale(1.04); }

        .groundPhotoLabel {
          position: absolute;
          right: 16px;
          bottom: 16px;
          left: 16px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 17px;
          background: var(--red);
          color: white;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .gallery { background: var(--paper); }
        .galleryHeading { align-items: end; margin-bottom: 45px; }
        .galleryHeading .darkButton { justify-self: end; }

        .galleryGrid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 16px;
        }

        .galleryPhoto {
          position: relative;
          display: block;
          height: 370px;
          overflow: hidden;
          background: #ccc;
        }

        .galleryPhoto img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s;
        }

        .galleryPhoto:hover img { transform: scale(1.045); }

        .galleryOverlay {
          position: absolute;
          inset: 40% 0 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: end;
          padding: 25px;
          background: linear-gradient(transparent, rgba(0,0,0,.85));
          color: white;
        }

        .galleryOverlay > span {
          margin-bottom: 10px;
          color: #ddd;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.7px;
        }

        .galleryOverlay strong {
          padding-right: 30px;
          font-size: clamp(19px, 2.6vw, 28px);
          letter-spacing: -.5px;
        }

        .galleryOverlay i {
          position: absolute;
          right: 24px;
          bottom: 24px;
          color: var(--red);
          font-size: 22px;
          font-style: normal;
        }

        .galleryFooter {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #d4d0c7;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .galleryFooter > span { color: #777; }
        .galleryFooter a:hover { color: var(--red); }

        .join {
          position: relative;
          overflow: hidden;
          background: var(--red);
          color: white;
          isolation: isolate;
        }

        .join .sectionRule { background: rgba(255,255,255,.32); }
        .join .sectionNumber, .join .sectionLocation { color: white; }

        .joinBackdrop {
          position: absolute;
          z-index: -1;
          top: 100px;
          right: -30px;
          color: rgba(0,0,0,.045);
          font-size: clamp(250px,45vw,650px);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -30px;
          pointer-events: none;
        }

        .joinGrid { align-items: start; gap: 75px; }
        .joinEyebrow { margin: 0 0 22px; font-size: 10px; font-weight: 900; letter-spacing: 2px; }

        .joinIntro > p:not(.joinEyebrow) {
          max-width: 420px;
          margin: 25px 0;
          color: #ffe5e7;
          font-size: 14px;
          line-height: 1.9;
        }

        .join .displayHeading span { color: var(--black); }
        .joinPerks { display: flex; flex-direction: column; margin-top: 35px; }

        .joinPerks span {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 17px 0;
          border-bottom: 1px solid rgba(255,255,255,.3);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .joinPerks i { color: #ffe0e2; font-size: 10px; font-style: normal; }

        .joinForm {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: clamp(23px,4vw,40px);
          background: var(--black);
          color: white;
          box-shadow: 0 20px 60px rgba(0,0,0,.14);
        }

        .formHeader { display: flex; align-items: start; justify-content: space-between; gap: 15px; }
        .formKicker { color: var(--red); font-size: 9px; font-weight: 900; letter-spacing: 1.5px; }
        .formHeader h3 { margin: 12px 0 0; font-size: 26px; font-weight: 950; letter-spacing: -.8px; }
        .formIcon { color: var(--red); font-size: 25px; }
        .formDescription { margin: 13px 0 24px; color: #aaa; font-size: 12px; line-height: 1.8; }

        .joinForm label {
          margin: 17px 0 8px;
          color: #ddd;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .joinForm input, .joinForm textarea, .joinForm select {
          width: 100%;
          min-height: 46px;
          padding: 12px;
          border: 1px solid #383838;
          border-radius: 0;
          outline: none;
          background: #171819;
          color: white;
          font-size: 12px;
        }

        .joinForm input:focus, .joinForm textarea:focus, .joinForm select:focus { border-color: var(--red); }
        .joinForm input::placeholder, .joinForm textarea::placeholder { color: #777; }
        .joinForm select:invalid { color: #777; }
        .joinForm textarea { resize: vertical; }

        .formSubmit {
          display: flex;
          min-height: 52px;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 24px;
          padding: 0 16px;
          border: 0;
          background: var(--red);
          color: white;
          cursor: pointer;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
          transition: background .2s;
        }

        .formSubmit:hover { background: #c8192a; }
        .formSubmit span { font-size: 19px; }
        .formNote { margin: 14px 0 0; color: #888; font-size: 10px; line-height: 1.7; }

        .contact { background: var(--black); color: white; }
        .contact .sectionRule { background: var(--line); }
        .contact .sectionLocation { color: #aaa; }
        .contactGrid { align-items: start; gap: 75px; }
        .contact .bodyCopy { max-width: 420px; margin-top: 25px; color: #aaa; }
        .contactInfo { border-top: 1px solid var(--line); }

        .contactRow {
          display: grid;
          grid-template-columns: 1fr 25px;
          gap: 10px;
          align-items: center;
          padding: 23px 0;
          border-bottom: 1px solid var(--line);
        }

        .contactRow > span {
          grid-column: 1 / -1;
          color: var(--red);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.7px;
        }

        .contactRow strong {
          overflow-wrap: anywhere;
          font-size: clamp(13px,1.7vw,17px);
          font-weight: 700;
        }

        .contactRow i { color: var(--red); font-size: 20px; font-style: normal; transition: transform .2s; }
        .contactRow:hover i { transform: translate(3px,-3px); }
        .contactRow:hover strong { color: #ddd; }

        .footer { padding: 42px 7% 20px; background: #050505; color: white; }
        .footerBrand img { width: 47px; height: 47px; object-fit: contain; }
        .footerMotto { margin: 28px 0; color: #aaa; font-size: 9px; font-weight: 800; letter-spacing: 2px; }

        .footerBottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding-top: 20px;
          border-top: 1px solid #282828;
          color: #888;
          font-size: 10px;
          line-height: 1.7;
        }

        .footerBottom a { color: white; font-weight: 900; letter-spacing: 1px; }
        .footerBottom a:hover { color: var(--red); }

        @keyframes heroEnter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes batSwing {
          0%, 100% { transform: rotate(-24deg); }
          40% { transform: rotate(10deg); }
          50% { transform: rotate(30deg); }
          65% { transform: rotate(-5deg); }
        }

        @keyframes ballFlight {
          0%, 10% { opacity: 0; transform: translate(-20px,55px) scale(.7); }
          20% { opacity: 1; }
          48% { opacity: 1; transform: translate(70px,-65px) scale(1); }
          70%, 100% { opacity: 0; transform: translate(140px,-100px) scale(.55); }
        }

        @keyframes shadowPulse {
          0%, 100% { transform: scaleX(.8); opacity: .5; }
          50% { transform: scaleX(1.1); opacity: .8; }
        }

        @media (max-width: 1050px) {
          .navbar { padding-right: 4%; padding-left: 4%; }
          .navLinks { gap: 13px; }
          .navLinks a { font-size: 8px; letter-spacing: .7px; }
          .brandWords { font-size: 11px; }
          .brandLogo { width: 42px; height: 42px; }
          .section { padding-right: 5%; padding-left: 5%; }
          .introGrid, .historyHeading, .groundGrid, .galleryHeading, .joinGrid, .contactGrid { gap: 35px; }
          .batStage { right: 4%; transform: scale(.8) rotate(-8deg); transform-origin: bottom right; }
        }

        @media (max-width: 720px) {
          html { scroll-padding-top: 72px; }
          .navbar { min-height: 72px; padding: 10px 5%; }
          .brand { gap: 9px; }
          .brandLogo { width: 42px; height: 42px; }
          .brandWords { font-size: 11px; letter-spacing: .8px; }
          .brandWords small { font-size: 7px; letter-spacing: 2px; }
          .menuToggle { display: block; }

          .navLinks {
            position: absolute;
            top: 71px;
            right: 0;
            left: 0;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 8px 6% 18px;
            border-bottom: 1px solid #333;
            background: #090a0b;
          }

          .navLinks.navOpen { display: flex; }
          .navLinks a { padding: 16px 0; border-bottom: 1px solid #252525; font-size: 10px; letter-spacing: 1.2px; }
          .hero { min-height: 100svh; }

          .heroShade {
            background:
              linear-gradient(90deg, rgba(0,0,0,.82), rgba(0,0,0,.48)),
              linear-gradient(0deg, rgba(0,0,0,.82), transparent 65%);
          }

          .heroContent { padding: 112px 6% 110px; }
          .heroLogoWrap { width: 85px; height: 85px; margin-bottom: 24px; }
          .heroTitle { font-size: clamp(48px,12vw,78px); letter-spacing: -2.8px; }
          .heroEyebrow { font-size: 9px; letter-spacing: 1.5px; }
          .heroSubline { max-width: 250px; font-size: 8px; line-height: 1.9; letter-spacing: 1.7px; }
          .heroCta { min-width: 205px; min-height: 55px; }
          .batStage { right: 1%; bottom: 13%; opacity: .78; transform: scale(.63) rotate(-8deg); transform-origin: bottom right; }

          .heroBottom {
            right: 5%;
            bottom: 20px;
            left: 5%;
            flex-direction: column;
            align-items: flex-start;
            gap: 11px;
            font-size: 8px;
            letter-spacing: 1px;
          }

          .heroSideLabel { display: none; }
          .section { padding: 72px 6%; }
          .sectionTopline { gap: 10px; margin-bottom: 40px; }
          .sectionNumber, .sectionLocation { font-size: 7px; letter-spacing: .8px; }
          .displayHeading { font-size: clamp(40px,10.5vw,65px); letter-spacing: -2px; }

          .introGrid, .historyHeading, .groundGrid, .galleryHeading, .joinGrid, .contactGrid {
            grid-template-columns: 1fr;
            gap: 27px;
          }

          .introCopy { padding-top: 0; }
          .largeCopy { font-size: 23px; }
          .featureImage { height: 320px; margin-top: 35px; }
          .featureImageCaption { right: 14px; bottom: 14px; left: 14px; font-size: 7px; letter-spacing: 1px; }
          .historyHeading { margin-bottom: 38px; }

          .timelineItem {
            grid-template-columns: 24px 43px minmax(0,1fr) 16px;
            gap: 9px;
            padding: 22px 0;
          }

          .timelineIndex { font-size: 8px; }
          .timelineYear { font-size: 10px; }
          .timelineContent h3 { font-size: 11px; line-height: 1.5; }
          .timelineContent p { font-size: 11px; }
          .timelineArrow { font-size: 15px; }
          .groundGrid { gap: 35px; }
          .groundPhoto { min-height: 310px; }
          .groundPhotoLabel { right: 10px; bottom: 10px; left: 10px; padding: 13px; font-size: 8px; }
          .galleryHeading .darkButton { justify-self: start; }
          .galleryGrid { grid-template-columns: 1fr; gap: 12px; }
          .galleryPhoto { height: 290px; }
          .galleryFooter { flex-direction: column; gap: 13px; font-size: 8px; line-height: 1.7; }
          .joinBackdrop { top: 160px; right: -20px; font-size: 300px; }
          .joinGrid { gap: 40px; }
          .joinForm { padding: 24px 18px; }
          .formHeader h3 { font-size: 23px; }
          .contactGrid { gap: 35px; }
          .contactRow { padding: 20px 0; }
          .contactRow strong { font-size: 13px; }
          .footer { padding: 32px 6% 20px; }
          .footerBrand > span { font-size: 11px; }

          .footerBottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }
        }

        @media (max-width: 380px) {
          .brandWords { font-size: 10px; }
          .heroTitle { font-size: 45px; }
          .batStage { right: -10px; opacity: .58; transform: scale(.48) rotate(-8deg); transform-origin: bottom right; }
          .sectionLocation { display: none; }
          .sectionRule { display: block; }
          .timelineItem { grid-template-columns: 20px 37px minmax(0,1fr) 12px; gap: 7px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </>
  );
}
