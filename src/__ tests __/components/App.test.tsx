import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../components/App";
import news from "../../api/__ mocks __/news.json";
import noNews from "../../api/__ mocks __/noNews.json";

import axios from "axios";

// describe block to organise test
describe("initial default tests", () => {
  afterEach(cleanup);

  test("Renders the main page", () => {
    render(<App />);
    const buttonElement = screen.getByText(/ITV News/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

describe("app-page-tests", () => {
  afterEach(cleanup);

  test("Load app page with data", async () => {
    // our desired output
    const newsData = news;
    const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce(newsData);

    render(<App />);

    const receivedListItems = await screen.findAllByRole("img");
    // expect fifteen images
    expect(receivedListItems.length === 15).toBeTruthy();

    getSpy.mockRestore();
  });

  test("Load app page with no data", async () => {
    // our desired output
    const newsData = noNews;
    const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce(newsData);

    render(<App />);

    const noDataMessage = await screen.findByText("No data");
    expect(noDataMessage).toBeInTheDocument();

    getSpy.mockRestore();
  });
});
