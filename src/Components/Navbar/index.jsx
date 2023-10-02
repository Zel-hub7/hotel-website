import "./style.css";
import home from "../../assets/home.png";
import about from "../../assets/about.png";
import contact from "../../assets/contact.png";
import gallery from "../../assets/gallery.png";
import service from "../../assets/service.png";
import special from "../../assets/special.png";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.fromTo(
      ".menu",
      {
        opacity: 0,
      },
      {
        top: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
    tl.current.to(
      ".line1",
      {
        y: 16,
        rotate: "40",
        duration: 0.5,
        width: "100%",
      },
      "="
    );
    tl.current.to(
      ".line2",
      {
        y: -12,
        rotate: "-45",
        duration: 0.5,
      },
      "="
    );
    tl.current.fromTo(
      ".menu__item",
      {
        opacity: 0,
        y: "-100vh",
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "elastic",
        duration: 1,
      }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
      </div>
      <div className="menu">
        <br />
        <Link to="/">
          <div className="menu__item">
            <h5 className="menu__item-link" style={{ color: "white" }}>
              Home
            </h5>
            <img className="menu__item-img" src={home} loading="lazy" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>Home - Home - Home - Home - Home - Home - Home</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div className="menu__item">
            <h5 className="menu__item-link" style={{ color: "white" }}>
              The Hotel
            </h5>
            <img className="menu__item-img" src={about} loading="lazy" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  The Hotel - The Hotel - The Hotel - The Hotel - The Hotel -
                  The Hotel - The Hotel
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/gallery">
          <div className="menu__item">
            <h5 className="menu__item-link" style={{ color: "white" }}>
              Gallery
            </h5>
            <img className="menu__item-img" src={gallery} loading="lazy" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Gallery - Gallery - Gallery - Gallery - Gallery - Gallery -
                  Gallery
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/services">
          <div className="menu__item">
            <h5 className="menu__item-link" style={{ color: "white" }}>
              Services
            </h5>
            <img className="menu__item-img" src={service} loading="lazy" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Services - Services - Services - Services - Services -
                  Services - Services
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/special-offers">
          <div className="menu__item">
            <h5 className="menu__item-link" style={{ color: "white" }}>
              Special Offers
            </h5>
            <img className="menu__item-img" src={special} loading="lazy" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Special Offers - Special Offers - Special Offers - Special
                  Offers - Special Offers - Special Offers - Special Offers
                </span>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Contact">
          <div className="menu__item">
            <h5 className="menu__item-link" style={{ color: "white" }}>
              Contact
            </h5>
            <img className="menu__item-img" src={contact} loading="lazy" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Contact - Contact - Contact - Contact - Contact - Contact -
                  Contact
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
