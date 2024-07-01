import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage({ username }) {
  const router = useRouter();
  const { msg } = router.query;
  return (
    <>
      <h2>Log in</h2>
      <form
        className="mt-[10%] items-center w-[100%] ml-[35%]"
        action="/api/login"
        method="POST"
      >
        <input
          className="border-2 p-[1%] border-black w-[30%] h-[50%]"
          minLength="3"
          name="Username"
          id="username"
          type="text"
          placeholder="Username"
          required
        ></input>
        <br />
        <input
          className="border-2 p-[1%] mt-10 border-black w-[30%] h-[50%]"
          minLength="5"
          name="password"
          id="Password"
          type="password"
          placeholder="Password"
          required
        ></input>
        <br />
        <button
          value={"Submit"}
          className="btn mt-10 ml-[8%] mb-20"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
}
