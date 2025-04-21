import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/button";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div>
        <section className="py-16 min-h-screen mx-auto text-center w-11/12 md:w-3/6 ">
          <h1 className=" md:mt-24 capitalize font-black text-4xl md:text-5xl leading-normal">
            Welcome to The Root and the offspring of david ministry
          </h1>
          <p className="flex flex-col mx-3 mt-10 text-[19px]">
            <span className="my-5 ">
              Welcome to The Root and the Offspring of David Ministry, where
              love is limitless and generosity is our way of life. We warmly
              invite you to become part of our family, a community committed to
              witnessing the incredible works of Jesus. With hearts open and
              doors wide, we are not just a church—we are a vibrant community.
              Come join us as we gather to worship, learn, and grow in faith
              together.
            </span>
            <span className="mt-5">
              With hearts open and doors wide, we are not just a church—we are a
              vibrant community. Come join us as we gather to worship, learn,
              and grow in faith together.
            </span>
          </p>
          <Link
            className="block uppercase text-xl mt-10 md:mt-20 bg-red-500 text-white font-semibold hover:bg-red-600 text-center py-5 rounded-xl"
            to="/"
          >
            About Us
          </Link>
        </section>

        <section style={{marginTop:`10rem`}} className="hero min-h-screen text-white grid md:grid-cols-2 grid-cols-1 gap-y-10">
          <div className="">
            <StaticImage
              quality={100}
              className="w-full h-80 mt-10"
              src="../images/churchimg4.jpg"
              alt="hero"
            />
            <div className="flex flex-col md:w-3/4 mx-8">
              <h3 className="text-[18px] mt-7">Grow with us</h3>
              <h1 className="text-5xl tracking-tighter montserrat font-black my-4">
                For The Family
              </h1>
              <p className="md:w-4/5 text-[18px]">
                We offer a variety of enriching programs and supportive networks
                designed to nurture faith, strengthen bonds, and provide a place
                where every member feels loved and connected on their spiritual
                journey
              </p>
              <div className="w-4/5 my-2">
                <Button link="/" title="Explore" />
              </div>
            </div>
          </div>
          <div className="">
            <StaticImage
              quality={100}
              className="w-full h-80"
              src="../images/churchimg2.jpg"
              alt="hero"
            />
            <div className="flex flex-col w-3/4 ml-10">
              <h3 className="text-[18px] mt-7">Explore & Get Involved</h3>
              <h1 className="text-5xl tracking-tighter montserrat font-black my-4">
                Next Steps
              </h1>
              <p className="md:w-4/5 text-[18px]">
                Whether you're new to our church, looking to get more involved
                or seeking to deepen your spiritual understanding Complete a
                Connect Card, discover our dynamic ministries and service
                opportunities, and much more.
              </p>
              <div className="w-4/5 my-2">
                <Button link="/" title="Take your next step" />
              </div>
            </div>
          </div>
          <div className="">
            <StaticImage
              quality={100}
              className="w-full h-80"
              src="../images/pray.jpg"
              alt="hero"
            />

            <div className="flex flex-col w-3/4 mx-8">
              <h3 className="text-[18px] mt-7">
                {" "}
                Seeking direction through prayer
              </h3>
              <h1 className="text-5xl tracking-tighter montserrat font-black my-4">
                Pray & Find Help
              </h1>
              <p className="md:w-4/5 text-[18px]">
                In moments of uncertainty, challenge, or simply a desire for
                deeper connection, prayer offers a powerful pathway to guidance.
                Reach out in prayer and explore the ways we can offer support on
                your journey
              </p>
              <div className="w-4/5 my-2">
                <Button link="/" title="Find help" />
              </div>
            </div>
          </div>
          <div className="">
            <StaticImage
              quality={100}
              className="w-full h-80"
              src="../images/media.jpg"
              alt="hero"
            />

            <div className="flex flex-col w-3/4 mx-8">
              <h3 className="text-[18px] mt-7">
                {" "}
               Explore videos, podcasts, articles and more
              </h3>
              <h1 className="text-5xl tracking-tighter montserrat font-black my-4">
               Media & Messages
              </h1>
              <p className="md:w-4/5 text-[18px]">
                We are committed to sharing our messages of hope, love and faith through variety
                of accessible platform. Allowing you to connect with our community and deepen your 
                spiritual journey
              </p>
              <div className="w-4/5 my-2">
                <Button link="/" title="Find help" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
