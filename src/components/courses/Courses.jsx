import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.action.addCourse(this.state.course);
  }

  render() {
    const { title } = this.state.course;
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Courses</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={title}
            onChange={this.handleChange}
            type="text"
            placeholder="Course Name"
            required
          />
          <button type="submit">Submit</button>
        </form>
        {courses.map((course) => {
          return <p key={course.title}>{course.title}</p>;
        })}
      </div>
    );
  }
}

Courses.propTypes = {
  action: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courseReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
