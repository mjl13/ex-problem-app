var React = require('react');
import {Caret, ParagraphText, SpanText, BlockMathWrapper, SittingHeader} from '../general_comps'


export class ProblemContainer extends React.Component {
	render() {
		var declaration = this.props.declaration
		return(
			<section id='problem-container'>
				<SittingHeader title='Problem' />
				<div className='padded-container' id='problem-padded-container'>
					<ProblemDeclaration declaration={declaration} />
				</div>
			</section>
		)
	}
}

export class ProblemDeclaration extends React.Component {


	render() {
		var declaration = this.props.declaration;
		declaration = declaration.map((item, index) => {
			switch(item.tag) {
				case 'p':
					return(<ParagraphText classes='question-component' content={item.content} key={index} />);
				case 'ol':
					return(<QuestionList qlist={item.content} key={index} />);
				case 'img':
					return(<QuestionImage img_url={item.content} key={index} />);
			}
		})

		return(
			<div>
				{declaration}
			</div>
		)
	}
}

export class QuestionImage extends React.Component {
	render() {
		var img_url = this.props.img_url;
		return(
			<img src={img_url} className='problem-image question-component' />
		)
	}
}

export class QuestionList extends React.Component {
	render() {
		var qlist = this.props.qlist;
		qlist = qlist.map((item, index) => {

			switch(item.tag){
				case 'p':
					return(
						<li className='ordered-question' key={index}>
							<ParagraphText classes='question-component' content={item.content} />
						</li>
					)
			}
		});

		return(
			<ol>{qlist}</ol>
		)
	}
}