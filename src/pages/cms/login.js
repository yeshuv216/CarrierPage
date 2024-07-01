import Head from "next/head";
import { useState } from "react";

export default function LoginPage({ username }) {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value.trim() });
  };

  const handleOnSubmit = () => {};

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className="flex flex-col items-center my-32 container w-11/12">
        <h1 className="title text-center">Log in</h1>
        <form
          className="items-center flex flex-col gap-6 mt-10 w-full lg:w-[25%]"
          onSubmit={handleOnSubmit}
        >
          <input
            className="inputItem w-full text-base"
            minLength="3"
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
          <input
            className="inputItem w-full text-base"
            minLength="5"
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <button value={"Submit"} className="btn mt-4" type="submit">
            Login
          </button>
        </form>
      </section>
    </>
  );
}
