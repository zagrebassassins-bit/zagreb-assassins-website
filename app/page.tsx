"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Barlow:wght@400;500;600;700&display=swap");

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
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: "Barlow", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* ================= NAV ================= */

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          transition: 0.3s;
        }

        .nav.scrolled {
          background: rgba(12, 12, 13, 0.96);
          border-bottom: 1px solid var(--line);
          backdrop-filter: blur(10px);
        }

        .navLogo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 800;
          font-size: 21px;
          letter-spacing: 1px;
        }

        .navLogo img {
          width: 45px;
          height: 45px;
          object-fit: contain;
        }

        .navLinks {
          display: flex;
          gap: 30px;
          font-family: "Barlow Condensed", sans-serif;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .navLinks a:hover {
          color: var(--acc);
        }

        .menuBtn {
          display: none;
          background: none;
          border: 0;
          color: white;
          font-size: 28px;
          cursor: pointer;
        }

        .mobileMenu {
          display: none;
        }

        /* ================= HERO ================= */

        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          padding: 120px 0 70px;
        }

        .heroVideo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.35;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.4) 45%,
              rgba(12, 12, 13, 1) 100%
            );
          z-index: 1;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          width: min(1100px, 92%);
          margin: 0 auto;
        }

        /* PERFECT CENTER LOGO */

        .logo {
          display: block;
          width: 155px;
          height: 155px;
          object-fit: contain;
          margin: 0 auto 22px;
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.7));
        }

        .eyebrow {
          color: var(--acc);
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 700;
          letter-spacing: 4px;
          font-size: 15px;
          margin-bottom: 13px;
        }

        .hero h1 {
          font-family: "Barlow Condensed", sans-serif;
          font-size: clamp(55px, 10vw, 120px);
          line-height: 0.88;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -2px;
        }

        .hero h1 span {
          color: var(--acc);
        }

        .heroSubtitle {
          max-width: 650px;
          margin: 24px auto 30px;
          color: #d0ccc6;
          font-size: 18px;
          line-height: 1.6;
        }

        .enterBtn {
          display: inline-block;
          padding: 15px 30px;
          background: var(--acc);
          color: white;
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: 0.25s;
          border: 1px solid var(--acc);
        }

        .enterBtn:hover {
          background: transparent;
        }

        /* ================= TEAM PHOTO ================= */

        .teamPhotoWrap {
          width: min(950px, 96%);
          margin: 50px auto 0;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--panel);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
        }

        .teamPhoto {
          display: block;
          width: 100%;
          height: auto;
          max-height: 560px;
          object-fit: cover;
        }

        .teamPhotoLabel {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 60px 22px 18px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(0, 0, 0, 0.9)
          );
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 17px;
          text-align: left;
        }

        /* ================= SECTIONS ================= */

        section {
          padding: 110px 6%;
        }

        .sectionHead {
          max-width: 850px;
          margin: 0 auto 55px;
        }

        .sectionKicker {
          color: var(--acc);
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .sectionTitle {
          font-family: "Barlow Condensed", sans-serif;
          font-size: clamp(45px, 7vw, 82px);
          text-transform: uppercase;
          line-height: 0.9;
          font-weight: 800;
        }

        .sectionText {
          margin-top: 20px;
          color: var(--mute);
          font-size: 18px;
          line-height: 1.7;
          max-width: 760px;
        }

        /* ================= HISTORY ================= */

        .history {
          background: var(--bg);
        }

        .timeline {
          max-width: 1000px;
          margin: auto;
          border-left: 1px solid var(--line);
        }

        .timelineItem {
          padding: 0 0 50px 40px;
          position: relative;
        }

        .timelineItem::before {
          content: "";
          position: absolute;
          left: -6px;
          top: 4px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--acc);
        }

        .year {
          color: var(--acc);
          font-family: "Barlow Condensed", sans-serif;
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .timelineItem h3 {
          font-family: "Barlow Condensed", sans-serif;
          font-size: 34px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .timelineItem p {
          color: var(--mute);
          line-height: 1.7;
          font-size: 17px;
        }

        /* ================= GROUND ================= */

        .ground {
          background: #101011;
        }

        .groundGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: auto;
        }

        .infoCard {
          background: var(--panel);
          border: 1px solid var(--line);
          padding: 35px;
        }

        .infoCard h3 {
          font-family: "Barlow Condensed", sans-serif;
          font-size: 35px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .infoCard p {
          color: var(--mute);
          line-height: 1.7;
        }

        .placeholder {
          min-height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #444;
          color: #777;
          font-family: "Barlow Condensed", sans-serif;
          letter-spacing: 2px;
          text-align: center;
        }

        /* ================= JOIN ================= */

        .join {
          background: var(--bg);
        }

        .joinGrid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .joinCard {
          background: var(--panel);
          border: 1px solid var(--line);
          padding: 35px;
          min-height: 250px;
        }

        .joinCard .number {
          color: var(--acc);
          font-family: "Barlow Condensed", sans-serif;
          font-size: 20px;
          font-weight: 800;
        }

        .joinCard h3 {
          font-family: "Barlow Condensed", sans-serif;
          font-size: 36px;
          text-transform: uppercase;
          margin: 15px 0;
        }

        .joinCard p {
          color: var(--mute);
          line-height: 1.7;
        }

        .memberForm {
          max-width: 800px;
          margin: 50px auto 0;
          display: grid;
          gap: 14px;
        }

        .memberForm input,
        .memberForm textarea {
          width: 100%;
          background: var(--panel);
          border: 1px solid var(--line);
          color: white;
          padding: 16px;
          font-family: "Barlow", sans-serif;
          outline: none;
        }

        .memberForm input:focus,
        .memberForm textarea:focus {
          border-color: var(--acc);
        }

        .memberForm textarea {
          min-height: 130px;
          resize: vertical;
        }

        .memberForm button {
          padding: 16px;
          background: var(--acc);
          border: 1px solid var(--acc);
          color: white;
          font-family: "Barlow Condensed", sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .memberForm button:hover {
          background: transparent;
        }

        /* ================= SUPPORT ================= */

        .support {
          background: #101011;
        }

        .supportGrid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .supportCard {
          background: var(--panel);
          border: 1px solid var(--line);
          padding: 30px;
        }

        .supportCard h3 {
          font-family: "Barlow Condensed", sans-serif;
          font-size: 32px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .supportCard p {
          color: var(--mute);
          line-height: 1.8;
        }

        /* ================= CLOSING ================= */

        .closing {
          min-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 6%;
        }

        .closingInner {
          max-width: 900px;
          margin: 0 auto;
        }

        .closingLogo {
          display: block;
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin: 0 auto 25px;
        }

        .closingQuote {
          font-family: "Barlow Condensed", sans-serif;
          font-size: clamp(38px, 6vw, 75px);
          line-height: 0.95;
          text-transform: uppercase;
          font-weight: 800;
        }

        .closingQuote span {
          color: var(--acc);
        }

        /* ================= FOOTER ================= */

        footer {
          border-top: 1px solid var(--line);
          padding: 30px 6%;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: var(--mute);
          font-size: 14px;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 800px) {
          .navLinks {
            display: none;
          }

          .menuBtn {
            display: block;
          }

          .mobileMenu {
            position: fixed;
            top: 76px;
            left: 0;
            right: 0;
            z-index: 99;
            background: rgba(12, 12, 13, 0.98);
            border-bottom: 1px solid var(--line);
            display: flex;
            flex-direction: column;
            padding: 20px 6%;
          }

          .mobileMenu a {
            padding: 14px 0;
            border-bottom: 1px solid var(--line);
            font-family: "Barlow Condensed", sans-serif;
            text-transform: uppercase;
          }

          .hero {
            padding-top: 105px;
          }

          .logo {
            width: 130px;
            height: 130px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero h1 {
            font-size: 65px;
          }

          .teamPhotoWrap {
            margin-top: 40px;
          }

          .teamPhoto {
            max-height: 400px;
          }

          .groundGrid,
          .joinGrid,
          .supportGrid {
            grid-template-columns: 1fr;
          }

          section {
            padding: 80px 6%;
          }

          footer {
            flex-direction: column;
          }
        }
      `}</style>

      {/* NAV */}

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="navLogo">
          <img
            src="/images/logo.png.jpeg"
            alt="Zagreb Assassins logo"
          />
          <span>ZAGREB ASSASSINS</span>
        </a>

        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#history">History</a>
          <a href="#ground">Ground</a>
          <a href="#join">Join Us</a>
          <a href="#support">Support</a>
        </div>

        <button
          className="menuBtn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="mobileMenu">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#history" onClick={() => setMenuOpen(false)}>
            History
          </a>

          <a href="#ground" onClick={() => setMenuOpen(false)}>
            Ground
          </a>

          <a href="#join" onClick={() => setMenuOpen(false)}>
            Join Us
          </a>

          <a href="#support" onClick={() => setMenuOpen(false)}>
            Support
          </a>
        </div>
      )}

      <main>
        {/* HERO */}

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

          <div className="heroOverlay" />

          <div className="heroContent">
            <img
              className="logo"
              src="/images/logo.png.jpeg"
              alt="Zagreb Assassins logo"
            />

            <div className="eyebrow">
              ZAGREB • CROATIA
            </div>

            <h1>
              ZAGREB
              <br />
              <span>ASSASSINS</span>
            </h1>

            <p className="heroSubtitle">
              More than a cricket team. A community built on
              passion, friendship, competition and the love of
              the game.
            </p>

            <a href="#join" className="enterBtn">
              ENTER THE ASSASSINS
            </a>

            {/* TEAM PHOTO */}

            <div className="teamPhotoWrap">
              <img
                className="teamPhoto"
                src="/images/team.jpg.jpeg"
                alt="Zagreb Assassins cricket team"
              />

              <div className="teamPhotoLabel">
                ZAGREB ASSASSINS • CRICKET CLUB
              </div>
            </div>
          </div>
        </section>

        {/* HISTORY */}

        <section className="history" id="history">
          <div className="sectionHead">
            <div className="sectionKicker">
              Our Story
            </div>

            <h2 className="sectionTitle">
              Built To Compete
            </h2>

            <p className="sectionText">
              Zagreb Assassins is a cricket community growing
              together in Zagreb. From the first matches to the
              future, every player, supporter and friend is part
              of the story.
            </p>
          </div>

          <div className="timeline">
            <div className="timelineItem">
              <div className="year">2024</div>

              <h3>The Beginning</h3>

              <p>
                The foundation of Zagreb Assassins and the
                beginning of a new cricket journey in Zagreb.
              </p>
            </div>

            <div className="timelineItem">
              <div className="year">2025</div>

              <h3>Growing Stronger</h3>

              <p>
                More players, more matches and a stronger
                community around the club.
              </p>
            </div>

            <div className="timelineItem">
              <div className="year">2026</div>

              <h3>The Next Chapter</h3>

              <p>
                A new season with bigger ambitions, stronger
                teamwork and more cricket.
              </p>
            </div>

            <div className="timelineItem">
              <div className="year">FUTURE</div>

              <h3>Our Ambition</h3>

              <p>
                Build one of Zagreb's strongest cricket
                communities and create opportunities for
                everyone who loves the game.
              </p>
            </div>
          </div>
        </section>

        {/* GROUND */}

        <section className="ground" id="ground">
          <div className="sectionHead">
            <div className="sectionKicker">
              Home Ground
            </div>

            <h2 className="sectionTitle">
              Where We Play
            </h2>

            <p className="sectionText">
              Our home ground is where training, matches,
              friendships and unforgettable cricket moments
              come together.
            </p>
          </div>

          <div className="groundGrid">
            <div className="infoCard">
              <h3>Ground Details</h3>

              <p>
                <strong>Ground:</strong>
                <br />
                [CONFIRM GROUND NAME]
                <br />
                <br />

                <strong>Location:</strong>
                <br />
                Zagreb, Croatia
                <br />
                <br />

                <strong>Map:</strong>
                <br />
                [MAP URL]
              </p>
            </div>

            <div className="infoCard">
              <div className="placeholder">
                [ GROUND PHOTO ]
              </div>
            </div>
          </div>
        </section>

        {/* JOIN */}

        <section className="join" id="join">
          <div className="sectionHead">
            <div className="sectionKicker">
              Be Part Of It
            </div>

            <h2 className="sectionTitle">
              Join The Assassins
            </h2>

            <p className="sectionText">
              Whether you are an experienced cricketer, a
              beginner or simply someone who loves the game,
              there is a place for you.
            </p>
          </div>

          <div className="joinGrid">
            <div className="joinCard">
              <div className="number">01</div>

              <h3>Player</h3>

              <p>
                Join the team, train with us and represent
                Zagreb Assassins in matches and tournaments.
              </p>
            </div>

            <div className="joinCard">
              <div className="number">02</div>

              <h3>Community</h3>

              <p>
                Become part of our cricket community and help
                us grow the sport in Zagreb.
              </p>
            </div>

            <div className="joinCard">
              <div className="number">03</div>

              <h3>Supporter</h3>

              <p>
                Support the team, attend matches and be part
                of the atmosphere on and off the field.
              </p>
            </div>
          </div>

          {/* REGISTRATION FORM */}

          <form
            className="memberForm"
            action="https://formspree.io/f/xppqzzdd"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Zagreb Assassins Registration"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone / WhatsApp"
            />

            <textarea
              name="message"
              placeholder="Tell us about yourself..."
              required
            />

            <button type="submit">
              Send Request
            </button>
          </form>
        </section>

        {/* SUPPORT */}

        <section className="support" id="support">
          <div className="sectionHead">
            <div className="sectionKicker">
              Support The Club
            </div>

            <h2 className="sectionTitle">
              Help Us Grow
            </h2>

            <p className="sectionText">
              Every contribution helps us with equipment,
              ground expenses, tournaments and building a
              stronger cricket community.
            </p>
          </div>

          <div className="supportGrid">
            <div className="supportCard">
              <h3>Bank Support</h3>

              <p>
                <strong>IBAN:</strong>
                <br />
                [IBAN]
                <br />
                <br />

                <strong>Account Holder:</strong>
                <br />
                [ACCOUNT HOLDER]
              </p>
            </div>

            <div className="supportCard">
              <h3>Online Support</h3>

              <p>
                <strong>PayPal:</strong>
                <br />
                [PAYPAL LINK]
                <br />
                <br />

                <strong>Payment:</strong>
                <br />
                [PAYMENT METHOD]
              </p>
            </div>

            <div className="supportCard">
              <h3>Instagram</h3>

              <p>[INSTAGRAM URL]</p>
            </div>

            <div className="supportCard">
              <h3>Facebook</h3>

              <p>[FACEBOOK URL]</p>
            </div>
          </div>
        </section>

        {/* CLOSING */}

        <section className="closing">
          <div className="closingInner">
            <img
              className="closingLogo"
              src="/images/logo.png.jpeg"
              alt="Zagreb Assassins"
            />

            <div className="closingQuote">
              ONE TEAM.
              <br />
              ONE <span>FIGHT.</span>
              <br />
              ONE FAMILY.
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer>
        <div>
          © 2026 Zagreb Assassins Cricket Club
        </div>

        <div>
          [EMAIL] • [PHONE]
        </div>
      </footer>
    </>
  );
}