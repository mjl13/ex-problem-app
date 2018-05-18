var React = require('react');
import {MyTable, SittingHeader, SiteHeader} from '../general_comps';
import {Link} from 'react-router-dom';

export class CoursePage extends React.Component {

	constructor(props) {
		super(props);
		var panel = this.props.match.params.panel; // can be info or sets
		this.state = {
			course: {},
			isLoading: true,
			panel: panel,
		}
	}

	componentDidMount() {
		var course_id = this.props.match.params.course_id;
		var api_path = '/api/courses/'+course_id;
		fetch(api_path)
		.then((course) => {
			return course.json()
		})
		.then((course) => {
			this.setState({
				course: course[0],
				isLoading: false
			})
		})
		.catch((error) => {
			console.log('parsing failed', error)
		})
	}

	componentWillUpdate(){

	}

	render() {

		var course_id = this.props.match.params.course_id;

		var panel = null;
		if (this.props.match.params.panel === 'info'){
			panel = <CourseInfo course={this.state.course}/>
		}
		else if (this.props.match.params.panel === 'sets'){
			panel = <CourseSets sets={this.state.course.problem_set_ids} courseId={course_id}/>
		}
		if(!this.state.isLoading){
			return(
				<div>
					<SiteHeader/>
					<div className='main-content-wrapper-no-flex'>
						<section className='dynamic-box-wrapper'>
							<CourseNav courseId={course_id} handleNav={this.handleNav.bind(this)} panel={this.props.match.params.panel}/>
							<div className='padded-container' id='dynamic-box'>
								{panel}
							</div>
						</section>
					</div>
				</div>
			)
		}
		else {
			return (<SiteHeader/>)
		}
	}

	handleNav() {
		this.setState({panel: this.props.match.params.panel});
	}

}


export class CourseInfo extends React.Component {
	render(){

		var course = this.props.course;

		return(
			<ul className='course-info-list'>
				<li className='course-info-row'>
					<h3 className='course-info-category'>Course Title</h3>
					<p><span>{course.title}</span></p>
				</li>
				<li className='course-info-row'>
					<h3 className='course-info-category'>Course Code</h3>
					<p><span>{course.code}</span></p>
				</li>
				<li className='course-info-row'>
					<h3 className='course-info-category'>Instructors</h3>
					<p>{course.instructors.join(', ')}</p>	
				</li>
				<li className='course-info-row'>
					<h3 className='course-info-category'>Subject</h3>
					<p><span>{course.subject}</span></p>	
				</li>
				<li className='course-info-row'>
					<h3 className='course-info-category'>Description</h3>
					<p>
						{course.description}
					</p>	
				</li>
			</ul>
		)
	}
}

export class CourseSets extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			sets: [],
			isLoading: true
		}
	}

	componentDidMount(){
		var api_path = '/api/courses/'+this.props.courseId+'/problemsets';
		fetch(api_path)
		.then((sets) => {
			return sets.json()
		})
		.then((sets) => {
			this.setState({
				sets: sets,
				isLoading: false
			})
		})
		.catch((error) => {
			console.log('parsing failed', error)
		})
	}

	render(){

		console.log(this.state.sets);

		var headers = [
							{
								text: 'Title',
								className: 'set-title-category-col'
							},
							{
								text: 'Date',
								className: 'set-date-category-col'
							},
							{
								text: 'Authors',
								className: 'set-authors-category-col'
							},
							{
								text: 'Topics',
								className: 'set-topics-category-col'
							}
						]

		var sets = this.state.sets;
		if(!this.state.isLoading){
			sets = sets.map((set, index) => {
					return(
						[
							{
								text: set.title,
								className: 'set-title-category-col',
								link: '/problemsets/'+set.problem_set_id
							},
							{
								text: set.date,
								className: 'set-date-category-col',
								link: null
							},
							{
								text: set.authors.join(', '),
								className: 'set-authors-category-col',
								link: null
							},
							{
								text: 'Add field to schema',
								className: 'set-topics-category-col',
								link: null
							}
						]
					)
				}
			)
		}

		// var rows = [
		// 				[
		// 					{
		// 						text: 'Solid Mechanics',
		// 						className: 'courses-title-category-col',
		// 						link: '/courses/0'
		// 					},
		// 					{
		// 						text: 'ENGN 0310',
		// 						className: 'courses-code-category-col',
		// 						link: null
		// 					},
		// 					{
		// 						text: 'Huajian Gao, Christian Franck',
		// 						className: 'courses-instructors-category-col',
		// 						link: null
		// 					},
		// 					{
		// 						text: 'Brown University',
		// 						className: 'courses-title-category-col',
		// 						link: null
		// 					}
		// 				]
		// 			]


		if(!this.state.isLoading){
			return (
				<MyTable headers={headers} rows={sets} />
			)
		}
		else {
			return (<div></div>)
		}
	}
}

export class CourseNav extends React.Component {
	render(){

		var course_id = this.props.courseId;
		var url = `/courses/${course_id}/`;
		var panel = this.props.panel;

		var selected_info = '';
		var selected_sets = '';

		if(panel === 'info'){
			selected_info = 'selected-category';
		}
		if(panel === 'sets'){
			selected_sets = 'selected-category';
		}

		return (
			<div>
				<nav className='course-nav'>
					<h2 className={'nav-category '+selected_info} onClick={this.props.handleNav}>
						<Link to={url+'info'}>Information</Link>
					</h2>
					<h2 className={'nav-category '+selected_sets} onClick={this.props.handleNav}>
						<Link to={url+'sets'}>Sets</Link>
					</h2>
				</nav>
			</div>
		)
	}

}










