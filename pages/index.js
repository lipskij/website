import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../component/Nav";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { VscArrowDown, VscArrowUp } from "react-icons/vsc";
import {
  SiNextDotJs,
  SiJavascript,
  SiGatsby,
  SiMeteor,
  SiCss3,
  SiReact,
} from "react-icons/si";
import ContactForm from "../component/ContactForm";

export default function Home() {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    if (ref.current && ref1.current && ref2.current && ref3.current) {
      observer.observe(ref.current);
      observer.observe(ref1.current);
      observer.observe(ref3.current);
      observer.observe(ref2.current);
    }
  }, [ref, ref1, ref2, ref3]);

  const today = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>Emil Web Developer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Emil Lipskij web developer front end'
        />
      </Head>
      <a name='home'></a>
      <Nav />
      <main className={styles.main}>
        <div className='side-icons'>
          <Link href='https://github.com/lipskij'>
            <a
              className='footer-icon'
              href='https://github.com/lipskij'
              target='_blank'
              aria-label='github'
              rel='noreferrer'
            >
              <AiFillGithub style={{color: 'lightyellow'}} size={30} />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/emil-lipskij-6920831b2/'>
            <a
              className='footer-icon'
              href='https://www.linkedin.com/in/emil-lipskij-6920831b2/'
              target='_blank'
              aria-label='linkedin'
              rel='noreferrer'
            >
              <AiFillLinkedin style={{color: 'lightyellow'}} size={30} />
            </a>
          </Link>
        </div>
        <section className={styles.bannerSection}>
          <video autoPlay muted loop>
            <source src='video.webm' type='video/webm' />
            {/* <source src='video.mp4' type='video/mp4' /> */}
          </video>
          <h1 className={styles.title}>Hi. I'm Emil</h1>
          <h2>Front End web developer</h2>

          <button>
            <Link href='#contacts'>GET IN TOUCH</Link>
          </button>

          <div className={styles.secondTxt}>
            <p>I code intresting interactive web sites</p>
            <p>Using tools like HTML, CSS3 and JavaScript</p>
            <a href='#about' aria-label='about'>
              <VscArrowDown size={50} />
            </a>
          </div>
        </section>

        <a name='about'></a>

        <section className={styles.aboutSection}>
          <h2>ABOUT</h2>
          <div ref={ref} className={styles.aboutTxt}>
            <p>
              I'm a Front-End Developer from Vilnius Lithuania.<br></br>I enjoy
              creating responsive,fast-loading, dynamic user experiences.
              <br></br>
              Finished Front End Masters online courses.<br></br>
              Previously worked with circus troupe as an acrobat and juggler.
            </p>
          </div>
          <div className={styles.icons}>
            <SiJavascript size={50} />
            <SiCss3 size={50} />
            <SiReact size={50} />
            <SiNextDotJs size={50} />
            <SiGatsby size={50} />
            <SiMeteor size={50} />
          </div>

          <a href='#projects' aria-label='projects'>
            <VscArrowDown size={30} />
          </a>
        </section>

        <a name='projects'></a>

        <section className={styles.projectSection}>
          <h2>PROJECTS</h2>
          <div className={styles.projectGallery}>
            <Link href='https://skidoc.fr/'>
              <a rel='noopener' aria-label='project' target='_blank'>
                <picture>
                  <source srcSet='ski.webp' />
                  <img ref={ref1} src='ski.png' alt='project' />
                </picture>
              </a>
            </Link>
            <p>
              Creating internal stock management system using NoSQL, meteor and
              React. Using AWS and working with CI/CD.
              <Link href='https://skidoc.fr/'>
                <a
                  className={styles.projectLinks}
                  rel='noopener'
                  aria-label='project'
                  target='_blank'
                >
                  Click to see.
                </a>
              </Link>
            </p>

            <Link href='https://vaskichi.meteorapp.com/'>
              <a rel='noopener' aria-label='project' target='_blank'>
                <picture>
                  <source srcSet='game.webp' />
                  <img ref={ref2} src='game.jpeg' alt='project' />
                </picture>
              </a>
            </Link>
            <p>
              This was just a learning project,but ended up being quite fun.{" "}
              <br></br>
              For this game i used MeteorJs, React, MongoDB.
              <Link href='https://vaskichi.meteorapp.com/'>
                <a
                  className={styles.projectLinks}
                  rel='noopener'
                  aria-label='project'
                  target='_blank'
                >
                  Click to see.
                </a>
              </Link>
            </p>
            <Link href='https://covid-19-graph-ltu.netlify.app/'>
              <a rel='noopener' aria-label='project' target='_blank'>
                <picture>
                  <source srcSet='covid11.webp' />
                  <img ref={ref3} src='covid.png' alt='project' />
                </picture>
              </a>
            </Link>
            <p>
              A React project to track COVID - 19 cases in my country.
              <br></br>
              Data was used from external API along with Axios for HTTP
              requests.
              <Link href='https://covid-19-graph-ltu.netlify.app/'>
                <a
                  className={styles.projectLinks}
                  rel='noopener'
                  aria-label='project'
                  target='_blank'
                >
                  Click to see.
                </a>
              </Link>
            </p>
          </div>
          <div className={styles.more}>
            <p>Much more on my GitHub</p>
            <Link href='https://github.com/lipskij' target='_blank'>
              <a
                className='footer-icon'
                href='https://github.com/lipskij'
                target='_blank'
                aria-label='github'
                rel='noreferrer'
              >
                <button>CHECK IT</button>
              </a>
            </Link>
          </div>
        </section>

        <a name='contacts'></a>
        <section>
          <ContactForm />
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <Link href='https://github.com/lipskij'>
            <a
              className='footer-icon'
              href='https://github.com/lipskij'
              target='_blank'
              aria-label='github'
              rel='noreferrer'
            >
              <AiFillGithub size={30} />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/emil-lipskij-6920831b2/'>
            <a
              className='footer-icon'
              href='https://www.linkedin.com/in/emil-lipskij-6920831b2/'
              target='_blank'
              aria-label='linkedin'
              rel='noreferrer'
            >
              <AiFillLinkedin size={30} />
            </a>
          </Link>
        </div>
        <p>Made By Emil Lipskij 💻 {today}</p>
      </footer>
    </div>
  );
}
