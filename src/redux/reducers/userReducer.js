const initalState = {
	username: "",
	password: "",
	email: "",
	is_doctor: false,
	phone: "",
	fullname: "",
	sex: "",
	profile_picture_url: "",
	weight: null,
	height: null,
	medical_records: "",
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case "SET_USER":
			return { ...state, ...action.user };
		default:
			return state;
	}
};

export default userReducer;
