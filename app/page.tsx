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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {/* ================= NAVIGATION ================= */}
      <nav className="nav">
        <div className="navInner">
          <a href="#home" className="brand">
            <img src="/images/logo.png.jpeg" alt="Zagreb Assassins" />
          </a>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className={`navLinks ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              HOME
            </a>

            <a href="#history" onClick={() => setMenuOpen(false)}>
              HISTORY
            </a>

            <a href="#ground" onClick={() => setMenuOpen(false)}>
              GROUND
            </a>

            <a href="/gallery" onClick={() => setMenuOpen(false)}>
              GALLERY
            </a>

            <a href="#join" onClick={() => setMenuOpen(false)}>
              JOIN US
            </a>

            <a href="#support" onClick={() => setMenuOpen(false)}>
              SUPPORT
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <video className="heroVideo" autoPlay muted loop playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="heroOverlay"></div>

        <div className="heroContent">
          <img
            src="/images/logo.png.jpeg"
            alt="Zagreb Assassins Cricket Club"
            className="heroLogo"
          />

          <div className="heroKicker">ZAGREB CRICKET CLUB</div>

          <h1>ZAGREB ASSASSINS</h1>

          <p>One Team. One Fight. One Family.</p>

          <a href="#join" className="enterBtn">
            BECOME A MEMBER
          </a>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="teamSection">
        <div className="teamImageWrap">
          <img
            src="/images/team.jpg.jpeg"
            alt="Zagreb Assassins Team"
            className="teamImage"
          />

          <div className="teamCaption">
            <span>ZAGREB ASSASSINS</span>
            <strong>ONE TEAM. ONE FAMILY.</strong>
          </div>
        </div>
      </section>

      {/* ================= HISTORY ================= */}
      <section className="history" id="history">
        <div className="sectionHead">
          <div className="sectionKicker">OUR STORY</div>

          <h2 className="sectionTitle">Built To Compete</h2>

          <p className="sectionText">
            Zagreb Assassins is a cricket community growing together in Zagreb.
            From our achievements on the field to the future, every player,
            supporter and friend is part of the story.
          </p>
        </div>

        <div className="timeline">
          <div className="timelineItem">
            <div className="year">2023</div>
            <h3>ECS Champions</h3>
            <p>
              Zagreb Assassins became ECS Champions, marking a major achievement
              in the club&apos;s cricket journey.
            </p>
          </div>

          <div className="timelineItem">
            <div className="year">2023</div>
            <h3>Croatian Cup Winners</h3>
            <p>
              Zagreb Assassins continued their success by becoming Croatian Cup
              Winners.
            </p>
          </div>

          <div className="timelineItem">
            <div className="year">2024</div>
            <h3>The Beginning</h3>
            <p>
              The foundation of Zagreb Assassins and the beginning of a new
              cricket journey in Zagreb.
            </p>
          </div>

          <div className="timelineItem">
            <div className="year">2025</div>
            <h3>Growing Stronger</h3>
            <p>
              More players, more matches and a stronger community around the
              club.
            </p>
          </div>

          <div className="timelineItem">
            <div className="year">2026</div>
            <h3>The Next Chapter</h3>
            <p>
              A new season with bigger ambitions, stronger teamwork and more
              cricket.
            </p>
          </div>

          <div className="timelineItem">
            <div className="year">FUTURE</div>
            <h3>Our Ambition</h3>
            <p>
              Build one of Zagreb&apos;s strongest cricket communities and
              create opportunities for everyone who loves the game.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GROUND ================= */}
      <section className="groundSection" id="ground">
        <div className="groundGrid">
          <div className="groundImageWrap">
            <img
              src="/images/ground.png"
              alt="Mladost Cricket Ground Zagreb"
              className="groundImage"
            />
          </div>

          <div className="groundContent">
            <div className="sectionKicker">OUR HOME</div>

            <h2 className="sectionTitle">Mladost Cricket Ground</h2>

            <p className="sectionText">
              Our home ground in Zagreb where the team trains, competes and
              builds unforgettable cricket moments.
            </p>

            <div className="groundDetails">
              <p>
                <strong>GROUND</strong>
                <br />
                Mladost Cricket Ground
              </p>

              <p>
                <strong>LOCATION</strong>
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
              VIEW ON GOOGLE MAPS <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= JOIN ================= */}
      <section className="joinSection" id="join">
        <div className="sectionHead">
          <div className="sectionKicker">JOIN THE ASSASSINS</div>

          <h2 className="sectionTitle">Be Part Of The Team</h2>

          <p className="sectionText">
            Whether you are a player, cricket lover or supporter, there is a
            place for you in the Zagreb Assassins family.
          </p>
        </div>

        <div className="joinGrid">
          <div className="joinCard">
            <div className="joinNumber">01</div>
            <h3>PLAYER</h3>
            <p>
              Join the team, train with us and represent Zagreb Assassins in
              matches and tournaments.
            </p>
          </div>

          <div className="joinCard">
            <div className="joinNumber">02</div>
            <h3>COMMUNITY</h3>
            <p>
              Become part of our cricket community and help us grow the sport
              in Zagreb.
            </p>
          </div>

          <div className="joinCard">
            <div className="joinNumber">03</div>
            <h3>SUPPORTER</h3>
            <p>
              Support Zagreb Assassins, follow our journey and help us build a
              stronger cricket community in Zagreb.
            </p>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <div className="formWrap">
          {submitted ? (
            <div className="successMessage">
              <div className="successIcon">✓</div>

              <h3>THANK YOU!</h3>

              <p>
                Your registration has been received. Zagreb Assassins will
                contact you soon.
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
                  <label htmlFor="name">NAME</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">EMAIL</label>

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
                <label htmlFor="phone">PHONE / WHATSAPP</label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+385..."
                />
              </div>

              <div className="formGroup">
                <label htmlFor="message">MESSAGE</label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

              <button type="submit" className="submitButton">
                JOIN ZAGREB ASSASSINS <span>↗</span>
              </button>
            </form>
          )}
        </div>
      </section>
      {/* ================= SUPPORT ================= */}
      <section className="supportSection" id="support">
        <div className="sectionHead">
          <div className="sectionKicker">SUPPORT THE CLUB</div>

          <h2 className="sectionTitle">Stay Connected</h2>

          <p className="sectionText">
            Follow Zagreb Assassins, connect with the club and support the
            growth of cricket in Zagreb.
          </p>
        </div>

        <div className="supportGrid">
          <div className="supportCard">
            <div className="cardTop">
              <div className="cardNumber">01</div>
              <div className="cardMark">/</div>
            </div>

            <div className="cardLabel">SUPPORT</div>

            <h3>Bank Support</h3>

            <div className="cardLine"></div>

            <p>
              <strong>IBAN</strong>
              <br />
              [IBAN]
              <br />
              <br />
              <strong>Account Holder</strong>
              <br />
              [ACCOUNT HOLDER]
            </p>
          </div>

          <div className="supportCard socialCard">
            <div className="cardTop">
              <div className="socialSymbol">◎</div>
              <div className="cardNumber">02</div>
            </div>

            <div className="cardLabel">SOCIAL</div>

            <h3>Instagram</h3>

            <div className="cardLine"></div>

            <p>
              Follow our matches, team moments and latest Zagreb Assassins
              news.
            </p>

            <a
              href="https://www.instagram.com/zagreb_assassins_cricket?stkn=MXg2em96andld2dobA=="
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton"
            >
              <span>FOLLOW INSTAGRAM</span>
              <span className="arrow">↗</span>
            </a>
          </div>

          <div className="supportCard socialCard">
            <div className="cardTop">
              <div className="socialSymbol whatsappIcon">WA</div>
              <div className="cardNumber">03</div>
            </div>

            <div className="cardLabel">COMMUNITY</div>

            <h3>WhatsApp</h3>

            <div className="cardLine"></div>

            <p>
              Join our WhatsApp community for club updates, cricket and team
              news.
            </p>

            <a
              href="https://chat.whatsapp.com/ItcFiILa3B3LkTSkdpyTxY?s=sw&p=a&ilr=4&iam=2"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton whatsappButton"
            >
              <span>QUICK JOIN WHATSAPP</span>
              <span className="arrow">↗</span>
            </a>
          </div>

          <div className="supportCard">
            <div className="cardTop">
              <div className="cardNumber">04</div>
              <div className="cardMark">/</div>
            </div>

            <div className="cardLabel">CONNECT</div>

            <h3>Contact Us</h3>

            <div className="cardLine"></div>

            <p>
              <strong>Email</strong>
              <br />

              <a
                href="mailto:zagrebassassins@gmail.com"
                className="contactLink"
              >
                zagrebassassins@gmail.com
              </a>

              <br />
              <br />

              <strong>Phone / WhatsApp</strong>
              <br />

              <a href="tel:+385917271658" className="contactLink">
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

        <p className="footerClubName">
          Zagreb Assassins Cricket Club
        </p>

        <div className="footerContact">
          <a href="mailto:zagrebassassins@gmail.com">
            zagrebassassins@gmail.com
          </a>

          <span>•</span>

          <a href="tel:+385917271658">
            +385 91 727 1658
          </a>
        </div>

        <div className="footerSocials">
          <a
            href="https://www.instagram.com/zagreb_assassins_cricket?stkn=MXg2em96andld2dobA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footerSocialButton instagramButton"
          >
            <svg viewBox="0 0 24 24">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <circle
                cx="12"
                cy="12"
                r="4.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <circle
                cx="17.4"
                cy="6.6"
                r="1"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="https://chat.whatsapp.com/ItcFiILa3B3LkTSkdpyTxY?s=sw&p=a&ilr=4&iam=2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="footerSocialButton whatsappButton"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M20.5 3.5A11.7 11.7 0 0 0 12.2 0C5.7 0 .4 5.2.4 11.7c0 2.1.6 4.1 1.7 5.9L.3 24l6.6-1.7a11.7 11.7 0 0 0 5.3 1.3h.1c6.5 0 11.7-5.2 11.7-11.7 0-3.1-1.2-6-3.5-8.2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M8.8 7.1c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.8 2c.1.3.1.5-.1.7l-.7.8c-.2.2-.1.4 0 .6.4.8 1 1.5 1.7 2 .8.6 1.4.9 2.1 1.1.2.1.4 0 .6-.2l.8-.9c.2-.2.4-.2.7-.1l2 .9c.3.1.4.3.4.6v.7c0 .3-.1.6-.4.8-.4.4-1.3.9-2.4.9-1.4 0-2.7-.6-3.8-1.6-1-.9-1.8-2-2.2-3-.4-.9-.6-1.8-.5-2.5.1-.8.5-1.5 1.1-2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Zagreb Assassins. All rights reserved.
        </div>

        <div className="footerSlogan">
          ONE TEAM. ONE FIGHT. ONE FAMILY.
        </div>
      </footer>

      {/* ================= STYLES ================= */}
      <style jsx global>{`
        :root {
          --bg: #0b0b0c;
          --panel: #121214;
          --panel2: #171719;
          --line: #29292c;
          --lineSoft: #202023;
          --text: #f3efe9;
          --mute: #96928d;
          --acc: #e5222b;
        }

        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        html {
          background: var(--bg);
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input,
        textarea {
          font-family: Arial, Helvetica, sans-serif;
        }

        /* NAV */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 19px 5%;
          transition:
            background 0.35s ease,
            padding 0.35s ease,
            border-color 0.35s ease;
          border-bottom: 1px solid transparent;
        }

        .nav.scrolled {
          padding-top: 13px;
          padding-bottom: 13px;
          background: rgba(10, 10, 11, 0.92);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }

        .navInner {
          width: 100%;
          max-width: 1400px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
        }

        .brand img {
          width: 57px;
          height: 57px;
          display: block;
          object-fit: contain;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .navLinks a {
          position: relative;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #e5e1dc;
          transition: color 0.25s ease;
        }

        .navLinks a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 0;
          height: 1px;
          background: var(--acc);
          transition: width 0.25s ease;
        }

        .navLinks a:hover {
          color: #fff;
        }

        .navLinks a:hover::after {
          width: 100%;
        }

        .menuButton {
          display: none;
          border: 0;
          background: transparent;
          color: #fff;
          font-size: 26px;
          line-height: 1;
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
          transform: scale(1.02);
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.48) 0%,
            rgba(0, 0, 0, 0.55) 40%,
            rgba(0, 0, 0, 0.88) 100%
          );
        }

        .heroOverlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            transparent 0%,
            rgba(0, 0, 0, 0.22) 60%,
            rgba(0, 0, 0, 0.58) 100%
          );
        }

        .heroContent {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          min-height: 100vh;
          margin: 0 auto;
          padding: 120px 20px 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .heroLogo {
          width: 188px;
          max-width: 55vw;
          height: auto;
          display: block;
          object-fit: contain;
          margin: 0 auto 27px;
          filter: drop-shadow(
            0 18px 35px rgba(0, 0, 0, 0.55)
          );
        }

        .heroKicker,
        .sectionKicker {
          color: var(--acc);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          line-height: 1.4;
          margin-bottom: 17px;
        }

        .hero h1 {
          margin: 0;
          color: #f7f4ef;
          font-size: clamp(48px, 9vw, 110px);
          line-height: 0.94;
          font-weight: 800;
          letter-spacing: -2.5px;
        }

        .hero p {
          margin: 26px 0 35px;
          color: #ddd9d4;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .enterBtn,
        .submitButton,
        .mapButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          min-height: 50px;
          padding: 15px 27px;
          background: var(--acc);
          color: #fff;
          border: 1px solid var(--acc);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.7px;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .enterBtn:hover,
        .submitButton:hover,
        .mapButton:hover {
          transform: translateY(-3px);
          background: #f02a33;
          border-color: #f02a33;
          box-shadow: 0 12px 30px rgba(229, 34, 43, 0.18);
        }

        /* TEAM */
        .teamSection {
          padding: 0 5% 115px;
          background: var(--bg);
        }

        .teamImageWrap {
          position: relative;
          max-width: 1400px;
          margin: auto;
          overflow: hidden;
          background: #111;
        }

        .teamImageWrap::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .teamImage {
          width: 100%;
          max-height: 720px;
          display: block;
          object-fit: cover;
        }

        .teamCaption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          padding: 80px 38px 32px;
          background: linear-gradient(
            transparent,
            rgba(0, 0, 0, 0.92)
          );
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .teamCaption span {
          color: #d1cdc7;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .teamCaption strong {
          color: #fff;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        /* GENERAL */
        .history,
        .joinSection,
        .supportSection {
          max-width: 1400px;
          margin: auto;
          padding: 120px 5%;
        }

        .sectionHead {
          max-width: 760px;
          margin-bottom: 68px;
        }

        .sectionTitle {
          margin: 0 0 25px;
          color: var(--text);
          font-size: clamp(40px, 6vw, 76px);
          line-height: 0.98;
          font-weight: 750;
          letter-spacing: -2.2px;
        }

        .sectionText {
          max-width: 720px;
          margin: 0;
          color: var(--mute);
          font-size: 16px;
          line-height: 1.75;
          font-weight: 400;
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
          min-height: 275px;
          padding: 38px;
          background: var(--bg);
          transition: background 0.3s ease;
        }

        .timelineItem:hover {
          background: #111113;
        }

        .year {
          margin-bottom: 31px;
          color: var(--acc);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .timelineItem h3 {
          margin: 0 0 16px;
          color: var(--text);
          font-size: 25px;
          line-height: 1.16;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .timelineItem p {
          margin: 0;
          color: var(--mute);
          font-size: 14px;
          line-height: 1.75;
        }

        /* GROUND */
        .groundSection {
          max-width: none;
          padding: 120px 5%;
          background: #111113;
          border-top: 1px solid var(--lineSoft);
          border-bottom: 1px solid var(--lineSoft);
        }

        .groundGrid {
          max-width: 1400px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 75px;
          align-items: center;
        }

        .groundImageWrap {
          min-height: 490px;
          overflow: hidden;
          background: #0d0d0e;
          border: 1px solid var(--line);
        }

        .groundImage {
          width: 100%;
          height: 100%;
          min-height: 490px;
          display: block;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .groundImageWrap:hover .groundImage {
          transform: scale(1.025);
        }

        .groundContent {
          max-width: 590px;
        }

        .groundDetails {
          margin: 34px 0;
          padding: 20px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .groundDetails p {
          margin: 0;
          color: var(--mute);
          font-size: 14px;
          line-height: 1.7;
        }

        .groundDetails strong {
          color: var(--text);
          font-size: 11px;
          letter-spacing: 1.5px;
        }

        /* JOIN */
        .joinGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }

        .joinCard {
          min-height: 285px;
          padding: 38px;
          background: var(--panel);
          transition: background 0.3s ease;
        }

        .joinCard:hover {
          background: #19191b;
        }

        .joinNumber {
          margin-bottom: 55px;
          color: var(--acc);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .joinCard h3 {
          margin: 0 0 18px;
          color: var(--text);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .joinCard p {
          margin: 0;
          color: var(--mute);
          font-size: 14px;
          line-height: 1.75;
        }

        /* FORM */
        .formWrap {
          margin-top: 55px;
          padding: 50px;
          background: #111113;
          border: 1px solid var(--line);
        }

        .joinForm {
          max-width: 850px;
          margin: auto;
        }

        .formRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .formGroup {
          margin-bottom: 22px;
        }

        .formGroup label {
          display: block;
          margin-bottom: 10px;
          color: #d6d1cb;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .formGroup input,
        .formGroup textarea {
          width: 100%;
          padding: 16px;
          background: #0b0b0d;
          border: 1px solid #29292c;
          outline: none;
          color: #fff;
          font-size: 14px;
          transition:
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .formGroup input::placeholder,
        .formGroup textarea::placeholder {
          color: #66636a;
        }

        .formGroup input:focus,
        .formGroup textarea:focus {
          background: #0e0e10;
          border-color: #55555a;
        }

        .formGroup textarea {
          resize: vertical;
          min-height: 130px;
        }

        .submitButton {
          margin-top: 5px;
          cursor: pointer;
        }

        .submitButton span,
        .mapButton span {
          font-size: 16px;
          line-height: 1;
        }

        /* SUCCESS */
        .successMessage {
          max-width: 600px;
          margin: auto;
          padding: 35px;
          text-align: center;
        }

        .successIcon {
          width: 64px;
          height: 64px;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--acc);
          color: #fff;
          font-size: 27px;
          font-weight: 900;
        }

        .successMessage h3 {
          margin: 0 0 12px;
          font-size: 30px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .successMessage p {
          margin: 0;
          color: var(--mute);
          line-height: 1.7;
        }

        /* SUPPORT */
        .supportGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .supportCard {
          position: relative;
          min-height: 345px;
          padding: 32px;
          overflow: hidden;
          background: linear-gradient(
            145deg,
            #171719 0%,
            #101012 100%
          );
          border: 1px solid #28282b;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }

        .supportCard::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 34px;
          height: 1px;
          background: var(--acc);
        }

        .supportCard:hover {
          transform: translateY(-5px);
          border-color: #3a3a3e;
        }

        .cardTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .cardNumber {
          color: #68656a;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .cardMark {
          color: #454348;
          font-size: 22px;
          line-height: 1;
          font-weight: 300;
        }

        .cardLabel {
          margin-bottom: 11px;
          color: var(--acc);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .supportCard h3 {
          margin: 0;
          color: var(--text);
          font-size: 25px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .cardLine {
          width: 100%;
          height: 1px;
          margin: 23px 0;
          background: var(--line);
        }

        .supportCard p {
          margin: 0;
          color: var(--mute);
          font-size: 13px;
          line-height: 1.75;
        }

        .supportCard strong {
          color: #e8e3dc;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .socialSymbol {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ece8e2;
          border: 1px solid #36363a;
          font-size: 20px;
          font-weight: 400;
        }

        .whatsappIcon {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .socialButton {
          position: absolute;
          left: 32px;
          right: 32px;
          bottom: 29px;
          min-height: 43px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #333337;
          background: #151517;
          color: #eeeae4;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease;
        }

        .socialButton .arrow {
          font-size: 16px;
          line-height: 1;
        }

        .socialButton:hover {
          background: #202023;
          border-color: #55555a;
        }

        .whatsappButton:hover {
          background: #25d366;
          border-color: #25d366;
          color: #fff;
        }

        .contactLink {
          color: #d9d4cd;
          font-weight: 700;
          word-break: break-word;
          transition: color 0.25s ease;
        }

        .contactLink:hover {
          color: var(--acc);
        }

        /* FOOTER */
        .footer {
          padding: 90px 20px 42px;
          text-align: center;
          border-top: 1px solid var(--line);
          background: #09090a;
        }

        .footerLogo img {
          width: 92px;
          height: auto;
          display: block;
          margin: 0 auto 27px;
          object-fit: contain;
        }

        .footerClubName {
          margin: 0;
          color: #77747a;
          font-size: 13px;
        }

        .footerContact {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .footerContact a {
          color: #858188;
          font-size: 13px;
          transition: color 0.25s ease;
        }

        .footerContact a:hover {
          color: var(--acc);
        }

        .footerContact span {
          color: #4c4a4e;
        }

        .footerSocials {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }

        .footerSocialButton {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #333337;
          background: #151517;
          color: #eeeae4;
          transition: all 0.25s ease;
        }

        .footerSocialButton svg {
          width: 23px;
          height: 23px;
        }

        .footerSocialButton:hover {
          transform: translateY(-3px);
        }

        .instagramButton:hover {
          color: #fff;
          border-color: var(--acc);
          background: rgba(229, 34, 43, 0.12);
        }

        .whatsappButton:hover {
          color: #fff;
          border-color: #25d366;
          background: rgba(37, 211, 102, 0.12);
        }

        .copyright {
          margin-top: 38px;
          color: #4d4b50;
          font-size: 11px;
          letter-spacing: 0.3px;
        }

        .footerSlogan {
          margin-top: 48px;
          margin-bottom: 0;
          color: #f3efe9;
          font-size: clamp(24px, 4vw, 48px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* TABLET */
        @media (max-width: 1100px) {
          .supportGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .timeline {
            grid-template-columns: repeat(2, 1fr);
          }

          .groundGrid {
            gap: 45px;
          }
        }

        /* MOBILE MENU */
        @media (max-width: 900px) {
          .menuButton {
            display: block;
          }

          .navLinks {
            position: absolute;
            top: 83px;
            left: 5%;
            right: 5%;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            background: rgba(12, 12, 13, 0.98);
            border: 1px solid var(--line);
            backdrop-filter: blur(18px);
          }

          .navLinks.open {
            display: flex;
          }

          .navLinks a {
            padding: 18px 20px;
            border-bottom: 1px solid var(--line);
          }

          .navLinks a:last-child {
            border-bottom: 0;
          }

          .timeline,
          .groundGrid,
          .joinGrid {
            grid-template-columns: 1fr;
          }

          .groundGrid {
            gap: 40px;
          }

          .groundImageWrap,
          .groundImage {
            min-height: 330px;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .nav {
            padding: 12px 5%;
          }

          .nav.scrolled {
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .brand img {
            width: 48px;
            height: 48px;
          }

          .navLinks {
            top: 70px;
          }

          .heroContent {
            padding-top: 105px;
            padding-bottom: 50px;
          }

          .heroLogo {
            width: 145px;
            max-width: 52vw;
            margin: 0 auto 22px;
          }

          .heroKicker {
            margin-bottom: 13px;
            font-size: 9px;
            letter-spacing: 3px;
          }

          .hero h1 {
            font-size: clamp(42px, 12vw, 65px);
            line-height: 0.94;
            letter-spacing: -1.5px;
          }

          .hero p {
            margin: 22px 0 30px;
            font-size: 15px;
          }

          .enterBtn {
            min-height: 48px;
            padding: 14px 21px;
            font-size: 10px;
          }

          .teamSection {
            padding: 0 5% 80px;
          }

          .teamCaption {
            padding: 65px 20px 20px;
            display: block;
          }

          .teamCaption span {
            font-size: 9px;
            letter-spacing: 2.5px;
          }

          .teamCaption strong {
            display: block;
            margin-top: 8px;
            font-size: 14px;
            letter-spacing: 1.4px;
          }

          .history,
          .joinSection,
          .supportSection {
            padding-top: 82px;
            padding-bottom: 82px;
          }

          .groundSection {
            padding-top: 82px;
            padding-bottom: 82px;
          }

          .sectionHead {
            margin-bottom: 48px;
          }

          .sectionKicker {
            margin-bottom: 13px;
            font-size: 9px;
            letter-spacing: 3px;
          }

          .sectionTitle {
            margin-bottom: 21px;
            font-size: 42px;
            line-height: 0.98;
            letter-spacing: -1.5px;
          }

          .sectionText {
            font-size: 15px;
            line-height: 1.7;
          }

          .timelineItem {
            min-height: auto;
            padding: 28px;
          }

          .year {
            margin-bottom: 25px;
          }

          .timelineItem h3 {
            font-size: 23px;
          }

          .groundImageWrap,
          .groundImage {
            min-height: 270px;
          }

          .groundDetails {
            grid-template-columns: 1fr;
            gap: 17px;
            margin: 27px 0;
          }

          .mapButton {
            width: 100%;
          }

          .joinCard {
            min-height: auto;
            padding: 29px;
          }

          .joinNumber {
            margin-bottom: 42px;
          }

          .formWrap {
            margin-top: 42px;
            padding: 28px 20px;
          }

          .supportGrid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .supportCard {
            min-height: 315px;
            padding: 28px;
          }

          .socialButton {
            left: 28px;
            right: 28px;
            bottom: 26px;
          }

          .footer {
            padding-top: 68px;
          }

          .footerLogo img {
            width: 82px;
            margin-bottom: 24px;
          }

          .footerContact {
            flex-direction: column;
            gap: 8px;
          }

          .footerContact span {
            display: none;
          }

          .copyright {
            margin-top: 30px;
          }

          .footerSocialButton {
            width: 46px;
            height: 46px;
          }

          .footerSocialButton svg {
            width: 21px;
            height: 21px;
          }

          .footerSlogan {
            margin-top: 40px;
            font-size: clamp(20px, 6vw, 30px);
            letter-spacing: 1.8px;
            line-height: 1.15;
          }
        }
      `}</style>
    </main>
  );
}