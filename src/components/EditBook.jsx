import React from "react";
import axios from "axios";

class EditBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      language: "",
      pages: "",
      published_date: "",
      publisher_id: ""
    };
  }

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    const result = await axios.get("http://localhost:4000/books/" + id);
    this.setState(result.data);
    console.log(result.data);
    console.log(this.state);
  };

  handleSubmit = async e => {
    e.preventDefault();
    let id = this.props.match.params.id;
    const result = await axios.put(
      "http://localhost:4000/books/" + id,
      this.state
    );
    result.status === 200
      ? alert("Data Updated Successfully!")
      : alert("Failed!");
  };

  updateField = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Adding new book</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="title">Title :</label>
          <input
            id="title"
            value={this.state.title}
            className="form-control"
            type="text"
            name="title"
            onChange={this.updateField}
          />

          <label for="author">Author :</label>
          <input
            id="author"
            value={this.state.author}
            className="form-control"
            type="text"
            name="author"
            onChange={this.updateField}
          />

          <label for="language">Language :</label>
          <input
            id="language"
            value={this.state.language}
            className="form-control"
            type="text"
            name="language"
            onChange={this.updateField}
          />

          <label for="pages">Pages :</label>
          <input
            id="pages"
            value={this.state.pages}
            className="form-control"
            type="number"
            name="pages"
            onChange={this.updateField}
          />

          <label for="published_date">Published date :</label>
          <input
            id="published_date"
            value={this.state.published_date}
            className="form-control"
            type="date"
            name="published_date"
            onChange={this.updateField}
          />

          <label for="publisher_id">Publisher Id :</label>
          <input
            id="publisher_id"
            value={this.state.publisher_id}
            className="form-control"
            type="text"
            name="publisher_id"
            onChange={this.updateField}
          />

          <input type="submit" className="btn btn-primary mt-3" />
        </form>
      </div>
    );
  }
}

export default EditBook;
