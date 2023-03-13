import { LoginStyled } from "./style";
import Image from "next/image";
import FormInput from "../FormInput";
import Link from "next/link";

interface LoginPageProps {
  email: string;
  password: string;
  handleEmailChange: (value: string) => void;
  handlePasswordChange: (value: string) => void;
}

const LoginPage = (props: LoginPageProps) => {
    const { email, password, handleEmailChange, handlePasswordChange } = props;
  return (
    <LoginStyled>
      <Image src="/images/logo.png" alt="Veleri Logo" width={292} height={74} />
      <form>
        <div className="input-container">
          <FormInput
            label={"Email"}
            value={email}
            placeholder={"Unesite email adresu"}
            type={"email"}
            onChange={handleEmailChange}
            errorMessage={""}
          />
          <FormInput
            label={"Lozinka"}
            value={password}
            placeholder={"Unesite lozinku"}
            type={"password"}
            onChange={handlePasswordChange}
            errorMessage={""}
          />
        </div>
        <p>
          Nemate račun?{" "}
          <Link href="/">
            <b>Registrirajte se</b>
          </Link>
        </p>
        <button type="submit">Prijava</button>
      </form>
    </LoginStyled>
  );
};

export default LoginPage;