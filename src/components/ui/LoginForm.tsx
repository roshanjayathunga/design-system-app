import { useState } from "react";
import { Button } from "./button";

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input
          data-testid="email"
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          data-testid="password"
          id="password"
          name="password"
          type="password"
          required
        />
      </div>
      <Button type="submit">Login</Button>
      {submitted && (
        <div>
          Everything is perfect. Your account is ready and we should probably
          get you started!
        </div>
      )}
    </form>
  );
}
