const landmarks = { 'United States': 'Niagra Falls' };

const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.end();
};

const getLandmarks = (request, response) => {
  const responseJSON = {
    landmarks,
  };

  responseJSON.message = JSON.stringify(landmarks);

  return respondJSON(request, response, 200, responseJSON);
};

const getLandmarksMeta = (request, response) => respondJSONMeta(request, response, 200);

// Not being used yet, may be used or repurposed later for the project
// const addUser = (request, response, body) => {
//   const responseJSON = {
//     message: 'Name and age are both required',
//   };

//   if (!body.name || !body.age) {
//     responseJSON.id = 'missingParams';
//     return respondJSON(request, response, 400, responseJSON);
//   }

//   let responseCode = 201;

//   if (users[body.name]) {
//     responseCode = 204;
//   } else {
//     users[body.name] = {};
//     users[body.name].name = body.name;
//   }

//   users[body.name].age = body.age;

//   if (responseCode === 201) {
//     responseJSON.message = 'Created Successfully';
//     return respondJSON(request, response, responseCode, responseJSON);
//   }

//   return respondJSONMeta(request, response, responseCode);
// };

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found!',
    id: 'notFound',
  };

  return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => respondJSONMeta(request, response, 404);

module.exports = {
  getLandmarks,
  getLandmarksMeta,
  // addUser,
  notFound,
  notFoundMeta,
};
