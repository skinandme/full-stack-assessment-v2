const foo = async () => {
  const response = await fetch("http://localhost:9000/foo");

  return await response.text();
};

export default foo;
