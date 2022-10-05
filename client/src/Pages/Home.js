import { Button, Card, Col, Divider, Row } from "antd";
import React from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Col className={styles.containerController}>
        <Col className={styles.text}>
          <h1>
            Get to
            <br />
            #Socialise
          </h1>
          <h2>Discover, Engage and Create Lifetime Memories</h2>
          <Button type="primary" className={styles.button}>
            <a href="/register">Register to enroll in an event!</a>
          </Button>
        </Col>
      </Col>
      <div className={styles.features}>
        <h1 className={styles.heading}>Why Choose Us?</h1>
        <Divider className={styles.divider} />
        <Row className={styles.cardController}>
          <Card className={styles.card}>
            <h1>Connect</h1>
            <p>
              You get to connect with all the enthus out there! And also chat with the organizer.
            </p>
            <img alt="connect with people" src={"/images/1.jpg"} />
          </Card>
          <Card className={styles.card}>
            <h1>Gift</h1>
            <p>
              You can gift an event to your loved ones!
            </p>
            <img alt="gift an event" src={"/images/2gift.png"} />
          </Card>
          <Card className={styles.card}>
            <h1>Socialise</h1>
            <p>
              Be a part of the community that is meant to socialize!
            </p>
            <img alt="social events" src={"/images/3.png"} /> 
          </Card>
        </Row>

      </div>
      <h6 >&copy; Develophers 2022</h6>
      <Navbar />
    </div>
  );
}