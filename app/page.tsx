"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav");

      if (window.scrollY > 40) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* ================= NAVIGATION ================= */}

      <nav className="nav">
        <div className="navInner">

          <a href="#home" className="brand">
            <img
              src="/images/logo.png.jpeg"
              alt="Zagreb Assassins"
            />
          </a>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className={`navLinks ${menuOpen ? "open" : ""}`}>

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </a>

            <a
              href="#history"
              onClick={() => setMenuOpen(false)}
            >
              HISTORY
            </a>

            <a
              href="#ground"
              onClick={() => setMenuOpen(false)}
            >
              GROUND
            </a>

            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
            >
              JOIN US
            </a>

            <a
              href="#support"
              onClick={() => setMenuOpen(false)}
            >
              SUPPORT
            </a>

          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="heroOverlay"></div>

        <div className="heroContent">

          <img
            src="/images/logo.png.jpeg"
            alt="Zagreb Assassins Cricket Club"
            className="heroLogo"
          />

          <div className="heroKicker">
            ZAGREB CRICKET CLUB
          </div>

          <h1>ZAGREB ASSASSINS</h1>

          <p>
            One Team. One Fight. One Family.
          </p>

          <a
            href="#join"
            className="enterBtn"
          >
            BECOME A MEMBER
          </a>

          <a
            href="https://chat.whatsapp.com/ItcFiILa3B3LkTSkdpyTxY?s=sw&p=a&ilr=4&iam=2"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsappBtn"
          >
            QUICK JOIN WHATSAPP
          </a>

        </div>
      </section>

      {/* ================= TEAM IMAGE ================= */}

      <section className="teamSection">

        <div className="teamImageWrap">

          <img
            src="/images/team.jpg.jpeg"
            alt="Zagreb Assassins Team"
            className="teamImage"
          />

          <div className="teamCaption">

            <span>
              ZAGREB ASSASSINS
            </span>

            <strong>
              ONE TEAM. ONE FAMILY.
            </strong>

          </div>
        </div>
      </section>

      {/* ================= HISTORY ================= */}

      <section
        className="history"
        id="history"
      >

        <div className="sectionHead">

          <div className="sectionKicker">
            OUR STORY
          </div>

          <h2 className="sectionTitle">
            Built To Compete
          </h2>

          <p className="sectionText">
            Zagreb Assassins is a cricket community
            growing together in Zagreb. From our
            achievements on the field to the future,
            every player, supporter and friend is part
            of the story.
          </p>

        </div>

        <div className="timeline">

          {/* 2023 ECS */}

          <div className="timelineItem">

            <div className="year">
              2023
            </div>

            <h3>
              ECS Champions
            </h3>

            <p>
              Zagreb Assassins became ECS Champions,
              marking a major achievement in the
              club&apos;s cricket journey.
            </p>

          </div>

          {/* 2023 CROATIAN CUP */}

          <div className="timelineItem">

            <div className="year">
              2023
            </div>

            <h3>
              Croatian Cup Winners
            </h3>

            <p>
              Zagreb Assassins continued their success
              by becoming Croatian Cup Winners.
            </p>

          </div>

          {/* 2024 */}

          <div className="timelineItem">

            <div className="year">
              2024
            </div>

            <h3>
              The Beginning
            </h3>

            <p>
              The foundation of Zagreb Assassins and
              the beginning of a new cricket journey
              in Zagreb.
            </p>

          </div>

          {/* 2025 */}

          <div className="timelineItem">

            <div className="year">
              2025
            </div>

            <h3>
              Growing Stronger
            </h3>

            <p>
              More players, more matches and a
              stronger community around the club.
            </p>

          </div>

          {/* 2026 */}

          <div className="timelineItem">

            <div className="year">
              2026
            </div>

            <h3>
              The Next Chapter
            </h3>

            <p>
              A new season with bigger ambitions,
              stronger teamwork and more cricket.
            </p>

          </div>

          {/* FUTURE */}

          <div className="timelineItem">

            <div className="year">
              FUTURE
            </div>

            <h3>
              Our Ambition
            </h3>

            <p>
              Build one of Zagreb&apos;s strongest
              cricket communities and create
              opportunities for everyone who loves
              the game.
            </p>

          </div>

        </div>
      </section>

      {/* ================= GROUND ================= */}

      <section
        className="groundSection"
        id="ground"
      >

        <div className="groundGrid">

          <div className="groundImageWrap">

            <img
              src="/images/ground.png"
              alt="Mladost Cricket Ground Zagreb"
              className="groundImage"
            />

          </div>

          <div className="groundContent">

            <div className="sectionKicker">
              OUR HOME
            </div>

            <h2 className="sectionTitle">
              Mladost Cricket Ground
            </h2>

            <p className="sectionText">
              Our home ground in Zagreb where the
              team trains, competes and builds
              unforgettable cricket moments.
            </p>

            <div className="groundDetails">

              <p>
                <strong>
                  Ground:
                </strong>
                <br />
                Mladost Cricket Ground
              </p>

              <p>
                <strong>
                  Location:
                </strong>
                <br />
                Zagreb, Croatia
              </p>

            </div>

            <a
              href="https://maps.app.goo.gl/itNj4GVd9uFePYSu7"
              target="_blank"
              rel="noopener noreferrer"
              className="mapButton"
            >
              VIEW ON GOOGLE MAPS
            </a>

          </div>
        </div>
      </section>

      {/* ================= JOIN ================= */}

      <section
        className="joinSection"
        id="join"
      >

        <div className="sectionHead">

          <div className="sectionKicker">
            JOIN THE ASSASSINS
          </div>

          <h2 className="sectionTitle">
            Be Part Of The Team
          </h2>

          <p className="sectionText">
            Whether you are a player, cricket lover
            or supporter, there is a place for you
            in the Zagreb Assassins family.
          </p>

        </div>

        <div className="joinGrid">

          <div className="joinCard">

            <div className="joinNumber">
              01
            </div>

            <h3>
              PLAYER
            </h3>

            <p>
              Join the team, train with us and
              represent Zagreb Assassins in matches
              and tournaments.
            </p>

          </div>

          <div className="joinCard">

            <div className="joinNumber">
              02
            </div>

            <h3>
              COMMUNITY
            </h3>

            <p>
              Become part of our cricket community
              and help us grow the sport in Zagreb.
            </p>

          </div>

          <div className="joinCard">

            <div className="joinNumber">
              03
            </div>

            <h3>
              SUPPORTER
            </h3>

            <p>
              Support Zagreb Assassins, follow our
              journey and help us build a stronger
              cricket community in Zagreb.
            </p>

          </div>

        </div>

        {/* ================= REGISTRATION FORM ================= */}

        <div className="formWrap">

          {submitted ? (

            <div className="successMessage">

              <div className="successIcon">
                ✓
              </div>

              <h3>
                THANK YOU!
              </h3>

              <p>
                Your registration has been received.
                Zagreb Assassins will contact you soon.
              </p>

            </div>

          ) : (

            <form
              action="https://formspree.io/f/xppqzzdd"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="joinForm"
            >

              <input
                type="hidden"
                name="_subject"
                value="New Zagreb Assassins Registration"
              />

              <div className="formRow">

                <div className="formGroup">

                  <label htmlFor="name">
                    NAME
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                </div>

                <div className="formGroup">

                  <label htmlFor="email">
                    EMAIL
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />

                </div>

              </div>

              <div className="formGroup">

                <label htmlFor="phone">
                  PHONE / WHATSAPP
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+385..."
                />

              </div>

              <div className="formGroup">

                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about yourself..."
                ></textarea>

              </div>

              <button
                type="submit"
                className="submitButton"
              >
                JOIN ZAGREB ASSASSINS
              </button>

            </form>

          )}

        </div>
      </section>

      {/* ================= SUPPORT ================= */}

      <section
        className="supportSection"
        id="support"
      >

        <div className="sectionHead">

          <div className="sectionKicker">
            SUPPORT THE CLUB
          </div>

          <h2 className="sectionTitle">
            Support Zagreb Assassins
          </h2>

          <p className="sectionText">
            Your support helps us build a stronger
            cricket community and create more
            opportunities for players in Zagreb.
          </p>

        </div>

        <div className="supportGrid">

          {/* BANK */}

          <div className="supportCard">

            <h3>
              Bank Support
            </h3>

            <p>

              <strong>
                IBAN:
              </strong>

              <br />

              [IBAN]

              <br />
              <br />

              <strong>
                Account Holder:
              </strong>

              <br />

              [ACCOUNT HOLDER]

            </p>

          </div>

          {/* INSTAGRAM */}

          <div className="supportCard">

            <h3>
              Instagram
            </h3>

            <p>
              Follow Zagreb Assassins on Instagram.
            </p>

            <a
              href="https://www.instagram.com/zagreb_assassins_cricket?stkn=MXg2em96andld2dobA=="
              target="_blank"
              rel="noopener noreferrer"
              className="instagramLink"
            >
              @zagreb_assassins_cricket
            </a>

          </div>

          {/* CONTACT */}

          <div className="supportCard">

            <h3>
              Contact Us
            </h3>

            <p>

              <strong>
                Email:
              </strong>

              <br />

              <a
                href="mailto:zagrebassassins@gmail.com"
                className="contactLink"
              >
                zagrebassassins@gmail.com
              </a>

              <br />
              <br />

              <strong>
                Phone / WhatsApp:
              </strong>

              <br />

              <a
                href="tel:+385917271658"
                className="contactLink"
              >
                +385 91 727 1658
              </a>

            </p>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footerLogo">

          <img
            src="/images/logo.png.jpeg"
            alt="Zagreb Assassins"
          />

        </div>

        <h3>
          ONE TEAM. ONE FIGHT. ONE FAMILY.
        </h3>

        <p>
          Zagreb Assassins Cricket Club
        </p>

        <div className="footerContact">

          <a href="mailto:zagrebassassins@gmail.com">
            zagrebassassins@gmail.com
          </a>

          <span>
            •
          </span>

          <a href="tel:+385917271658">
            +385 91 727 1658
          </a>

        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Zagreb Assassins.
          All rights reserved.
        </div>

      </footer>

      {/* ================= STYLES ================= */}

      <style jsx global>{`

        :root {
          --bg: #0c0c0d;
          --panel: #161618;
          --line: #2a2a2d;
          --text: #f2eee8;
          --mute: #9a968f;
          --acc: #e5222b;
        }

        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* NAV */

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 18px 5%;
          transition: 0.3s ease;
        }

        .nav.scrolled {
          background: rgba(12, 12, 13, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
        }

        .navInner {
          max-width: 1400px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand img {
          width: 58px;
          height: 58px;
          object-fit: contain;
        }

        .navLinks {
          display: flex;
          gap: 34px;
          align-items: center;
        }

        .navLinks a {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          transition: 0.3s;
        }

        .navLinks a:hover {
          color: var(--acc);
        }

        .menuButton {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 28px;
          cursor: pointer;
        }

        /* HERO */

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .heroVideo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.82)
            );
        }

        .heroContent {
          position: relative;
          z-index: 2;
          padding: 120px 20px 60px;
        }

        .heroLogo {
          width: 190px;
          max-width: 55vw;
          margin-bottom: 25px;
        }

        .heroKicker,
        .sectionKicker {
          color: var(--acc);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 4px;
          margin-bottom: 15px;
        }

        .hero h1 {
          font-size: clamp(48px, 9vw, 110px);
          line-height: 0.9;
          margin: 0;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .hero p {
          font-size: 18px;
          color: #ddd;
          margin: 25px 0 35px;
        }

        .enterBtn,
        .submitButton,
        .mapButton {
          display: inline-block;
          background: var(--acc);
          color: white;
          border: none;
          padding: 15px 28px;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: 0.3s;
        }

        .enterBtn:hover,
        .submitButton:hover,
        .mapButton:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        /* WHATSAPP */

        .whatsappBtn {
          display: inline-block;
          margin-left: 12px;
          margin-top: 10px;
          background: #25D366;
          color: white;
          border: none;
          padding: 15px 28px;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: 0.3s;
        }

        .whatsappBtn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        /* TEAM */

        .teamSection {
          padding: 0 5% 100px;
          background: var(--bg);
        }

        .teamImageWrap {
          max-width: 1400px;
          margin: auto;
          position: relative;
          overflow: hidden;
        }

        .teamImage {
          width: 100%;
          display: block;
          max-height: 720px;
          object-fit: cover;
        }

        .teamCaption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 35px;

          background:
            linear-gradient(
              transparent,
              rgba(0, 0, 0, 0.9)
            );

          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .teamCaption span {
          font-size: 13px;
          letter-spacing: 3px;
          color: #ccc;
        }

        .teamCaption strong {
          font-size: 20px;
        }

        /* SECTIONS */

        .history,
        .groundSection,
        .joinSection,
        .supportSection {
          max-width: 1400px;
          margin: auto;
          padding: 110px 5%;
        }

        .sectionHead {
          max-width: 760px;
          margin-bottom: 65px;
        }

        .sectionTitle {
          font-size: clamp(40px, 6vw, 76px);
          line-height: 0.95;
          margin: 0 0 25px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .sectionText {
          color: var(--mute);
          font-size: 17px;
          line-height: 1.7;
        }

        /* HISTORY */

        .timeline {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }

        .timelineItem {
          background: var(--bg);
          padding: 35px;
          min-height: 260px;
        }

        .year {
          color: var(--acc);
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 30px;
        }

        .timelineItem h3 {
          font-size: 26px;
          margin: 0 0 15px;
        }

        .timelineItem p {
          color: var(--mute);
          line-height: 1.7;
          margin: 0;
        }

        /* GROUND */

        .groundSection {
          background: var(--panel);
          max-width: none;
          padding-left: 5%;
          padding-right: 5%;
        }

        .groundGrid {
          max-width: 1400px;
          margin: auto;

          display: grid;
          grid-template-columns: 1.1fr 0.9fr;

          gap: 70px;
          align-items: center;
        }

        .groundImageWrap {
          overflow: hidden;
          min-height: 450px;
          background: #111;
        }

        .groundImage {
          width: 100%;
          height: 100%;
          min-height: 450px;
          display: block;
          object-fit: cover;
        }

        .groundContent {
          max-width: 600px;
        }

        .groundDetails {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 20px 0;
          margin: 30px 0;
        }

        .groundDetails p {
          color: var(--mute);
          line-height: 1.6;
        }

        .groundDetails strong {
          color: var(--text);
        }

        /* JOIN */

        .joinGrid,
        .supportGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .joinCard,
        .supportCard {
          background: var(--panel);
          border: 1px solid var(--line);
          padding: 35px;
        }

        .joinNumber {
          color: var(--acc);
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 45px;
        }

        .joinCard h3,
        .supportCard h3 {
          font-size: 22px;
          margin: 0 0 18px;
        }

        .joinCard p,
        .supportCard p {
          color: var(--mute);
          line-height: 1.7;
        }

        /* FORM */

        .formWrap {
          margin-top: 60px;
          background: var(--panel);
          border: 1px solid var(--line);
          padding: 45px;
        }

        .joinForm {
          max-width: 850px;
          margin: auto;
        }

        .formRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .formGroup {
          margin-bottom: 22px;
        }

        .formGroup label {
          display: block;
          color: #ddd;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 9px;
        }

        .formGroup input,
        .formGroup textarea {
          width: 100%;
          border: 1px solid var(--line);
          background: #0e0e10;
          color: white;
          padding: 15px;
          outline: none;
          font: inherit;
          resize: vertical;
        }

        .formGroup input:focus,
        .formGroup textarea:focus {
          border-color: var(--acc);
        }

        .submitButton {
          margin-top: 10px;
        }

        /* SUCCESS */

        .successMessage {
          text-align: center;
          max-width: 600px;
          margin: auto;
          padding: 30px;
        }

        .successIcon {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: var(--acc);

          display: flex;
          align-items: center;
          justify-content: center;

          margin: 0 auto 25px;

          font-size: 28px;
          font-weight: 900;
        }

        .successMessage h3 {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .successMessage p {
          color: var(--mute);
          line-height: 1.7;
        }

        /* SUPPORT */

        .supportGrid {
          grid-template-columns: repeat(3, 1fr);
        }

        .supportCard {
          min-height: 230px;
        }

        .supportCard strong {
          color: var(--text);
        }

        .instagramLink,
        .contactLink {
          color: var(--acc);
          font-weight: 700;
          word-break: break-word;
        }

        /* FOOTER */

        .footer {
          border-top: 1px solid var(--line);
          text-align: center;
          padding: 80px 20px 40px;
        }

        .footerLogo img {
          width: 100px;
          margin-bottom: 25px;
        }

        .footer h3 {
          font-size: 20px;
          letter-spacing: 2px;
          margin: 0 0 15px;
        }

        .footer p {
          color: var(--mute);
        }

        .footerContact {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .footerContact a {
          color: var(--mute);
        }

        .footerContact a:hover {
          color: var(--acc);
        }

        .copyright {
          color: #666;
          font-size: 12px;
          margin-top: 40px;
        }

        /* TABLET */

        @media (max-width: 900px) {

          .menuButton {
            display: block;
          }

          .navLinks {
            position: absolute;
            top: 90px;
            left: 5%;
            right: 5%;

            display: none;
            flex-direction: column;
            align-items: stretch;

            gap: 0;

            background: rgba(15, 15, 16, 0.98);

            border: 1px solid var(--line);
          }

          .navLinks.open {
            display: flex;
          }

          .navLinks a {
            padding: 18px 20px;
            border-bottom: 1px solid var(--line);
          }

          .timeline,
          .groundGrid,
          .joinGrid,
          .supportGrid {
            grid-template-columns: 1fr;
          }

          .groundGrid {
            gap: 40px;
          }

          .groundImageWrap,
          .groundImage {
            min-height: 300px;
          }

          .formRow {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {

          .nav {
            padding: 12px 5%;
          }

          .brand img {
            width: 48px;
            height: 48px;
          }

          .hero h1 {
            letter-spacing: -1px;
          }

          .heroLogo {
            width: 145px;
          }

          .teamCaption {
            padding: 20px;
            display: block;
          }

          .teamCaption strong {
            display: block;
            margin-top: 8px;
          }

          .history,
          .groundSection,
          .joinSection,
          .supportSection {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .formWrap {
            padding: 25px 20px;
          }

          .timelineItem,
          .joinCard,
          .supportCard {
            padding: 25px;
          }

          .whatsappBtn {
            margin-left: 0;
            display: block;
            width: fit-content;
            margin-right: auto;
            margin-left: auto;
          }

        }

      `}</style>
    </main>
  );
}