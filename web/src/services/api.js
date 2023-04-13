const dataApi = (data) => {
  return fetch("https://proyectos-molones.onrender.com/api/projects/add", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

const deleteDataApi = (params) => {
  return fetch("https://proyectos-molones.onrender.com/api/projects/delete/" + params, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Params:");
      console.log(params);
      return data;
    });
};

const listProjectsApi = () => {
  return fetch("https://proyectos-molones.onrender.com/api/projects/all")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default { dataApi, listProjectsApi, deleteDataApi };
