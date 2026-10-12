import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./App.css";

const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance · Classic",
    image: "/images/pride-and-prejudice.jpeg",
    description:
      "Follow Elizabeth Bennet as she navigates love, social expectations, and first impressions in Regency England.",
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic · Fiction",
    image: "/images/the great gatsby.jpeg",
    description:
      "Enter the glamorous world of the Jazz Age, where Jay Gatsby pursues a dream shaped by love, wealth, and ambition.",
  },
  {
    id: 3,
    title: "Animal Farm",
    author: "George Orwell",
    year: 1945,
    genre: "Satire · Political fiction",
    image: "/images/Animal farm.jpeg",
    description:
      "A group of farm animals rebels against their human owner, only to discover how power can corrupt their revolution.",
  },
];

function App() {
  return (
    <>
      <div className="App">
        <Navbar expand="lg" className="book-navbar">
          <Container>
            <Navbar.Brand href="#home" className="brand">
              <span className="brand-icon">✦</span>
              The Reading Room
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="book-navbar-nav" />

            <Navbar.Collapse id="book-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#books">Our Books</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <header className="hero-section" id="home">
          <Container>
            <p className="eyebrow">A LITTLE LIBRARY OF TIMELESS STORIES</p>

            <h1>Stories That Stay With Us.</h1>

            <p className="hero-description">
              Discover beloved classics, revisit unforgettable characters, and
              find your next literary adventure.
            </p>

            <a href="#books" className="explore-link">
              Explore the collection <span aria-hidden="true">↓</span>
            </a>
          </Container>
        </header>

        <section className="books-section" id="books">
          <Container>
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE COLLECTION</p>
                <h2>Our Favourite Classics</h2>
              </div>

              <p className="book-count">{books.length} books to discover</p>
            </div>

            <div className="row g-4">
              {books.map((book) => (
                <div className="col-12 col-md-6 col-lg-4" key={book.id}>
                  <Card className="book-card h-100">
                    <div className="book-image-wrapper">
                      <Card.Img
                        variant="top"
                        src={book.image}
                        alt={`Cover of ${book.title}`}
                        className="book-image"
                      />
                      <Badge className="year-badge">{book.year}</Badge>
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <p className="book-genre">{book.genre}</p>

                      <Card.Title className="book-title">
                        {book.title}
                      </Card.Title>

                      <Card.Subtitle className="book-author">
                        By {book.author}
                      </Card.Subtitle>

                      <Card.Text className="book-description">
                        {book.description}
                      </Card.Text>

                      <Button
                        variant="outline-success"
                        className="book-button mt-auto"
                        href={`#book-${book.id}`}
                        onClick={(event) => {
                          event.preventDefault();
                          alert(
                            `${book.title}\n\nBy ${book.author}\n\n${book.description}`,
                          );
                        }}
                      >
                        Discover this book <span aria-hidden="true">→</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="about-section" id="about">
          <Container>
            <p className="eyebrow">A NOTE FOR BOOK LOVERS</p>

            <h2>Every book opens a new world.</h2>

            <p>
              From timeless romances to thought-provoking stories, our little
              collection celebrates the books that continue to inspire readers
              across generations.
            </p>
          </Container>
        </section>

        <footer className="book-footer">
          <Container>
            <p>
              The Reading Room <span>·</span> Made for the love of books.
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
