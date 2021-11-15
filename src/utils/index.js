const reportFetcher = async () => {
  const url = process.env.REACT_APP_BACKEND_URL + "/report";
  const data = await fetch(url);
  return data.json();
};

const sendDone = (id) => {
  const url = process.env.REACT_APP_BACKEND_URL + "/done";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
};

const sendDelete = (id) => {
  const url = process.env.REACT_APP_BACKEND_URL + "/report";
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
};

export { reportFetcher, sendDone, sendDelete };
