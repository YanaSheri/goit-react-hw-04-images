import axios from "axios";
//https://pixabay.com/api/?key=25287120-bf1334483d346d0412f62d231&q=yellow+flowers&image_type=photo
//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
//KEY = 25287120-bf1334483d346d0412f62d231

axios.defaults.baseURL = "https://pixabay.com";

const params = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    key: "25287120-bf1334483d346d0412f62d231",
    per_page: 12,
});
  
export default function getImages (q = "city", page = 1)  {
  params({ q, page });
  return axios
    .get("/api/")
    .then((res) => {
      if (!res.data.hits.length) {
        throw new Error("Not found");
      }
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
