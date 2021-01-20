import React from "react"

// team images
import Anita from "../../images/team/anita.jpeg"
import Blossom from "../../images/team/me.jpeg"
import Remi from "../../images/team/remi.jpeg"
import Delight from "../../images/team/Delight.jpeg"
import Sandra from "../../images/team/sandra.jpeg"
import Treasure from "../../images/team/Treasure.jpeg"
import Faith from "../../images/team/faith.jpeg"

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <p className="about__description">
          <span className="about__description--title">AfriG </span>fully means
          African Grace. AfriG is a fashion brand that portrays Africa, Fashion,
          Youth and Grace.
        </p>

        <ul className="about__lists">
          <li>
            <span className="about__lists--header">Africa:</span> The culture of
            Afirca and the beauty in the ankara style
          </li>
          <li>
            {" "}
            <span className="about__lists--header"> Fashion: </span>The classy
            and breath taking aura of your presence
          </li>
          <li>
            {" "}
            <span className="about__lists--header"> Youth: </span>The feeling of
            putting on the wears and accessories
          </li>
          <li>
            {" "}
            <span className="about__lists--header">Grace: </span> The fertile
            and rich aura that comes with the wears
          </li>
        </ul>

        <p className="about__description">
          <span className="about__description--title">AfriG </span> makes
          affordable, classy and casual wears and accessories to your taste.
          AfriG has various wears:
        </p>
        <ul className="about__lists">
          <li className="about__lists--links">
            AfriG scarves, Ankara turbans and face caps
          </li>
          <li className="about__lists--links">AfriG casual wears</li>
          <li className="about__lists--links">AfriG Kimonos</li>
          <li className="about__lists--links">AfriG bags</li>
          <li className="about__lists--links">AfriG attachables</li>
          <li className="about__lists--links">AfriG custom orders</li>
        </ul>
      </div>

      <div className="about__team">
        <h1 className="about__team--header">The Afrig team</h1>
        <p className="about__team--tagline">Meet the spectacular seven</p>

        <div className="about__team--members">
          <div className="about__team--member">
            <img src={Anita} alt="Anita" />
            <p>
              Anita Alawode
              <span className="about__team--span">Founder and CEO</span>
            </p>
          </div>
          <div className="about__team--member">
            <img src={Blossom} alt="Blossom" />
            <p>
              Blossom Babalola
              <span className="about__team--span">Website designer</span>
            </p>
          </div>
          <div className="about__team--member">
            <img src={Remi} alt="Remi" />
            <p>
              Remi Omojola
              <span className="about__team--span">
                Customer Care and Social Media Manager
              </span>
            </p>
          </div>
          <div className="about__team--member">
            <img src={Delight} alt="Delight" />
            <p>
              Delight Babalola
              <span className="about__team--span">
                Marketing and Sales(Lagos Chapter)
              </span>
            </p>
          </div>
          <div className="about__team--member">
            <img src={Treasure} alt="Treasure" />
            <p>
              Treasure Babalola
              <span className="about__team--span">
                Marketing and Sales(Ibadan / Iwo Chapter)
              </span>
            </p>
          </div>
          <div className="about__team--member">
            <img src={Faith} alt="Faith" />
            <p>
              Oludiran Faith
              <span className="about__team--span">
                Marketing and Sales(Calabar / Abuja Chapter)
              </span>
            </p>
          </div>
          <div className="about__team--member">
            <img src={Sandra} alt="Sandra" />
            <p>
              Adenike Sandra
              <span className="about__team--span">
                Purchasing and Production
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
