// @ts-expect-error fetch expects 1-2 arguments instead of 0 or more
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default fetcher;
