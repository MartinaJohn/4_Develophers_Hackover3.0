import { Divider, Row, Tag } from "antd";
import React from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/Event.module.scss";
import { ClockCircleOutlined } from "@ant-design/icons";

export default function Events() {
  

  const eventData = [
    {
      name: "Hackover",
      description:
        "explore your innate coding skills",
      time: "10:10:32",
      color: "#00da68",
    },
    {
      name: "Music Concert",
      description:
        "lorem igvdyfglbgd;onoihgnob",
      time: "10:10:32",
      color: "#51ABFF",
    },
    {
      name: "Hacktoberfest",
      description:
        "This topic deals with the hacktoberfest",
      time: "10:10:32",
      color: "#EBD72C",
    },
    {
      name:
        "Beach Cleanups",
      description:
        "This is a description about beach cleanups",
      time: "10:10:32",
      color: "#FF97BA",
    },
    {
      name:
        "abcdef",
      description:
        "I am damn tired",
      time: "10:10:32",
      language: "(past event)",
      color: "#FFAB57",
    },
    {
      name: "Some hackathon",
      description:
        "lorem ipsum gfdkidurfkfjvj",
      time: "10:10:32",
      language: "English",
      color: "#BCA8EB",
    },
    
  ];

  return (
    <div className={styles.courseContainer}>
      <Navbar />
      <div className={styles.containerController}>
        <h1 className={styles.heading}>Events</h1>
        <Divider className={styles.divider} />
        <h2>Event list</h2>
          <Row>
            {eventData.map((item, index) => (
              <div
                className={styles.moduleItem}
                style={{ borderColor: `${item.color}` }}
                key={index}
        
              >
                <h3>{item.name}</h3>
                <h4>{item.description}</h4>
                <Row className={styles.moduleFooter}>
                  <Tag icon={<ClockCircleOutlined />} color="processing">
                    {item.time}
                  </Tag>
                  <Tag color="default">{item.language}</Tag>
                </Row>
              </div>
            ))}
          </Row>
    
      </div>
    </div>
  );
}