import React, { Component } from "react";
import { FaTwitch, FaTwitter, FontAwesome } from "react-icons/fa";
import "../App.css";

class RandomQuote extends Component {
  constructor(props) {
    super(props);

    this.state = { quote: "", author: "" };

    this.wrapperMethod = this.wrapperMethod.bind(this);
  }
  quote_author = [
    { quote: "Work it harder", author: "Kanye west" },
    { quote: "Make it better", author: "Kanye east" },
    { quote: "Do it faster", author: "Kanye north" },
    { quote: "Make it stronger", author: "Kanye south" },
  ];

  generateQuote() {
    let randomIndex = Math.floor(Math.random() * 4);

    this.setState({
      quote: this.quote_author[randomIndex].quote,
      author: this.quote_author[randomIndex].author,
    });
  }

  componentDidMount() {
    this.generateQuote();
  }
  getRandomColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementsByTagName("body")[0].style.backgroundColor =
      "#" + randomColor;

    var svgs = document.getElementsByTagName("svg");
    var q_a = document.getElementsByTagName("p");
    console.log(typeof svgs);
    console.log(svgs[0]);
    svgs[0].style.color = "#" + randomColor;
    svgs[1].style.color = "#" + randomColor;
    q_a[0].style.color = "#" + randomColor;
    q_a[1].style.color = "#" + randomColor;
  }
  wrapperMethod() {
    this.generateQuote();
    this.getRandomColor();
  }

  render() {
    const { quote, author } = this.state;
    return (
      <div id="quote-box" className="center change_color">
        <p id="text">"{quote}</p>
        <p id="author">-{author}</p>
        <div id="clickable">
          <button id="new-quote" onClick={this.wrapperMethod}>
            !JAY-Z
          </button>
          <a href="twitter.com/intent/tweet" target="_blank" className="social">
            <FaTwitter></FaTwitter>
          </a>
          <a href="/bruh" onClick={() => {alert("ayoo gil get ova heeeeeeee")}} target="blank" className="social">
            <FaTwitch></FaTwitch>
          </a>
        </div>
      </div>
    );
  }
}

export default RandomQuote;
