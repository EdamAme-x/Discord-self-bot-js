/// <reference lib="deno.worker" />
self.onmessage = ({ data }) => {

  const code = data.code;

  const result = eval(code);

  self.postMessage({
    result: result
  })

  self.close();
};
