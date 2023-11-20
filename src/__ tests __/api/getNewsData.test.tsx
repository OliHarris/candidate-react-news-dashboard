// based on: https://ooanishoo.medium.com/mock-axios-with-jest-and-react-testing-library-in-typescript-react-1c084d9ea880

import getNewsData from "../../api/getNewsData";
import news from "../../api/__ mocks __/news.json";

import axios, { AxiosResponse, AxiosHeaders } from "axios";
// Mock jest and set the type
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe block to organise test
describe("get-news-data-tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Return news list", async () => {
    // our desired output
    const newsData = news;

    // prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: newsData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    };
    // make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getNewsData(() => {});
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(newsData);
  });

  test("Test news endpoint error", async () => {
    // prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: {},
      status: 500,
      statusText: "Internal Server Error",
      headers: {},
      config: {
        headers: {} as AxiosHeaders,
      },
    };
    // make the mock return the custom axios response
    mockedAxios.get.mockRejectedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getNewsData(() => {});
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(undefined);
  });
});
