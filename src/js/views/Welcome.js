import React from "react";

export const WC = () => {
	return (
		<div className="card-group">
			<div className="card">
				<img
					src="https://legalshred.com/wp-content/uploads/2016/12/s-USES-FOR-PILL-BOTTLES-300x200-300x200.jpg"
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">Request Medication</h5>
					<p className="card-text">
						Need to fill a new RX?
						<button>click here</button>
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">Speedy RX </small>
				</div>
			</div>
			<div className="card">
				<img
					src="https://i.pinimg.com/474x/fb/fd/04/fbfd042edca5a485a3a29357f9c78b33--emoji-faces-smiley-faces.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Current MEdication </h5>
					<p className="card-text">
						Would like to know the more about your medication ??
						<button>Info</button>
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">Speedy RX </small>
				</div>
			</div>
			<div className="card">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8Wbos3GWxT-dEpyF8QB3mI_CG6DjWKY6OA&usqp=CAU"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">File an Appeal </h5>
					<p className="card-text">
						If you are you being declined a certain medication and would like to file an appeal
						<button>Appeal</button>
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">Speedy RX </small>
				</div>
			</div>
		</div>
	);
};
export default WC;
