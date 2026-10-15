
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <main>
        {/* NAVIGATION */}
        <header className="navbar">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img
              src="/images/logo.png.jpeg"
              alt="Zagreb Assassins Cricket Club"
              className="logo"
            />
            <span>
              ZAGREB <strong>ASSASSINS</strong>
              <small>CRICKET CLUB</small>
            </span>
          </a>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "navLinks open" : "navLinks"}>
            <a href="#home" onClick={closeMenu}>HOME</a>
            <a href="#history" onClick={closeMenu}>HISTORY</a>
            <a href="#ground" onClick={closeMenu}>GROUND</a>
            <a href="#gallery" onClick={closeMenu}>GALLERY</a>
            <a href="#join" onClick={closeMenu}>JOIN US</a>
            <a href="#support" onClick={closeMenu}>SUPPORT</a>
            <a href="#contact" onClick={closeMenu}>CONTACT</a>
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
            poster="/images/team.jpg.jpeg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="heroOverlay" />

          <div className="heroContent">
            <p className="eyebrow">ZAGREB · CROATIA</p>
            <h1>
              BUILT BY
              <br />
              <span>PASSION.</span>
              <br />
              UNITED BY CRICKET.
            </h1>
            <p className="heroDescription">
              More than a team. A community driven by cricket,
              commitment and the spirit of togetherness.
            </p>

            <div className="heroButtons">
              <a href="#join" className="button buttonLight">
                JOIN THE TEAM ↗
              </a>
              <a href="#history" className="button buttonOutline">
                OUR STORY
              </a>
            </div>

            <div className="heroBottom">
              <span>EST. ZAGREB, CROATIA</span>
              <span>CRICKET · COMMUNITY · PASSION</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="intro section">
          <div className="sectionLabel">
            <span>01</span> WHO WE ARE
          </div>

          <div className="introGrid">
            <h2>
              ONE CLUB.
              <br />
              <span>ONE FAMILY.</span>
            </h2>

            <div className="introText">
              <p>
                Zagreb Assassins is a cricket club built on teamwork,
                discipline, friendship and a shared love for the game.
              </p>
              <p>
                Based in Zagreb, Croatia, we bring people together
                through cricket, creating opportunities to play,
                improve and grow as a team.
              </p>
              <a href="#join" className="textLink">
                BECOME PART OF OUR STORY ↗
              </a>
            </div>
          </div>

          <div className="teamImageWrap">
            <img
              src="/images/team.jpg.jpeg"
              alt="Zagreb Assassins cricket team"
              className="teamImage"
            />
            <div className="imageCaption">
              <span>THE ASSASSINS</span>
              <span>ZAGREB, CROATIA</span>
            </div>
          </div>
        </section>

        {/* HISTORY */}
        <section className="history section" id="history">
          <div className="sectionLabel">
            <span>02</span> OUR JOURNEY
          </div>

          <div className="sectionHeading">
            <h2>
              MADE THROUGH
              <br />
              <span>THE GAME.</span>
            </h2>
            <p>
              Every season brings a new challenge, every match
              creates a memory, and every player becomes part of
              our journey.
            </p>
          </div>

          <div className="timeline">
            <article className="timelineItem">
              <span className="timelineYear">2023</span>
              <div className="timelineDot" />
              <div>
                <h3>ECS CHAMPIONS</h3>
                <p>
                  A memorable achievement that celebrated our
                  commitment, teamwork and determination.
                </p>
              </div>
            </article>

            <article className="timelineItem">
              <span className="timelineYear">2023</span>
              <div className="timelineDot" />
              <div>
                <h3>CROATIAN CUP WINNERS</h3>
                <p>
                  Another important milestone in the club’s
                  competitive journey.
                </p>
              </div>
            </article>

            <article className="timelineItem">
              <span className="timelineYear">2024</span>
              <div className="timelineDot" />
              <div>
                <h3>THE BEGINNING</h3>
                <p>
                  Building our foundations, strengthening our
                  identity and bringing our cricket community closer.
                </p>
              </div>
            </article>

            <article className="timelineItem">
              <span className="timelineYear">2025</span>
              <div className="timelineDot" />
              <div>
                <h3>GROWING STRONGER</h3>
                <p>
                  Continuing to develop our players, our team
                  spirit and our presence in Croatian cricket.
                </p>
              </div>
            </article>

            <article className="timelineItem">
              <span className="timelineYear">2026</span>
              <div className="timelineDot" />
              <div>
                <h3>THE NEXT CHAPTER</h3>
                <p>
                  New goals, fresh opportunities and another
                  chapter in the Zagreb Assassins story.
                </p>
              </div>
            </article>

            <article className="timelineItem">
              <span className="timelineYear">NEXT</span>
              <div className="timelineDot" />
              <div>
                <h3>OUR AMBITION</h3>
                <p>
                  Keep improving, welcome new talent and continue
                  representing our club with pride.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* GROUND */}
        <section className="ground section" id="ground">
          <div className="sectionLabel">
            <span>03</span> OUR HOME
          </div>

          <div className="groundGrid">
            <div>
              <p className="eyebrow">WHERE WE PLAY</p>
              <h2>
                OUR HOME
                <br />
                <span>GROUND.</span>
              </h2>
              <p className="groundDescription">
                Mladost Cricket Ground is our home for cricket,
                training, competition and community.
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
                className="button buttonDark"
              >
                OPEN GOOGLE MAPS ↗
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/itNj4GVd9uFePYSu7"
              target="_blank"
              rel="noreferrer"
              className="groundImageLink"
              aria-label="Open Mladost Cricket Ground in Google Maps"
            >
              <img
                src="/images/ground.png"
                alt="Mladost Cricket Ground in Zagreb"
                className="groundImage"
              />
              <span className="groundImageTag">
                OUR HOME · ZAGREB
              </span>
            </a>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery section" id="gallery">
          <div className="sectionLabel">
            <span>04</span> MOMENTS THAT MATTER
          </div>

          <div className="sectionHeading">
            <h2>
              LIFE THROUGH
              <br />
              <span>OUR LENS.</span>
            </h2>
            <p>
              The people, the matches and the memories that make
              Zagreb Assassins special.
            </p>
          </div>

          <div className="galleryGrid">
            <div className="galleryItem galleryLarge">
              <img
                src="/images/team.jpg.jpeg"
                alt="Zagreb Assassins team"
                loading="lazy"
              />
              <span>THE TEAM</span>
            </div>

            <div className="galleryItem">
              <img
                src="/images/ground.png"
                alt="Cricket ground"
                loading="lazy"
              />
              <span>OUR GROUND</span>
            </div>

            <a
              href="https://www.instagram.com/zagreb_assassins_cricket?stkn=MXg2em96andld2dobA=="
              target="_blank"
              rel="noreferrer"
              className="galleryCallout"
            >
              <span className="instagramSymbol">◎</span>
              <h3>MORE MOMENTS.</h3>
              <p>Follow our journey on Instagram.</p>
              <span className="textLink">VIEW INSTAGRAM ↗</span>
            </a>
          </div>
        </section>

        {/* JOIN US */}
        <section className="join section" id="join">
          <div className="sectionLabel">
            <span>05</span> YOUR NEXT CHAPTER
          </div>

          <div className="joinGrid">
            <div>
              <p className="eyebrow">READY TO PLAY?</p>
              <h2>
                YOUR GAME.
                <br />
                <span>YOUR TEAM.</span>
              </h2>
              <p className="joinDescription">
                Want to play cricket in Zagreb? Whether you are
                experienced or looking to get involved, contact
                us and introduce yourself.
              </p>

              <ul className="joinList">
                <li>Cricket and team spirit</li>
                <li>Training and development</li>
                <li>A welcoming cricket community</li>
              </ul>
            </div>

            <form
              className="joinForm"
              action="https://formspree.io/f/xppqzzdd"
              method="POST"
            >
              <h3>LET'S CONNECT.</h3>
              <p>Send us your details and we will be in touch.</p>

              <label htmlFor="name">YOUR NAME</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your contact number"
              />

              <label htmlFor="message">TELL US ABOUT YOURSELF</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your cricket experience or any questions..."
                required
              />

              <button type="submit" className="button buttonLight submitButton">
                SEND YOUR MESSAGE ↗
              </button>
            </form>
          </div>
        </section>

        {/* SUPPORT — BANK DETAILS REMOVED */}
        <section className="support section" id="support">
          <div className="sectionLabel">
            <span>06</span> STAND WITH THE TEAM
          </div>

          <div className="sectionHeading">
            <h2>
              EVERY CONTRIBUTION
              <br />
              <span>MAKES A DIFFERENCE.</span>
            </h2>
            <p>
              Support Zagreb Assassins by sharing our journey,
              connecting with the club and helping our cricket
              community grow.
            </p>
          </div>

          <div className="supportGrid">
            <article className="supportCard">
              <div className="cardTop">
                <span className="cardNumber">01</span>
                <span className="cardMark">↗</span>
              </div>
              <p className="cardLabel">FOLLOW OUR JOURNEY</p>
              <h3>Instagram</h3>
              <div className="cardLine" />
              <p>
                Follow our matches, team moments and club updates.
              </p>
              <a
                href="https://www.instagram.com/zagreb_assassins_cricket?stkn=MXg2em96andld2dobA=="
                target="_blank"
                rel="noreferrer"
                className="cardLink"
              >
                FOLLOW US ↗
              </a>
            </article>

            <article className="supportCard">
              <div className="cardTop">
                <span className="cardNumber">02</span>
                <span className="cardMark">↗</span>
              </div>
              <p className="cardLabel">JOIN THE COMMUNITY</p>
              <h3>WhatsApp</h3>
              <div className="cardLine" />
              <p>
                Connect with the community and learn more about
                getting involved with the club.
              </p>
              <a
                href="https://chat.whatsapp.com/ItcFiILa3B3LkTSkdpyTxY?s=sw&p=a&ilr=4&iam=2"
                target="_blank"
                rel="noreferrer"
                className="cardLink"
              >
                CONNECT WITH US ↗
              </a>
            </article>

            <article className="supportCard">
              <div className="cardTop">
                <span className="cardNumber">03</span>
                <span className="cardMark">↗</span>
              </div>
              <p className="cardLabel">GET IN TOUCH</p>
              <h3>Contact Us</h3>
              <div className="cardLine" />
              <p>
                Have a question, an idea or an opportunity to
                work together? We would love to hear from you.
              </p>
              <a href="#contact" className="cardLink">
                CONTACT THE CLUB ↗
              </a>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="sectionLabel">
            <span>07</span> SAY HELLO
          </div>

          <div className="contactGrid">
            <div>
              <p className="eyebrow">LET'S TALK CRICKET</p>
              <h2>
                LET'S
                <br />
                <span>CONNECT.</span>
              </h2>
              <p className="contactDescription">
                For enquiries about joining the team, cricket,
                collaboration or club activities, get in touch.
              </p>
            </div>

            <div className="contactDetails">
              <div className="contactRow">
                <span>EMAIL</span>
                <a href="mailto:zagrebassassins@gmail.com">
                  zagrebassassins@gmail.com
                </a>
              </div>

              <div className="contactRow">
                <span>PHONE</span>
                <a href="tel:+385917271658">
                  +385 91 727 1658
                </a>
              </div>

              <div className="contactRow">
                <span>LOCATION</span>
                <p>Zagreb, Croatia</p>
              </div>

              <div className="contactSocials">
                <a
                  href="https://www.instagram.com/zagreb_assassins_cricket?stkn=MXg2em96andld2dobA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  INSTAGRAM ↗
                </a>
                <a
                  href="https://chat.whatsapp.com/ItcFiILa3B3LkTSkdpyTxY?s=sw&p=a&ilr=4&iam=2"
                  target="_blank"
                  rel="noreferrer"
                >
                  WHATSAPP ↗
                </a>
              </div>
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

          <p>
            BUILT BY PASSION. UNITED BY CRICKET.
          </p>

          <div className="footerBottom">
            <span>© {new Date().getFullYear()} Zagreb Assassins Cricket Club</span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        :root {
          --black: #101010;
          --dark: #171717;
          --paper: #f3f1eb;
          --white: #ffffff;
          --red: #e32b35;
          --muted: #a6a6a6;
          --line: rgba(255, 255, 255, 0.16);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 82px;
        }

        body {
          margin: 0;
          background: var(--paper);
          color: var(--black);
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input,
        textarea {
          font: inherit;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        .navbar {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 20;
          display: flex;
          width: 100%;
          min-height: 86px;
          align-items: center;
          justify-content: space-between;
          padding: 15px 6%;
          color: white;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        }

        .brand,
        .footerBrand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .brand .logo {
          width: 52px;
          height: 52px;
          object-fit: contain;
        }

        .brand strong,
        .footerBrand strong {
          color: var(--red);
        }

        .brand small,
        .footerBrand small {
          display: block;
          margin-top: 5px;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 3px;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .navLinks a {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.3px;
          transition: color 0.2s ease;
        }

        .navLinks a:hover {
          color: var(--red);
        }

        .menuButton {
          display: none;
          color: white;
          background: transparent;
          border: 0;
          font-size: 28px;
          cursor: pointer;
        }

        .hero {
          position: relative;
          display: flex;
          min-height: 720px;
          min-height: min(850px, 100svh);
          align-items: center;
          overflow: hidden;
          background: #161616;
          color: white;
        }

        .heroVideo,
        .heroOverlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .heroVideo {
          object-fit: cover;
        }

        .heroOverlay {
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.32)),
            linear-gradient(0deg, rgba(0, 0, 0, 0.65), transparent 60%);
        }

        .heroContent {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 140px 6% 65px;
        }

        .eyebrow {
          margin: 0 0 22px;
          color: var(--red);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .hero h1,
        .section h2 {
          margin: 0;
          font-size: clamp(42px, 7.5vw, 94px);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -3px;
        }

        .hero h1 span,
        .section h2 span {
          color: var(--red);
        }

        .heroDescription {
          max-width: 490px;
          margin: 25px 0 30px;
          color: #dddddd;
          font-size: 16px;
          line-height: 1.8;
        }

        .heroButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          padding: 0 22px;
          border: 1px solid transparent;
          cursor: pointer;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .buttonLight {
          background: var(--red);
          color: white;
        }

        .buttonLight:hover {
          background: #bf1e28;
        }

        .buttonOutline {
          border-color: rgba(255, 255, 255, 0.6);
          color: white;
          background: transparent;
        }

        .buttonOutline:hover {
          border-color: white;
          background: white;
          color: var(--black);
        }

        .buttonDark {
          background: var(--black);
          color: white;
        }

        .buttonDark:hover {
          background: var(--red);
        }

        .heroBottom {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-top: 90px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.28);
          color: #d4d4d4;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .section {
          padding: 100px 7%;
        }

        .sectionLabel {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 55px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .sectionLabel span {
          color: var(--red);
        }

        .introGrid,
        .sectionHeading,
        .groundGrid,
        .joinGrid,
        .contactGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .section h2 {
          font-size: clamp(38px, 5.7vw, 72px);
          letter-spacing: -2.5px;
        }

        .introText p,
        .sectionHeading > p,
        .groundDescription,
        .joinDescription,
        .contactDescription {
          margin: 0 0 18px;
          color: #555;
          font-size: 15px;
          line-height: 1.9;
        }

        .textLink {
          display: inline-block;
          margin-top: 10px;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--red);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .teamImageWrap {
          position: relative;
          height: 480px;
          margin-top: 65px;
          overflow: hidden;
          background: #d5d1c8;
        }

        .teamImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .teamImageWrap:hover .teamImage {
          transform: scale(1.025);
        }

        .imageCaption {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding: 20px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .history {
          background: var(--black);
          color: white;
        }

        .history .sectionHeading {
          margin-bottom: 65px;
        }

        .history .sectionHeading > p {
          color: #b5b5b5;
        }

        .timeline {
          max-width: 900px;
          margin-left: auto;
        }

        .timelineItem {
          display: grid;
          grid-template-columns: 90px 18px 1fr;
          gap: 22px;
          padding: 25px 0;
          border-top: 1px solid var(--line);
        }

        .timelineYear {
          padding-top: 2px;
          color: var(--red);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .timelineDot {
          width: 10px;
          height: 10px;
          margin-top: 4px;
          border: 2px solid var(--red);
          border-radius: 50%;
        }

        .timelineItem h3 {
          margin: 0 0 10px;
          font-size: 17px;
          letter-spacing: 1px;
        }

        .timelineItem p {
          max-width: 560px;
          margin: 0;
          color: #aaa;
          font-size: 13px;
          line-height: 1.8;
        }

        .ground {
          background: var(--paper);
        }

        .groundGrid {
          align-items: center;
        }

        .groundDescription {
          max-width: 430px;
          margin-top: 25px;
        }

        .groundDetails {
          margin: 28px 0;
          border-top: 1px solid #d4d0c7;
        }

        .groundDetails div {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 17px 0;
          border-bottom: 1px solid #d4d0c7;
        }

        .groundDetails span {
          color: #777;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .groundDetails strong {
          font-size: 14px;
        }

        .groundImageLink {
          position: relative;
          display: block;
          min-height: 400px;
          overflow: hidden;
          background: #ddd;
        }

        .groundImage {
          display: block;
          width: 100%;
          height: 450px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .groundImageLink:hover .groundImage {
          transform: scale(1.03);
        }

        .groundImageTag {
          position: absolute;
          right: 15px;
          bottom: 15px;
          padding: 12px 15px;
          background: var(--red);
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .gallery {
          background: #e7e4dc;
        }

        .gallery .sectionHeading {
          margin-bottom: 45px;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 16px;
        }

        .galleryItem {
          position: relative;
          min-height: 270px;
          overflow: hidden;
          background: #ccc;
        }

        .galleryItem img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 270px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .galleryItem:hover img {
          transform: scale(1.04);
        }

        .galleryItem > span {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          padding: 25px 15px 15px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
          color: white;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .galleryCallout {
          display: flex;
          min-height: 270px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 25px;
          background: var(--black);
          color: white;
        }

        .instagramSymbol {
          color: var(--red);
          font-size: 34px;
        }

        .galleryCallout h3 {
          margin: 20px 0 8px;
          font-size: 19px;
          letter-spacing: 1px;
        }

        .galleryCallout p {
          color: #bbb;
          font-size: 13px;
          line-height: 1.7;
        }

        .join {
          background: var(--red);
          color: white;
        }

        .join .sectionLabel span,
        .join .eyebrow {
          color: white;
        }

        .joinDescription {
          max-width: 460px;
          margin-top: 25px;
          color: #ffe6e6;
        }

        .joinList {
          display: grid;
          gap: 15px;
          margin: 30px 0 0;
          padding: 0;
          list-style: none;
        }

        .joinList li {
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          font-size: 13px;
        }

        .joinList li::before {
          content: "↗";
          margin-right: 12px;
          font-weight: 800;
        }

        .joinForm {
          display: flex;
          flex-direction: column;
          padding: 35px;
          background: var(--black);
          color: white;
        }

        .joinForm h3 {
          margin: 0;
          font-size: 25px;
          letter-spacing: 1px;
        }

        .joinForm > p {
          margin: 10px 0 25px;
          color: #aaa;
          font-size: 13px;
          line-height: 1.7;
        }

        .joinForm label {
          margin: 16px 0 8px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .joinForm input,
        .joinForm textarea {
          width: 100%;
          padding: 13px 12px;
          border: 1px solid #444;
          border-radius: 0;
          outline: none;
          background: #202020;
          color: white;
          font-size: 13px;
        }

        .joinForm input:focus,
        .joinForm textarea:focus {
          border-color: var(--red);
        }

        .joinForm textarea {
          resize: vertical;
        }

        .submitButton {
          width: 100%;
          margin-top: 25px;
        }

        .support {
          background: var(--paper);
        }

        .support .sectionHeading {
          margin-bottom: 45px;
        }

        .supportGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          align-items: stretch;
        }

        .supportCard {
          display: flex;
          min-height: 320px;
          flex-direction: column;
          align-items: flex-start;
          padding: 25px;
          border: 1px solid #d5d1c8;
          background: #f8f7f3;
          transition:
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .supportCard:hover {
          transform: translateY(-4px);
          border-color: var(--red);
        }

        .cardTop {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
        }

        .cardNumber {
          color: var(--red);
          font-size: 12px;
          font-weight: 800;
        }

        .cardMark {
          font-size: 19px;
        }

        .cardLabel {
          margin: 32px 0 10px;
          color: #777;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .supportCard h3 {
          margin: 0;
          font-size: 23px;
        }

        .cardLine {
          width: 40px;
          height: 3px;
          margin: 20px 0;
          background: var(--red);
        }

        .supportCard > p:not(.cardLabel) {
          margin: 0 0 22px;
          color: #666;
          font-size: 13px;
          line-height: 1.8;
        }

        .cardLink {
          margin-top: auto;
          padding-bottom: 5px;
          border-bottom: 1px solid var(--red);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .contact {
          background: var(--black);
          color: white;
        }

        .contactGrid {
          align-items: start;
        }

        .contactDescription {
          max-width: 430px;
          margin-top: 25px;
          color: #aaa;
        }

        .contactDetails {
          border-top: 1px solid var(--line);
        }

        .contactRow {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 23px 0;
          border-bottom: 1px solid var(--line);
        }

        .contactRow > span {
          color: var(--red);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .contactRow > a,
        .contactRow > p {
          margin: 0;
          font-size: 15px;
          overflow-wrap: anywhere;
        }

        .contactRow > a:hover {
          color: var(--red);
        }

        .contactSocials {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 25px;
        }

        .contactSocials a {
          padding-bottom: 6px;
          border-bottom: 1px solid var(--red);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .footer {
          padding: 40px 7% 20px;
          background: #080808;
          color: white;
        }

        .footerBrand img {
          width: 45px;
          height: 45px;
          object-fit: contain;
        }

        .footer > p {
          margin: 30px 0;
          color: #aaa;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .footerBottom {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding-top: 20px;
          border-top: 1px solid #303030;
          color: #999;
          font-size: 10px;
        }

        .footerBottom a {
          color: white;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .footerBottom a:hover {
          color: var(--red);
        }

        @media (max-width: 1000px) {
          .navbar {
            padding-right: 4%;
            padding-left: 4%;
          }

          .navLinks {
            gap: 14px;
          }

          .navLinks a {
            font-size: 9px;
          }

          .section {
            padding: 80px 5%;
          }

          .supportGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .galleryGrid {
            grid-template-columns: 1fr 1fr;
          }

          .galleryCallout {
            grid-column: span 2;
            min-height: 210px;
          }
        }

        @media (max-width: 700px) {
          html {
            scroll-padding-top: 65px;
          }

          .navbar {
            position: absolute;
            min-height: 72px;
            padding: 10px 5%;
          }

          .brand {
            gap: 8px;
            font-size: 12px;
          }

          .brand .logo {
            width: 43px;
            height: 43px;
          }

          .brand small {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .menuButton {
            display: block;
          }

          .navLinks {
            position: absolute;
            top: 72px;
            right: 0;
            left: 0;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 8px 5% 18px;
            background: #111;
          }

          .navLinks.open {
            display: flex;
          }

          .navLinks a {
            padding: 15px 0;
            border-bottom: 1px solid #303030;
            font-size: 11px;
          }

          .hero {
            min-height: 720px;
            min-height: 100svh;
          }

          .heroContent {
            padding: 130px 6% 35px;
          }

          .hero h1 {
            font-size: clamp(43px, 12vw, 68px);
            letter-spacing: -2px;
          }

          .heroDescription {
            font-size: 14px;
          }

          .heroBottom {
            flex-direction: column;
            margin-top: 55px;
            font-size: 8px;
          }

          .section {
            padding: 65px 6%;
          }

          .sectionLabel {
            margin-bottom: 35px;
          }

          .introGrid,
          .sectionHeading,
          .groundGrid,
          .joinGrid,
          .contactGrid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .section h2 {
            font-size: clamp(39px, 10vw, 60px);
            letter-spacing: -1.5px;
          }

          .teamImageWrap {
            height: 320px;
            margin-top: 35px;
          }

          .timelineItem {
            grid-template-columns: 48px 12px 1fr;
            gap: 12px;
            padding: 21px 0;
          }

          .timelineYear {
            font-size: 10px;
          }

          .timelineItem h3 {
            font-size: 14px;
          }

          .timelineItem p {
            font-size: 12px;
          }

          .groundImageLink {
            min-height: 280px;
          }

          .groundImage {
            height: 300px;
          }

          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .galleryItem,
          .galleryItem img {
            min-height: 250px;
          }

          .galleryCallout {
            grid-column: auto;
            min-height: 230px;
          }

          .joinForm {
            padding: 25px 20px;
          }

          .supportGrid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .supportCard {
            min-height: 275px;
            padding: 24px;
          }

          .footer {
            padding: 35px 6% 20px;
          }

          .footerBottom {
            flex-direction: column;
            line-height: 1.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
