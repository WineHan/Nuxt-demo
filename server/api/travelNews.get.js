import { ofetch } from "ofetch";

export default defineEventHandler(async (event) => {
  const query =  getQuery(event)
  
  const data = await ofetch(`https://www.travel.taipei/open-api/${query.locale}/Events/News`,{
    headers: {
      Accept: "application/json",
    },
    query:{
      page:1
    }
  });

  return {
    data,
  }
})