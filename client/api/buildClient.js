import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL:
        // "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
        "http://www.caffeinecentral.online",
      headers: req.headers,
      timeout: 10000,
    });
  } else {
    return axios.create();
  }
};
