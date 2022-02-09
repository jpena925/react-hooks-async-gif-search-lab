import React from "react";

function GifSearch({ onSubmitSearch, search, setSearch }) {


	return (
		<div>
			<form className="form-group" onSubmit={(e) => onSubmitSearch(e, search)}>
				<label> FIND GIFS! </label>
				<input type="text" id="search" placeholder="Search..." onChange={(e) => setSearch((search) => e.target.value)}/>
				<button type="submit" className="btn btn-success">
					🔍
				</button>
			</form>
		</div>
	);
}

export default GifSearch;
