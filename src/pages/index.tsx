import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Button from "../components/button";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div>
        <section className="min-h-screen mx-auto text-center w-5/6 md:w-3/6 ">
          <h1 className="mt-16 md:mt-24 capitalize poppins font-black text-4xl md:text-5xl leading-normal">
            Welcome to Root and the offspring of david ministry
          </h1>
          <p className="flex flex-col mx-5">
            <span className="my-5">
              Welcome to The Root and the Offspring of David Ministry, where love knows no bounds and
              generosity is a way of life. We extend a warm invitation for you
              to join our family, a community that is dedicated to witnessing
              the extraordinary works of Jesus.
            </span>
            <span className="mt-5">
              With open hearts and open doors in the Church,
              we are more than just a church - we are a thriving community.
              Join us as we come together to worship, learn, and grow in faith.
            </span>
          </p>
          <Link
            className="block mt-10 md:mt-20 bg-red-500 text-white font-semibold hover:bg-red-600 text-center py-5 rounded-xl"
            to="/"
          >
            About Us
          </Link>
        </section>

        <section className="hero min-h-screen text-white grid md:grid-cols-2 grid-cols-1 gap-10 py-10">
          <div className="md:w-3/5 w-4/5 ml-5">
            <h3>Explore & Get Involved</h3>
            <h1 className="text-2xl poppins font-bold">For The Family</h1>
            <p className="text-sm md:w-4/5">
              Explore the life of our church including our vibrant ministries,
              upcoming events, and service opportunities.
            </p>
            <Button link="/" title="Explore" />
          </div>
          <div className="md:w-3/5 w-4/5 ml-5">
            <h3>Explore & Get Involved</h3>
            <h1 className="text-2xl poppins font-bold">Next Steps</h1>
            <p className="text-sm md:w-4/5">
              Explore the life of our church including our vibrant ministries,
              upcoming events, and service opportunities.
            </p>
            <Button link="/" title="Take your next step" />
          </div>
          <div className="md:w-3/5 w-4/5 ml-5">
            <h3>Explore & Get Involved</h3>
            <h1 className="text-2xl poppins font-bold">For The Family</h1>
            <p className="text-sm md:w-4/5">
              Explore the life of our church including our vibrant ministries,
              upcoming events, and service opportunities.
            </p>
            <Button link="/" title="Explore" />
          </div>
          <div className="md:w-3/5 w-4/5 ml-5">
            <h3>Explore & Get Involved</h3>
            <h1 className="text-2xl poppins font-bold">For The Family</h1>
            <p className="text-sm md:w-4/5">
              Explore the life of our church including our vibrant ministries,
              upcoming events, and service opportunities.
            </p>
            <Button link="/" title="Explore" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
