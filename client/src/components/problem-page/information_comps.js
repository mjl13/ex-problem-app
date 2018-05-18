var React = require('react');
import {Caret, ParagraphText, SpanText, BlockMathWrapper, SittingHeader} from '../general_comps'

export class InformationContainer extends React.Component {
	render() {
		var information = this.props.information;
		return(
			<section id='info-container'>
				<SittingHeader title='Information' />
				<div className='padded-container'>
					<InformationContent information={information} />
				</div>
			</section>
		)
	}
}

export class InformationContent extends React.Component {
	render() {
		var information = this.props.information;
		return(
				<InformationList information={information}/>
		)
	}
}

export class InformationList extends React.Component {
	render() {
		var information = this.props.information;
		information = information.map((item, index) => {
			switch(typeof item.content) {
				case 'object':
					var category = item.category + ':';
					return (<li className='info-row' key={index}>
								<h3 className='info-category'>{category}</h3>
								<InformationInlineText content={item.content} />
							</li>
					)
				case 'string':
					var category = item.category + ':';
					return (<li className='info-row' key={index}>
								<h3 className='info-category'>{category}</h3>
								<p><span>{item.content}</span></p>
							</li>
				)
			}
		})
		return(
			<ul>
				{information}
			</ul>
		)
	}
}

export class InformationInlineText extends React.Component {
	render() {
		var content = this.props.content;
		content = content.map((item, index) => {
			var topic = item
			if(index+1!==content.length){
				topic = item + ', ';
			}
			return(<span key={index}>{topic}</span>)
		})
		return(
			<p>
				{content}
			</p>
		)
	}
}