import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup1",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2018/12/language-meetup.jpg",
    address: "Some Adress",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "Meetup2",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2018/12/language-meetup.jpg",
    address: "Some Adress",
    description: "This is second meetup",
  },
  {
    id: "m3",
    title: "Meetup3",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2018/12/language-meetup.jpg",
    address: "Some Adress",
    description: "This is third meetup",
  },
  {
    id: "m4",
    title: "Meetup4",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2018/12/language-meetup.jpg",
    address: "Some Adress",
    description: "This is fourth meetup",
  },
];

function HomePage(props) {
  console.log(props.meetups);
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}
/*
export async function getStaticProps() {
  //fetch data from an API

  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 10, // generated in every 10 second data update frequency
  };
}
*/

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://dbuser:edgrHVHrTAVugw99@cluster0.g1hyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
