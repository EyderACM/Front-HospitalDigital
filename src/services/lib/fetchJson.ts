export interface RequestError extends Error {
  response: unknown;
  data: unknown;
}

export default async function fetchJson(...args: Parameters<typeof fetch>) {
  try {
    const response = await fetch(...args);

    if (response.status === 204) {
      return {
        status: 204,
        message: "No Content",
        data: {},
      };
    }

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    const error = new Error(response.statusText) as RequestError;
    error.response = response;
    error.data = data;
    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}
