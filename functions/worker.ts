/// <reference lib="deno.worker" />
self.onmessage = ({ data }) => {

  const code = data.code;

  let result = "";

  try {
      result = eval(`(() => {${code}})()`);
  }catch (e) {
      result = "Unknown Error";
  }

  self.postMessage({
    result: result
  })

  self.close();
};
