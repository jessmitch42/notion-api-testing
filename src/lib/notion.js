import { Client } from "@notionhq/client";

const getDatabase = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  return response.results;
};
const getUsers = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.users.list();
  return response.results;
};
const getPage = async (id) => {
  console.log("hi", id);
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.pages.retrieve({ page_id: id });
  console.log(response);
  return response;
};

export { getDatabase, getUsers, getPage };
