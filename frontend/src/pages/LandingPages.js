import React, { Component } from "react";
import axios from "axios";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import landingPage from "../json/landingPage.json";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
    this.state = {
      mostPicked: [],
      categories: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);

    this.loadData();
  }

  async loadData() {
    try {
      const [mostPickedResponse, categoriesResponse] = await Promise.all([
        axios.get("https://mern-cozy-havens.vercel.app/mostPicked"),
        axios.get("https://mern-cozy-havens.vercel.app/categories"),
      ]);

      console.log("MostPicked Data:", mostPickedResponse.data);
      console.log("Categories Data:", categoriesResponse.data);

      this.setState({
        mostPicked: mostPickedResponse.data,
        categories: categoriesResponse.data,
        loading: false,
      });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { mostPicked, categories, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={mostPicked} />
        <Categories data={categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
