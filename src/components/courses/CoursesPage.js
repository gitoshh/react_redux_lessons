import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/CourseActions';
import * as authorActions from '../../redux/actions/AuthorActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
	// state = {
	// 	course: {
	// 		title: '',
	// 	},
	// };
	//
	// handleChange = (event) => {
	// 	const course = { ...this.state.course, title: event.target.value };
	// 	this.setState({ course });
	// };
	//
	// handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	debugger;
	// 	this.props.actions.createCourse(this.state.course);
	// };

	componentDidMount() {
		const {courses, authors, actions} = this.props;

		if (courses.length === 0){
			actions.loadCourses().catch(error => {
				alert("Loading courses failed" + error);
			});
		}

		if (authors.length === 0){
			actions.loadAuthors().catch(error => {
				alert("Loading authors failed" + error);
			});
		}

	}

	render() {
		return (
			<>
				<h2>Courses</h2>
				<CourseList courses={this.props.courses} />
				{/*{this.props.courses.map((course) => (*/}
				{/*	<div key={course.title}>{course.title}</div>*/}
				{/*))}*/}
			</>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps({courses, authors}) {
	return {
		courses: authors.length === 0 ? [] : courses.map(course => {
			return {
				...course,
				authorName: authors.find(a => a.id === course.authorId).name
			};
			}),
		authors
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
			loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
