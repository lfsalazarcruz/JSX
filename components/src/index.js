import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					<p>Are you sure you want to do this?</p>
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 4:45PM" 
					img={faker.image.avatar()}
					comment="Nice post!"/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timeAgo="Today at 4:40PM" 
					img={faker.image.avatar()}
					comment="Awesome!"/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Emi" 
					timeAgo="Today at 4:29PM" 
					img={faker.image.avatar()}
					comment="Great post! Congrats!"/>
			</ApprovalCard>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));