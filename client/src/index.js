var React = require('react');
var ReactDOM = require('react-dom');

require('./styles/reset.css');
require('./styles/main.scss');
require('./styles/problem-page/problem.scss');
require('./styles/problem-page/information.scss');
require('./styles/problem-page/solution.scss');
require('./styles/table.scss');
require('./styles/home-page/browse-courses.scss');
require('./styles/course-page/course-sets.scss');
require('./styles/course-page/course.scss');
require('./styles/course-page/course-info.scss');
require('./styles/set-page/sets.scss');


// require('katex/dist/katex.min.css');

import {Caret, ParagraphText, SpanText, BlockMathWrapper, LineBarHeader, SiteHeader} from './components/general_comps'
import {SolutionContainer, Solution, SolutionAccordion, AccordionHeader, AccordionSectionNav, ParagraphList, AccordionSection, AccordionSectionTitleRow, AccordionSectionContent, TwoColumnList, TwoColumnListRow, ColumnLeft, ColumnRight} from './components/problem-page/solution_comps'
import {ProblemContainer, ProblemDeclaration, QuestionImage, QuestionList} from './components/problem-page/problem_comps'
import {InformationContainer, InformationContent, InformationList, InformationInlineText} from './components/problem-page/information_comps'

import {HomePage} from './components/home-page/home_comps';
import {CoursePage} from './components/course-page/course_comps';
import {SetPage} from './components/set-page/set_comps';


import {BrowserRouter, Route, Switch} from 'react-router-dom';


class ProblemPage extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			problem: {},
			isLoading: true
		}
	}

	componentDidMount(){
		var problem_id = this.props.match.params.problem_id;
		var api_path = '/api/problems/'+problem_id;
		fetch(api_path)
		.then((problem) => {
			return problem.json()
		})
		.then((problem) => {
			this.setState({
				problem: problem[0],
				isLoading: false
			})
		})
		.catch((error) => {
			console.log('parsing failed', error)
		})
	}

	render() {
		// console.log(this.state.problem);
		var display = null;
		if(!this.state.isLoading){
			return(
				<div>
					<SiteHeader/>
					<div className='main-content-wrapper'>
						<ProblemContainer declaration={this.state.problem.declaration} />
						<InformationContainer information={this.state.problem.information}/>
						<SolutionContainer solution={this.state.problem.solution} />
					</div>
				</div>
			)
		}
		else {
			return <div className='main-content-wrapper'></div>
		}
	}
}

class AboutPage extends React.Component {
	render(){
		return(
			<div>
				<SiteHeader />
				<div className='main-content-wrapper-no-flex'>
					<h1 style={{fontWeight: 'bold', fontSize: '16px', paddingLeft: '50px'}}>About</h1>
					<p style={{width: '600px', marginTop: '25px', paddingLeft: '50px', lineHeight: '150%'}}>
						Hello, my name is Michael J Lee, and I created this website. B-notes is a database of example problems from a wide range of STEM disciplines. I started this project hoping to improve the design and availability of digital education materials.
					</p>
					<p style={{width: '600px', marginTop: '25px', paddingLeft: '50px', lineHeight: '150%'}}>
						When learning a new concept during my undergraduate engineering studies, example problems were critical for grounding theoretical material in the real world. Reading through example problems would help me understand, remember, and recall the material better. I would, however, often struggle to find more than just a few examples for a given concept. Moreover, cluttered and disorganized layouts would often make the few available resources unusable. However, I hope this website will allow new learners to access the material better than I did.

					</p>
					<p style={{width: '600px', marginTop: '25px', paddingLeft: '50px', lineHeight: '150%'}}>
						The first iteration of B-Notes is complete. I am currently working on writing content and testing the user interface. If you have any feedback or suggestions please contact me at michael_j_lee@alumni.brown.edu.
					</p>
				</div>
				
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path={'/'} component={HomePage} />
					<Route exact path={'/courses/:course_id/:panel'} component={CoursePage} />
					<Route exact path={'/problems/:problem_id'} component={ProblemPage} />
					<Route exact path={'/about'} component={AboutPage} />
					<Route exact path={'/problemsets/:set_id'} component={SetPage} />
				</Switch>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
















