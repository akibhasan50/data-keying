import http from "../../utilities/http-common";

const getToken = async (data) => {
  var formdata = new FormData();
  formdata.append("username", data.username);
  formdata.append("password", data.password);

  var response = await http.post("/login", formdata);

  if (response.data.access_token) {
    localStorage.setItem("user", JSON.stringify(response.data));

    var hours = 1; // Reset when storage is more than 24hours
    var now = Date.now();
    var setupTime = localStorage.getItem("setupTime");
    if (setupTime == null) {
      localStorage.setItem("setupTime", now);
    } else if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }

  return response;
};

const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  getToken,
  logout,
};

export default AuthService;
